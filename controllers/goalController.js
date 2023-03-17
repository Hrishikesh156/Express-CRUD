const asyncHandler =  require('express-async-handler')
const Goal =  require('../models/goalModel')

const getGoals =  asyncHandler (async(req,res)=>{
    // res.status(200).json({"message":"Get goals"})
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoal = asyncHandler(async(req,res)=>{
    // res.status(201).json({"message":"Create a goal"})
    if(!req.body.goal_msg){
        res.status(400)
        throw new Error('Please add a goal')
    }
    const goal = await Goal.create({
        goal_msg:req.body.goal_msg,
        deadline:new Date(req.body.deadline)
    })
    res.status(200).json({goal})
})

const updateGoal = asyncHandler (async (req,res)=>{
    // res.status(201).json({"Updated ID":req.params.id})
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler ( async(req,res)=>{
    // res.status(201).json({"Deleted ID":req.params.id})
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    // await goal.remove()
    const deleted_goal = await Goal.deleteOne({_id:req.params.id})
    // const deleted_goal = await Goal.findOneAndDelete({ deadline : { $lt:Date('2022-09-18T21:07:42.313+00:00')}})
    res.status(200).json(deleted_goal)

})

module.exports = {
    getGoals,setGoal,updateGoal,deleteGoal
}