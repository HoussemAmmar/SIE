const mongoose = require('mongoose')

const typeDocumentSchema = new mongoose.Schema({
    
    type : {type : String, required: true},  
    
})

module.exports = mongoose.model("Type document", typeDocumentSchema)
