const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const knex = require("knex");

const consulta = require("./controllers/consulta");
const login = require("./controllers/login");
const registro = require("./controllers/registro");
const usuarios = require("./controllers/usuarios");
const cargaUsuario = require("./controllers/cargarDatos");
const eliminarUsuario = require("./controllers/eliminarUsuario");

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
app.post("/login", login.handleLogin(db, bcrypt));
//Todo No permitir el mismo correo
app.post("/registro", registro.handleRegistro(db, bcrypt));
app.get("/usuarios", usuarios.handleUsuariosGet(db));
app.get("/cargarDatos", cargaUsuario.handleCargaUsuario(db));
//Todo *no poder eliminar a un admin y arreglar responsividad
app.post("/eliminarUsuario", eliminarUsuario.handleEliminarUsuario(db));
//Controladores a agregar
//* MenuUsuario
// -> Modificar correo y contra
//* PDF
// -> Dar los datos necesarios al pdf
// ->

app.get("/", (req, res) => {
    res.send("this is working");
});

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});
