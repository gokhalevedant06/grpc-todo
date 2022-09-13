const Todo = require('../models/todoSchema')

const addTask = async(call,callback) =>{
    console.log("INSIDE ADD CONTROLLER")
    console.log('CALL',call)
    const {title,description} = call.request;

    const newTodo = new Todo({title,description})
    const response = await newTodo.save();

    return callback(null,"added");
}

const viewTasks = async (call,callback)=>{
    const tasks = await Todo.find();
    return callback(null,tasks)
}

module.exports = {
    addTask,
    viewTasks
}