require('dotenv').config()
const express = require('express')
const app = express() 
const port = process.env.PORT || 3030

const configureDB = require('./config/db')
configureDB()

app.listen(port, () => {
    console.log('server running on port', port)
})