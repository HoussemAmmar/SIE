const mongoose = require('mongoose')

const typeActeurSchema = new mongoose.Schema({
    
    type : {type : String},  
    
})

module.exports = mongoose.model("TypeActeur", typeActeurSchema)