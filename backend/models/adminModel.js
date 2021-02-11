const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    
    login : {type: String, required:true},
    name: {type: String, required:true},
    email : {type : String, required: true},
    password : {type : String, required: true},
    role_id : {type:  String , required: true},
    
})

module.exports = mongoose.model("Admin", adminSchema)