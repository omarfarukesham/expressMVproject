const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use('/user/all', require('./Router/userRouter'))

app.listen(PORT, ()=>{console.log(`Assignment server is running ${PORT}`);})