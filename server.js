const express = require('express')
const dotenv = require('dotenv').config()
const port = 5000 || process.env.port
const connectDB = require('./config/db')
const app = express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/goals',require('./routes/goalRoutes'))


app.listen(port,()=>{
    console.log(`Server started on the port ${port}`)
})