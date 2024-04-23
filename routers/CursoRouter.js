const express = require('express')
const CursoRouter = express.Router()
const CursoController = require('../controllers/CursoController')

CursoRouter.post('/cursos', CursoController.crearCurso)
CursoRouter.get('/cursos', CursoController.obtenerCursos)

module.exports = CursoRouter