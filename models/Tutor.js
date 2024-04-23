const mongoose = require('mongoose')

const TutorSchema = new mongoose.Schema({

  nombre:{
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    required: true
  },
  celular:{
    type: Number,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  contrasena:{
    type: String,
    require: true
  }  
})
module.exports = mongoose.model('Tutor', TutorSchema)