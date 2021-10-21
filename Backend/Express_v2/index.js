/* Author: Yevhenii Madzhar */
/* Version: 1.0 */
/* Ejercicios 1-3 de Express */

const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');

const app = express();
const router = require('./router')

const PORT = 3000;

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenidos a Express');
});

app.use(router);

//SERVER
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
});