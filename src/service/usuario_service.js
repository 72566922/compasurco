
const usuario_model = require('../models/usuario_model');
const express = require('express');
const linea = express.Router();

// Agrega este middleware para analizar JSON
linea.use(express.json());


//get,post,put,delet HTTP
/////Metodos HTTP [REST{json} SOA{xml}]

linea.post('/usua', async (req, res) => {
    try {
        console.log('Recibiendo solicitud para /usua', req.body);

        // Verificar la existencia del usuario en la base de datos
        const existingUser = await usuario_model.findOne({ correo: req.body.correo });

        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Resto del código para crear y guardar el nuevo usuario
        const nuevoUsuario = new usuario_model(req.body);
        await nuevoUsuario.save();

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error en el servidor al crear usuario' });
    }
});





linea.get('/usuarios', async (req, res) => {
    try {
        const users = await usuario_model.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error en el servidor al obtener usuarios' });
    }
});



linea.get('/usuarioOK/', async (req, res) => {
    const { usuario, contrasenia } = req.query; // Utiliza req.query para obtener parámetros de la URL

    try {
        const usuarioEncontrado = await usuario_model.findOne({ usuario, contrasenia });

        if (usuarioEncontrado) {
            res.status(200).json(usuarioEncontrado);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        res.status(500).json({ message: 'Error en el servidor al buscar usuario' });
    }
});

module.exports = linea;

/**linea.get('/usua/:id',(req, res)=>{
    const {id} = req.params;
    usuario_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

linea.get('/usuarioByUser/:user',(req, res)=>{
    const {user} = req.params;
    usuario_model
    .findOne({usuario: user})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});



linea.get("/users",async (req, res) => {
    authenticate
    .find()
    .then((data)=>res.json(data))
    .catch((error)=> res.json({message:error}));
});*/



