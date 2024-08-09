const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/user')

const app = express();
app.use(express.json());
app.use(cors)


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect('mongodb://127.0.0.1:27017/user') 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}
connectDB();

app.get('/',(req,res)=>{
    res.send("Welcome to This page.");
})

app.post("/login", async (req,res)=>{
    console.log(req.body)
    try{
        const user = await UserModel.findOne({email:req.body.email});
        res.json(user);
    }catch(err){
        res.json(err);
    }
})

app.post("/signup", async (req,res)=>{
    console.log(req.body)
    try{
        const user = await UserModel.create(req.body);
        res.json(user);
    }catch(err){
        res.json(err);
    }
})


app.listen(8001, ()=>{
    console.log("Server is running..")
})