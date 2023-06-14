require('dotenv').config()
const express=require('express')
const app=express()
const PORT=3500

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(errorMessage)=> console.log(errorMessage))
db.once('open',()=>console.log('connection established'))


app.use(express.json())

const WeatherRouter=require('./Routes/Weather')
app.get('/',(request,response)=>
{
    response.send("It's Workking")
})
app.use('/api/v1/weather',WeatherRouter)
app.listen(PORT,()=>
{
    console.log(`Server working in http://localhost:${PORT}`)
})