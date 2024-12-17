const express=require('express')
const app=express()
app.use(express.urlencoded({extended:false}))
const router=require('./router/testRouter')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/crud')
const dotenv=require('dotenv').config()

















app.use(router)
app.set('view engine','ejs')
app.use(express.static('public'))
app.listen(process.env.PORT,()=>{console.log("port run is 8000")})