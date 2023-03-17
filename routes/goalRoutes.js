const express = require('express')
const router = express.Router()
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')
// getting/reading goals
router.get('/',getGoals)

// creating a goal
router.post('/',setGoal)

// updating a goal
router.put('/:id',updateGoal)

// deleting a goal
router.delete('/:id',deleteGoal)

module.exports = router