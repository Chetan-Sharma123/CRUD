registerTable=require('../model/register')



exports.loginform=(req,res)=>{
    res.render("login.ejs")
}

exports.loginformpost=async(req,res)=>{
    const{email,password}=req.body
    const loginData=await registerTable.findOne({email:email})
    const loginpassword=await registerTable.findOne({password:password})
    if(loginData!=null){
        if(loginpassword!=null){
            res.redirect('/')

        }else{
            res.send("email and password not match")
        }

    }else{
        res.send('account not a exitst')
    }

}








exports.createloginform=(req,res)=>{
    res.render('createform.ejs')
}
exports.createloginfatchdata=async(req,res)=>{
    const{firstname,lastname,email,password}=req.body
    const uniquedata=await registerTable.findOne({email:email})
    if(uniquedata==null){
    console.log(uniquedata)
    const data=new registerTable({firstName:firstname,lastName:lastname,email:email,password:password})
    data.save()
    }
    else{
        res.send("email already exits")
    }
    res.redirect('/')
}

