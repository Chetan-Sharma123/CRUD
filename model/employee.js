const mongoose=require('mongoose')

const imageSchema = new mongoose.Schema({
    filename: String,
   
  });
const empSchema=mongoose.Schema({
    emp_name:String,
    city:String,
    salary:Number,
    age:Number,
    imageName:String,
   
    images: [imageSchema],

    
})


module.exports=mongoose.model('employee',empSchema)