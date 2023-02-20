const express = require("express")
const { connection } = require("./db")
const {userRouter} = require("./routes/user.route")
const {postRouter} = require("./routes/post.route")
const { authenticate } = require("./middleware/authenti")
const cors = require("cors")
require("dotenv").config()
const app  = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hellooooo")
})
app.use(cors())
app.use("/users",userRouter)
app.use(authenticate)
app.use("/posts",postRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
    console.log(" server connect")
})