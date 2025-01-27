import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    task: {
        type: 'string', 
        require: [true, 'The task is required']
    },
    taskdesc: {
        type: 'string',
        require: false
    }, 
    createdat: {
        type: Date,
        default: Date.now
    }
})

export const Task = mongoose.model('Task', taskSchema)