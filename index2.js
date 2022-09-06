const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/user', require('./Router/userRouter'))

app.listen(PORT, ()=>{console.log(`Assignment server is running ${PORT}`);})