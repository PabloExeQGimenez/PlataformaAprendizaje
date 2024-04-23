const express = require('express')
const TutorRouter = express.Router()
const TutorController = require('../controllers/TutorController')

TutorRouter.post('/tutores', TutorController.crearTutor)
TutorRouter.get('/tutores', TutorController.obtenerTutores)


module.exports = TutorRouter