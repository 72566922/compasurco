const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env


const usuario_Service = require('./service/usuario_service');
const path = require("path");

//swagger


const app = express();
const port = 5000;

app.use(cors({ origin: '*' }));



// Invocando nuestros servicios
app.use(express.json());

app.use('/api', usuario_Service);


// Rutas
app.get('/', (req, res) => {
    res.send('Servicio Iniciado');
  });

mongoose
  .connect(process.env.url_DataBase)
  .then(function () {
    console.log(process.env.mensaje_base_datos);
  })
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log("Se ha iniciado la aplicación de NODE en el puerto " + port);
});