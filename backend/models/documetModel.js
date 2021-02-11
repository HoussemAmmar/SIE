const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
    
    url_document : {type : String, required: true},
    acteur_id : {type : String, required: true},
    admin_id : {type:  String , required: true},
    type_access_id : {type:  String , required: true},
    etat : {type:  String , required: true},
    date_creation : {type:  Date , required: true},
    date_validation : {type:  Date , required: true},
    
})

module.exports = mongoose.model("Document", documentSchema)