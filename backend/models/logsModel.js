const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const logsSchema = new mongoose.Schema({
    

    libele : {type : String},
    admin_id : {type : ObjectId},
    document_id: {type: ObjectId},
    acteur_id: {type: ObjectId,},
    date_action: {type: Number, },

    
})

module.exports = mongoose.model("ActeurMorale", logsSchema)