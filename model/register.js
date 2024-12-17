const mongoose=require('mongoose')


const regSechema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:Number
})


module.exports=mongoose.model('register',regSechema)