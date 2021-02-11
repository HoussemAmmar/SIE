const mongoose = require('mongoose')

const acteurMoraleSchema = new mongoose.Schema({
    

    email : {type : String},
    password : {type : String},
    ref_domaine: {type: String},
    contributeur: {type: String,},
    type_acteur: {type: String, },
    twitter: {type: String, },
    facebook: {type: String, },
    skype: {type: String},
    data_inscription : {type:  Date },
    tel_fixe : {type:  Number },
    tel_mobile: {type: Number},
    etat :  {type:  Number },
    
})

module.exports = mongoose.model("ActeurMorale", acteurMoraleSchema)