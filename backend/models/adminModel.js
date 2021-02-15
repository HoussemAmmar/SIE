const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const adminSchema = new mongoose.Schema({
    
    login : {type: String},
    name: {type: String},
    email : {type : String},
    password : {type : String},
    role_id : {type:  ObjectId },
    
})

module.exports = mongoose.model("Admin", adminSchema)