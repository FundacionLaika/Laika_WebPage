const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const knex = require("knex");

const consulta = require('./controllers/consulta');

const app = express();

app.use(cors())
app.use(bodyParser.json());

const db = knex({

    client: 'mysql',
    connection: {
        host: '107.180.41.48',
        user: 'dbmanager',
        password: 'Laika2012',
        database: 'LaikaDBTest',
    }
});



app.post('/consulta', (req, res) => { consulta.handleConsultaPost(req, res, db)})

app.get('/', (req,res) => {
    res.send('this is working');
})

app.listen(3001, () => {
    console.log('app is running on port 3000');
})

