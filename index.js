const express = require('express')
const userRouter = require("./routes/user")
const {connectMongoDb} =require("./connection")
const {logReqRes} = require('./middleware')
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const PORT = process.env.PORT;

// MongoDb Connection
const mongoUrl = process.env.DB_URL_LOCAL
connectMongoDb(mongoUrl).then(()=>{
    console.log("Mongodb connected")
})


//Middleware Plugin
app.use(logReqRes("logs.txt"))

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello world')
})


app.use("/users",userRouter)


app.listen(PORT,()=>{
    console.log(`Example App is listening, ${PORT}`)
})