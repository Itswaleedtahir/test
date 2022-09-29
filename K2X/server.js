const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());
const routes = require('./routes/user')

app.use('/api/user',routes);

mongoose.connect('mongodb+srv://itswaleedtahir:itswaleedtahir123@cluster0.smf6v.mongodb.net/interview').then(result=>{
    console.log("database connected")
}).catch(err=>{
    console.log(err)
})


app.listen(8000);