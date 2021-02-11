const express = require('express')


const app = express()


const port=process.env.PORT || 5050

app.listen(port,(req,res)=>{
    console.log(`server is at port http://localhost:${port}`)
})

app.get("/",(req,res)=>{
    res.send("server is runnig now") 
    })