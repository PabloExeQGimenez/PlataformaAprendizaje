const mongoose = require('mongoose')

const ProfeSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true
  },
  apellido:{
    type: String,
    required: true
  },
  dni:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  }, 
  usuario:{
    type: String,
    required: true
  },
  contrasena:{
    type: String,
    required: true
  },
  direccion:{
    type: String,
    required: true
  },
  localidad:{
    type: String,
    required: true
  },
  provincia:{
    type: String,
    required: true
  },
  curso: {
    type: String,
    default: "Desarrollo Backend"
  },
  grado: {
    type: String,
    default: "2°"
  },
  materias: {
    type: [String],
    default: ["NODE.js", "MongoDB"]
  }
})
module.exports = mongoose.model('Profe', ProfeSchema);