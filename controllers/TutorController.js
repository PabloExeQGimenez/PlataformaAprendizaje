const Tutor = require('../models/Tutor')

const TutorController = {

  crearTutor: async (req, res) => {
    try{
      const {nombre, apellido, dni, celular, email, contrasena} = req.body
      const nuevoTutor = new Tutor({
        nombre, apellido, dni, celular, email, contrasena
      })
      await nuevoTutor.save()
      return res.status(201).send({
        success: true,
        nuevoTutor
      })
    } catch (error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  },

  obtenerTutores: async (req, res) => {
    try{
      const tutores = await Tutor.find()
      return res.status(200).send({
        success: true,
        tutores
      })
    } catch(error){
      return res.status(500).send({
        success: false,
        message: error.message
      })
    }
  }
}
module.exports = TutorController