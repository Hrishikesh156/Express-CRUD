const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({

    goal_msg:{ 
        type:String,
        required: [true,'please add a goal']
    },
    deadline:{
        type:Date,
        required:[true,'please add a deadline']
    }
    
},{
    timestamps:true,
})

module.exports = mongoose.model('Goal',goalSchema)