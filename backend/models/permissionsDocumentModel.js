const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const permissionsDocumentSchema = new mongoose.Schema({
    
  
    acteur_id : {type : ObjectId},
    document_id : {type:  ObjectId },
    permission : {type:  String },
    etat : {type:  Number},
    date_affectation : {type:  Number },
    date_demande : {type:  Number },
    
})

module.exports = mongoose.model("PermissionDocument", permissionsDocumentSchema)