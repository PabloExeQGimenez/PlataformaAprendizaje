const express = require('express')
const MensajeAlumnoRouter = express.Router()
const MensajeAlumnoController = require('../controllers/MensajeAlumnoController')

MensajeAlumnoRouter.post('/mensajealumnos', MensajeAlumnoController.crearMensajeAlumno)
MensajeAlumnoRouter.get('/mensajealumnos', MensajeAlumnoController.obtenerMensajeAlumnos)
MensajeAlumnoRouter.delete('/mensajealumnos/:id', MensajeAlumnoController.eliminarMensajeAlumno)

module.exports = MensajeAlumnoRouter

