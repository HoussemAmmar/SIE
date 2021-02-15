const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const documentSchema = new mongoose.Schema({
    
    url_document : {type : String},
    acteur_id : {type : ObjectId},
    admin_id : {type:  ObjectId },
    type_access_id : {type:  ObjectId },
    etat : {type:  Number },
    date_creation : {type:  Number },
    date_validation : {type:  Number },
    
})

module.exports = mongoose.model("Document", documentSchema)