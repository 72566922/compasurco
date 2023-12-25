const mongoose =  require('mongoose');

const usuario_model = mongoose.Schema({
    nombres:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    usuario:{
        type:String,
        required:true
    },
    contrasenia:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('usua', usuario_model);