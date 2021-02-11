const mongoose = require('mongoose')

const specialitySchema = new mongoose.Schema({
    
    speciality : {type : String},  
    
})

module.exports = mongoose.model("Speciality", specialitySchema)