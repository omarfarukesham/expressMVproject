const express = require('express')

const router = express.Router()
const {getGoal, setGoal,deleteGoal, updateGoal}= require('../Controller/goalController')

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)


// router.get('/', getGoal)
// router.post('/', setGoal )

// router.put('/:id', updateGoal )
// router.delete('/:id', deleteGoal)


module.exports = router