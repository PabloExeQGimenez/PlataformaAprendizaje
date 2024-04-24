const RepExamen = require('../models/RepExamen')

const RepExamenController = {
  crearRepExamen: async (req, res) => {
    try{
      const {estudiante, materia, estado, nota, observacion} = req.body
      const repExamen = new RepExamen({
        estudiante, materia, estado, nota, observacion
      })
      await repExamen.save()
      return res.status(201).send({
        success: true,
        repExamen
      })
    }catch (error){
      return res.status(500).send({
        success:false,
        message: error.message
      })
    }
  },

  obtenerRepExamenes: async (req, res) =>{
    try{
      const repExamenes = await RepExamen.find()
      return res.status(200).send({
        success: true,
        repExamenes
      })
    }catch (error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  }
} 
module.exports = RepExamenController