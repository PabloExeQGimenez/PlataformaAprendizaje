const express = require('express')
const ProfeRouter = express.Router()
const ProfeController = require('../controllers/ProfeController')

ProfeRouter.post('/profes', ProfeController.crearProfe)
ProfeRouter.get('/profes', ProfeController.obtenerProfes)
ProfeRouter.delete('/profes/:id', ProfeController.eliminarProfe)

module.exports = ProfeRouter

