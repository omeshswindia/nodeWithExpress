const path = require('path')
const express = require('express')

const router = express.Router()

// /admin/addProduct => GET
router.get('/admin/addProduct', (req, res, next) => {
res.sendFile(path.join(__dirname,'../','views','addProduct.html'))  
});

// /admin/addProduct => POST
router.post('/admin/addProduct',(req,res,next)=>{
  console.log(req.body)
  res.redirect('/')
})

module.exports = router