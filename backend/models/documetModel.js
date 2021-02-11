const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
    
    url_document : {type : String},
    acteur_id : {type : String},
    admin_id : {type:  String },
    type_access_id : {type:  String },
    etat : {type:  String },
    date_creation : {type:  Date },
    date_validation : {type:  Date },
    
})

module.exports = mongoose.model("Document", documentSchema)