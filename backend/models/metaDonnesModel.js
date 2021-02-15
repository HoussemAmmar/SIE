const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const metaDoneesSchema = new mongoose.Schema({
    
    url_xml : {type : String},
    type_document_id : {type : ObjectId},
    document_id : {type:  ObjectId },
    date_creation : {type:  Number },
    
})

module.exports = mongoose.model("MetaDonees", metaDoneesSchema)