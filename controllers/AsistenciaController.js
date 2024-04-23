const Asistencia = require('../models/Asistencia')

const AsistenciaController = {
  crearAsistencia: async (req, res) => {
    try{
      const {estudiante, faltas, tardanzas, justificadas, observaciones} = req.body
      const nuevaAsistencia = new Asistencia({
        estudiante, faltas, tardanzas, justificadas, observaciones
      })
      await nuevaAsistencia.save()
      return res.status(201).send({
        success: true,
        nuevaAsistencia
      })
    }catch (error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  },

  obtenerAsistencias: async (req, res) => {
    try{
      const asistencias = await Asistencia.find()
      return res.status(200).send({
        success: true,
        asistencias
      })
    } catch (error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  },

  eliminarAsistencia: async (req, res) => {
    try{
      const {id} = await req.params
      await Asistencia.findByIdAndDelete(id)
      return res.status(200).send({
        success: true,
        message: "Registro de asistencia eliminado"
      })
    } catch(error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  }
}
module.exports = AsistenciaController