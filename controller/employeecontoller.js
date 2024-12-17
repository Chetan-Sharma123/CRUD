employeeTable=require('../model/employee')











exports.viewemployee=async(req,res)=>{
    const employeeData=await employeeTable.find()
    res.render('view.ejs',{employeeData})

}
exports.addemployee=(req,res)=>{
    res.render("addemployee.ejs")
}
try{
exports.fatchemployee=(req,res)=>{
    const{name,city,salary,age}=req.body
    const filename=req.file.filename
    const employeeinsert=new employeeTable({emp_name:name,city:city,salary:salary,age:age,imageName:filename})
    employeeinsert.save()
    res.redirect('/')
}
}catch(error){
    console.log(error.message)
}
try{


exports.delemployee=async(req,res)=>{
    const id=req.params.employeeId
    await employeeTable.findByIdAndDelete(id)
    res.redirect('/')

}
}catch(error){
    console.log(error.message)
}


exports.updateemp=async(req,res)=>{
    const empId=req.params.empid
    const empData=await employeeTable.findById(empId)
    // console.log(empData)
   res.render("employeeupdate.ejs",{empData})
}



exports.updatesave=async(req,res)=>{
    const id=req.params.empid
    const{name,city,salary,age}=req.body
    await employeeTable.findByIdAndUpdate(id,{emp_name:name,city:city,salary:salary,age:age})
    res.redirect('/')
}


exports.multipleimg=(req,res)=>{
    const filesimg=req.files.map((val)=>{
        return {
            filename:val.filename
        }
    

    })
    
    const emplo=new employeeTable({images:filesimg})
    emplo.save()
    console.log(emplo)
}

