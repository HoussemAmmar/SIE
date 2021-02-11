const mongoose = require('mongoose')

const documentValidateSchema = new mongoose.Schema({
    
    date_validation : {type : Date, required: true},  
    
})

module.exports = mongoose.model("DocumentValidate", documentValidateSchema)