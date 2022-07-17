require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


//db
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open',()=> console.log('Database Connected'))


app.use(express.json())

const subscribersRoutes = require('./routes/subscribes')
app.use('/subscribers', subscribersRoutes)


app.listen(3000, () => console.log('Server express running: http://localhost:3000'))