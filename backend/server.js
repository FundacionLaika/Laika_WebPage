const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const knex = require("knex");
const fileUpload = require('express-fileupload');

const consulta = require("./controllers/consulta");
const registroGeneral = require("./controllers/registroGeneral");
const expedienteMedico = require("./controllers/expedienteMedico");
const hogarTemporal = require("./controllers/hogarTemporal");
const adopcion = require("./controllers/adopcion");

const events = require("./controllers/events");

const login = require("./controllers/login");
const signup = require("./controllers/signup");
const changePassword = require("./controllers/changePassword");
const usuarios = require("./controllers/usuarios");
const eliminarUsuario = require("./controllers/eliminarUsuario");
const eliminarAnimal = require("./controllers/eliminarAnimal");

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

app.post("/registroGeneral", (req, res) => {
    registroGeneral.handlePostRG(req, res, db);
});

app.get("/expedienteMedico", (req, res) => {
    expedienteMedico.handleGetEM(req, res, db);
});

app.put("/expedienteMedico", (req, res) => {
    expedienteMedico.handleUpdateEM(req, res, db);
});

app.get("/hogarTemporal", (req, res) => {
    hogarTemporal.handleGetHT(req, res, db);
});

app.put("/hogarTemporal", (req, res) => {
    hogarTemporal.handleUpdateHT(req, res, db);
});

app.get("/adopcion", (req, res) => {
    adopcion.handleGetA(req, res, db);
});

app.put("/adopcion", (req, res) => {
    adopcion.handleUpdateA(req, res, db);
});

app.post("/eliminarAnimal", eliminarAnimal.handleEliminarAnimal(db));



app.get("/events", events.handleGetEvents(db));


app.get("/usuarios", usuarios.handleGetUsuarios(db));

app.post("/usuario", usuarios.handleGetUsuario(db));

app.put("/usuario", usuarios.handleUpdateUsuario(db, bcrypt));


app.post("/login", login.handleLogin(db, bcrypt));

app.post("/signup", signup.handleSignUp(db, bcrypt));

app.put("/changePassword", changePassword.handleChangePassword(db, bcrypt));

app.post("/eliminarUsuario", eliminarUsuario.handleEliminarUsuario(db));

const PORT = process.env.PORT || 3000
app.listen( PORT, () => {
    console.log("Corriendo en el puerto " + PORT);
});

