const mongoose = require('mongoose')

const acteurMoraleSchema = new mongoose.Schema({
    

    acteur_id : {type : String},
    institution : {type : String},
    speciality: {type: String, },
    denomation: {type: String, },
    siege: {type: String, },
    date_cretion: {type: Date, },
    facebook: {type: String, },
    skype: {type: String, },
    date_inscription : {type:  Date },
    date_validation : {type:  Date },
    tel_fixe: {type: Date, },
    tel_mobile: {type: Date, },
    site_web: {type: String, },
    premier_responsable: {type: String, },
    contact: {type: String, },
    blog: {type: String, },
    
})

module.exports = mongoose.model("ActeurMorale", acteurMorale)