const droitDocumentAuteurSchema = new mongoose.Schema({
    
  
    acteur_id : {type : String},
    document_id : {type:  String },
    droit_id : {type:  String },
    date_affectation : {type:  Date },
    
    
})

module.exports = mongoose.model("DroitDocumentAuteur", droitDocumentAuteurSchema)