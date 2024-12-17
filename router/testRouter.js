const router=require('express').Router()
const employeec=require('../controller/employeecontoller')
const registerc=require('../controller/regcontroller')
const multer=require('multer')

let storage=multer.diskStorage(
    {
        destination:function(req,file,cb){
            cb(null,'./public/upload')
        },
        filename:function(req,file,cb){
            cb(null,Date.now()+file.originalname)
        }
    }
)


const upload=multer({
    storage:storage
})

router.get('/',employeec.viewemployee)

router.get('/addemployee',employeec.addemployee)
router.post('/addemployee',upload.single('Img'),employeec.fatchemployee)
router.get('/delemployee/:employeeId',employeec.delemployee)
router.get('/updateemployee/:empid',employeec.updateemp)
router.post('/updateemployee/:empid',employeec.updatesave)

router.get('/loginpage',registerc.loginform)
router.post('/loginpage',registerc.loginformpost)
router.get('/creatlogin',registerc.createloginform)
router.post('/creatlogin',registerc.createloginfatchdata)

router.get('/multipleImage',(req,res)=>{
    res.render('multipleImage.ejs')
})

router.post('/multipleImage',upload.array('images',12),employeec.multipleimg)















module.exports=router