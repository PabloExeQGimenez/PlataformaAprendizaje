const express = require('express')
const RepExamenRouter = express.Router()
const RepExamenController = require('../controllers/RepExamenController')

RepExamenRouter.post('/repexamenes', RepExamenController.crearRepExamen)
RepExamenRouter.get('/repexamenes', RepExamenController.obtenerRepExamenes)

module.exports = RepExamenRouter