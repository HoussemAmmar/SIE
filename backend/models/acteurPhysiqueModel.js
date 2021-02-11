const mongoose = require('mongoose')

const acteurPhysiqueSchema = new mongoose.Schema({
    

    acteur_id : {type : String},
    civilté : {type : String},
    nom_prenom: {type: String},
    date_naissance: {type: String},
    proffession: {type: String},
    anciennete: {type: String},
    niveau_formation: {type: String},
    adress_professionnel: {type: String},
    adress_personnel : {type:  Date },
    tel_fixe : {type:  Number },
    tel_mobile: {type: Number},
    email_personnel :  {type:  Number },
    
})

module.exports = mongoose.model("acteurPhysique", acteurPhysiqueSchema)