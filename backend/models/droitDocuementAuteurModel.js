const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const droitDocumentAuteurSchema = new mongoose.Schema({
    
  
    acteur_id : {type : ObjectId},
    document_id : {type: ObjectId },
    droit_id : {type:  ObjectId },
    date_affectation : {type:  Number },
    
    
})

module.exports = mongoose.model("DroitDocumentAuteur", droitDocumentAuteurSchema)