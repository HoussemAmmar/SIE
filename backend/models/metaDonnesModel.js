const metaDoneesSchema = new mongoose.Schema({
    
    url_xml : {type : String, required: true},
    type_document_id : {type : String, required: true},
    document_id : {type:  String , required: true},
    date_creation : {type:  Date , required: true},
    
})

module.exports = mongoose.model("Meta Donees", metaDoneesSchema)