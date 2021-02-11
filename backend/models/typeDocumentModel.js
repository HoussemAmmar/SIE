const mongoose = require('mongoose')

const typeDocumentSchema = new mongoose.Schema({
    
    type : {type : String},  
    
})

module.exports = mongoose.model("TypeDocument", typeDocumentSchema)
