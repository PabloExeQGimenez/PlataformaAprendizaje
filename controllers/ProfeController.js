const Profe = require('../models/Profe')

const ProfeController = {
  
  crearProfe: async (req, res) =>{

    try{
      const {nombre, apellido, dni, email, usuario,
        contrasena, direccion, localidad, provincia} = req.body
      const nuevoProfe = new Profe({
        nombre, apellido, dni, email, usuario,
        contrasena, direccion, localidad, provincia
      })
      await nuevoProfe.save()
      return res.status(201).send({
        success: true,
        nuevoProfe
      })
    } catch(error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  },

  obtenerProfes: async (req, res) =>{
    try{
    const profes = await Profe.find()
    return res.status(200).send({
      success: true,
      profes
    })
  } catch(error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  },

  eliminarProfe: async (req, res) => {
    try{
      const {id} = await req.params
      await Profe.findByIdAndDelete(id)
      return res.status(200).send({
        success: true,
        message: "Profesor eliminado"
      })
    } catch(error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  }
}
module.exports = ProfeController