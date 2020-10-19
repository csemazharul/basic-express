const router = require('express').Router()
router.get('/admin',(req,res)=>{
    res.send('I am Admin')
})
router.all('/contact/:id',(req,res)=>{
    res.send(`user id paici?? ${req.params.id}`)
})



module.exports=router