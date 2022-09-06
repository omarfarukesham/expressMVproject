const express = require('express')
const router = express.Router()
const {getAllUser, getRandomUser,saveUser, userDataUpdate} = require('../Controller/userController')

router.get('/all', getAllUser)
router.get('/random', getRandomUser)
router.post('/save', saveUser)
router.patch('/update', userDataUpdate)

module.exports = router