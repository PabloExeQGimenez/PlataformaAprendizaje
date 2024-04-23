const RepEvaluacion = require('../models/RepEvaluacion')

const RepEvaluacionController = {

  crearRepEvaluacion: async (req, res) =>{
    try{
      const {estudiante, notas, observaciones} = req.body
      const nuevoRep = new RepEvaluacion({
        estudiante, notas, observaciones
      })
      await nuevoRep.save()
      return res.status(201).send({
        success: true,
        nuevoRep
      })
    } catch(error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  },

  obtenerRepEvaluaciones: async (req, res) => {
    try{
      const repEvaluaciones = await RepEvaluacion.find()
      return res.status(200).send({
        success: true,
        repEvaluaciones
      })
    } catch (error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  },

  eliminarRepEvaluacion: async (req, res) =>{
    try{
      const {id} = req.params
      await RepEvaluacion.findByIdAndDelete(id)
      return res.status(200).send({
        success: true,
        message: "Reporte de evaluacion eliminado"
      })
    } catch(error) {
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  }
}
module.exports = RepEvaluacionController