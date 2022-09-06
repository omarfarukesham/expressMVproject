const express = require('express')
const router = express.Router()
const {getAllUser, getRandomUser,saveUser} = require('../Controller/userController')

router.get('/all', getAllUser)
router.get('/random', getRandomUser)
router.post('/save', saveUser)

module.exports = router