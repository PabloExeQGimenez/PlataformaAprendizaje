const express = require('express')
const RepEvaluacionRouter = express.Router()
const RepEvaluacionController = require('../controllers/RepEvaluacionController')

RepEvaluacionRouter.post('/repevaluaciones', RepEvaluacionController.crearRepEvaluacion)
RepEvaluacionRouter.get('/repevaluaciones', RepEvaluacionController.obtenerRepEvaluaciones)

module.exports = RepEvaluacionRouter
