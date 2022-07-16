const express = require('express')
const router = express.Router()

function logReq(req, res, next){
    console.log('Running Middleware admin')
    return next()
}

router.get('/:id', logReq,(req, res)=>{
    res.send('admin with id: '+req.params.id)
})

router.post('/',(req, res)=>{
    res.send('Hello: '+req.body.login)
})

module.exports = router