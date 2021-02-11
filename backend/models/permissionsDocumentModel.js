const permissionsDocumentSchema = new mongoose.Schema({
    
  
    acteur_id : {type : String},
    document_id : {type:  String },
    permission : {type:  String },
    etat : {type:  String },
    date_affectation : {type:  Date },
    date_demande : {type:  Date },
    
})

module.exports = mongoose.model("PermissionDocument", permissionsDocumentSchema)