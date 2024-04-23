const express = require('express')
const AsistenciaRouter = express.Router()
const AsistenciaController = require('../controllers/AsistenciaController')

AsistenciaRouter.post('/asistencias', AsistenciaController.crearAsistencia)
AsistenciaRouter.get('/asistencias', AsistenciaController.obtenerAsistencias)

module.exports = AsistenciaRouter