const RepExamen = require('../models/RepExamen')

const RepExamenController = {
  crearRepExamen: async (req, res) => {
    try{
      const {estudiante, materia, estado, nota, observacion} = req.body
      const repExamen = new RepExamen({
        
      })
    }catch (error){

    }
  }
} 