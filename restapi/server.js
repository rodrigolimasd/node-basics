const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:37017/subscribers")
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open',()=> console.log('Database Connected'))


app.listen(3000, () => console.log('Server express running: http://localhost:3000'))