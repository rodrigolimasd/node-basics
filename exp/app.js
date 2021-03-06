const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const cookieParse = require('cookie-parser')

//app.use(express.static('public'))
app.use('/static',express.static('public'))

app.use(express.json())
app.use(cookieParse())

//Middleware 
app.use((req, res, next)=>{
    console.log('Running Middleware')
    //console.log(req)
    return next()
})

app.get('/setcookie',(req, res)=> {
    res.cookie('user','Rodrigo', {maxAge: 900000, httpOnly: true})
    return res.send('storage cookie')
})

app.get('/getcookie',(req, res)=> {
    let user = req.cookies['user']
    if(user) {
        return res.send(user)
    } else {
        return res.sendStatus(404)
    }
})

app.get('/',(req, res)=>{
    res.send('welcome express')
})

app.use('/admin', adminRoutes)

app.get('/error',(req, res, next)=>{
    setImmediate(()=>{
        next(new Error('Erro endpoint /error'))
    })
})

app.use((err, req, res, next)=> {
    console.log(err.stack)
    res.status(500).json({message: err.message})
})

app.listen(3000, () => {
    console.log('Server express running: http://localhost:3000')
})