
const express = require('express');
const app = express()

app.use(express.json())



const appFirebase = require('./config')

app.listen(3010,function(){
    console.log("The Hunter em funcionamento")
})

