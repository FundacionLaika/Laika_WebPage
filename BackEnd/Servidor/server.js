const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const app = express();

const db = knex({
    client: '',
    connection: {
        host: '',
        user: '',
        password: '',
        database: ''
    }
});

app.get('/', (req,res) => {
    res.send('this is working');
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})