// get all tasks

const getAllTasks = (req, res)=>{
    res.send("all items")
}
// get single task

const getTask = (req,res)=>{
    res.send("get single task")
}


// create task

const createTask = (req,res)=>{
    res.send("create task")
}

// delete task

const deleteTask = (req,res)=>{
    res.send("delete task")
}

// update task 


const updateTask = (req, res)=>{
    res.send("update task")
}


module.exports= {
    getAllTasks,
    createTask,deleteTask,
    updateTask,getTask
}