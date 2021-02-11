const mongoose = require('mongoose')

const institutionsSchema = new mongoose.Schema({
    
    institutions : {type : String},  
    
})

module.exports = mongoose.model("Institutions", institutionsSchema)