const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    
    login : {type: String},
    name: {type: String},
    email : {type : String},
    password : {type : String},
    role_id : {type:  String },
    
})

module.exports = mongoose.model("Admin", adminSchema)