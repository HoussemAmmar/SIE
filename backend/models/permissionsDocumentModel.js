const permissionsDocumentSchema = new mongoose.Schema({
    
  
    acteur_id : {type : String, required: true},
    document_id : {type:  String , required: true},
    permission : {type:  String , required: true},
    etat : {type:  String , required: true},
    date_affectation : {type:  Date , required: true},
    date_demande : {type:  Date , required: true},
    
})

module.exports = mongoose.model("Permission Document", permissionsDocumentSchema)