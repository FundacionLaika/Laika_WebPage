const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const knex = require("knex");
const fileUpload = require('express-fileupload');

const consulta = require("./controllers/consulta");
const registroGeneral = require("./controllers/registroGeneral");
const expedienteMedico = require("./controllers/expedienteMedico");
const hogarTemporal = require("./controllers/hogarTemporal");
const adopcion = require("./controllers/adopcion");

const login = require("./controllers/login");
const registro = require("./controllers/registro");
const usuarios = require("./controllers/usuarios");
const cambiarCorreo = require("./controllers/cambiarCorreo");
const cambiarContrasena = require("./controllers/cambiarContrasena");
const eliminarUsuario = require("./controllers/eliminarUsuario");

const subirImagen = require("./controllers/subirImagen");



const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(fileUpload());
app.use(express.json());


const db = knex({
    client: "mysql",
    connection: {
        host: "107.180.41.48",
        user: "dbmanager",
        password: "Laika2012",
        database: "LaikaDBTest",
    },
});

//* --------- Controllers -----------
app.post("/consulta", (req, res) => {
    consulta.handleConsultaPost(req, res, db);
});

app.get("/registroGeneral", (req, res) => {
    registroGeneral.handleGetRG(req, res, db);
});

app.put("/registroGeneral", (req, res) => {
    registroGeneral.handleUpdateRG(req, res, db);
});

app.get("/expedienteMedico", (req, res) => {
    expedienteMedico.handleGetEM(req, res, db);
});

app.get("/hogarTemporal", (req, res) => {
    hogarTemporal.handleGetHT(req, res, db);
});

app.get("/adopcion", (req, res) => {
    adopcion.handleGetA(req, res, db);
});

app.put('/upload', async (req, res) => {

    console.log(req.body)
    const {imagen} = req.body;


    
    if (imagen) {
        await db("ANIMAL_RESCATADO")
        .where("ID_Animal", "=", 1)
        .update({
            Foto: imagen,
        })
        .then(() => {
            console.log(imagen);
            res.json(imagen);
        })
        .catch((err) => res.status(400).json("Soy imagen del med"));
        

    } else {
        res.sendStatus(400);
    }
})



app.post("/login", login.handleLogin(db, bcrypt));
app.post("/registro", registro.handleRegistro(db, bcrypt));
app.get("/usuarios", usuarios.handleUsuariosGet(db));
app.put("/cambiarCorreo", cambiarCorreo.handleCorreo(db));
app.put("/cambiarContrasena", cambiarContrasena.handleContrasena(db));
app.put("/subirImagenRegistro", subirImagen.handleImagenRegistro(db));
app.put("/subirImagenMedico", subirImagen.handleImagenMedico(db));
app.put("/subirImagenHogar", subirImagen.handleImagenHogar(db));
app.put("/subirImagenAdopcion", subirImagen.handleImagenAdopcion(db));
app.post("/eliminarUsuario", eliminarUsuario.handleEliminarUsuario(db));

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});

