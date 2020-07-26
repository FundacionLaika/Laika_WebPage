const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const knex = require("knex");

const app = express();

const db = knex({
    client: "mysql",
    connection: {
        host: "107.180.41.48",
        user: "dbmanager",
        password: "Laika2012",
        database: "LaikaDBTest",
    },
});

// db.select("*")
//     .from("USUARIO")
//     .then((data) => {
//         console.log(data);
//     });

app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(cors());

const login = require("./controllers/login");
const registro = require("./controllers/registro");

app.get("/", (req, res) => {
    res.send("this is working");
});

app.listen(3000, () => {
    console.log("app is running on port 3000");
});

//* --------- Controllers -----------
app.post("/login", login.handleLogin(db, bcrypt)); //currying the functions
app.post("/registro", registro.handleRegistro(db, bcrypt));
