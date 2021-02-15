const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const documentValidateSchema = new mongoose.Schema({
    
    document_id : {type :ObjectId,},
    date_validation : {type : Number,},  
    
})

module.exports = mongoose.model("DocumentValidate", documentValidateSchema)