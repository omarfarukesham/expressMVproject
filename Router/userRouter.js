const express = require('express')
const router = express.Router()
const {getAllUser} = require('../Controller/userController')

router.get('/', getAllUser)

module.exports = router