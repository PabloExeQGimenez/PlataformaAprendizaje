const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
  nombre:{
    type: String,
    required: true
  },
  descripcion:{
    type: String,
    required: true
  },
  fechaInicio:{
    type: String,
    required: true
  },
  fechaEntrega:{
    type: String,
    required:true
  },
  estado:{
    type: String,
    required: true
  },
  nota:{
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Tarea', tareaSchema);