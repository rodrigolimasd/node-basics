const express = require('express')
const router = express.Router()

router.get('/:id',(req, res)=>{
    res.send('admin with id: '+req.params.id)
})

router.post('/',(req, res)=>{
    res.send('Hello: '+req.body.login)
})

module.exports = router