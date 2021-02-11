const mongoose = require('mongoose')

const typeAccessSchema = new mongoose.Schema({
    
    type : {type : String},  
    
})

module.exports = mongoose.model("TypeAccess", typeAccessSchema)