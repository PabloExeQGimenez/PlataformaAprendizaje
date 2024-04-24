const express = require('express')
const app = express()
require("dotenv").config()
const mongoose = require('mongoose')

const TareaRouter = require('./routers/TareaRouter')
const CursoRouter = require('./routers/CursoRouter')
const ProfeRouter = require('./routers/ProfeRouter')
const TutorRouter = require('./routers/TutorRouter')
const RepAcademicoRouter = require('./routers/RepAcademicoRouter')
const AsistenciaRouter = require('./routers/AsistenciaRouter')
const EventoRouter = require('./routers/EventoRouter')
const MensajeAlumnoRouter = require('./routers/MensajeAlumnoRouter')
const RepExamenRouter = require('./routers/RepExamenRouter')

app.use(express.json({ extended: true }))
app.use(express.urlencoded())

// enrutado
app.use('/api', TareaRouter)
app.use('/api', CursoRouter)
app.use('/api', ProfeRouter)
app.use('/api', TutorRouter)
app.use('/api', RepAcademicoRouter)
app.use('/api', AsistenciaRouter)
app.use('/api', EventoRouter)
app.use('/api', MensajeAlumnoRouter)
app.use('/api', RepExamenRouter)


// coneccion BD
const URL = process.env.MONGO_DB

mongoose.connect(URL, {})
.then(() => {
    console.log('Conectado a la base de datos')
})
.catch((err) => {
    console.log(err)
})



app.listen(5400, () => {
    console.log('Servidor en puerto 5400')
})
