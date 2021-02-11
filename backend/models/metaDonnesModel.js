const metaDoneesSchema = new mongoose.Schema({
    
    url_xml : {type : String},
    type_document_id : {type : String},
    document_id : {type:  String },
    date_creation : {type:  Date },
    
})

module.exports = mongoose.model("MetaDonees", metaDoneesSchema)