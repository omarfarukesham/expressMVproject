const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use('/user/all', require('./Router/getRouters') )


app.listen(PORT, ()=>{console.log("MVC Sever is running");})