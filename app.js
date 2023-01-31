const express = require("express")

const app = express()
const port = 4545
const tasks = require("./routes/task")


// middleware

app.use(express.json())

// routes
app.get("/hello", (req,res)=>{
    res.send("Todo app")
})

app.use("/api/v1/tasks", tasks)

app.listen(port, console.log(`running at ${port}`))