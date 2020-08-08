const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const knex = require("knex");

const consulta = require("./controllers/consulta");
const login = require("./controllers/login");
const registro = require("./controllers/registro");
const usuarios = require("./controllers/usuarios");
const cambiarCorreo = require("./controllers/cambiarCorreo");
const cambiarContrasena = require("./controllers/cambiarContrasena");
const subirImagen = require("./controllers/subirImagen");
const eliminarUsuario = require("./controllers/eliminarUsuario");

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        //Funcion para poner una estampa de tiempo para tener un nombre unico
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});

// Verificar tipo de archivo
function checkFileType(file, cb) {
    // Formatos permitidos
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    // Ver mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Solo Imagenes");
    }
}

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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
app.post("/registro", registro.handleRegistro(db, bcrypt));
app.get("/usuarios", usuarios.handleUsuariosGet(db));
app.put("/cambiarCorreo", cambiarCorreo.handleCorreo(db));
app.put("/cambiarContrasena", cambiarContrasena.handleContrasena(db));
app.put(
    "/subirImagenPerfil",
    upload.single("foto"),
    subirImagen.handleImagenPerfil(db, fs)
);
app.put("/subirImagenRegistro", subirImagen.handleImagenRegistro(db));
app.put("/subirImagenMedico", subirImagen.handleImagenMedico(db));
app.put("/subirImagenHogar", subirImagen.handleImagenHogar(db));
app.put("/subirImagenAdopcion", subirImagen.handleImagenAdopcion(db));
app.post("/eliminarUsuario", eliminarUsuario.handleEliminarUsuario(db));

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});

// const sharp = require("sharp");
