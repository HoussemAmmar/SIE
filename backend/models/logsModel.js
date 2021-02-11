const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
    

    libele : {type : String},
    admin_id : {type : String},
    document_id: {type: String},
    acteur_id: {type: String,},
    date_action: {type: String, },

    
})

module.exports = mongoose.model("ActeurMorale", logsSchema)