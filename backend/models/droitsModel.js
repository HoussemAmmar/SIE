const mongoose = require('mongoose')

const droitSchema = new mongoose.Schema({
    
    droit : {type : String},  
    attiribute_name : {type : String},
    
})

module.exports = mongoose.model("Droit", droitSchema)