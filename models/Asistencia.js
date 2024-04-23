const mongoose = require('mongoose')

const AsistenciaSchema = new mongoose.Schema({
  estudiante: String,
  faltas: Number,
  tardanzas: Number
})
module.exports = mongoose.model('Asistencia', AsistenciaSchema);