const express =require("express");
const fs=require("fs");
const BodyParser=require("body-parser");
const app=express();
const file="testingFile.txt";
const dotenv=require('dotenv');
const mongoose=require("mongoose");
const auth=require("./middleware/auth");
const cors=require('cors');

dotenv.config()

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db=mongoose.connection
db.on('error',error => console.error(error))
db.once('open', MONGO_URI => console.log("Connected to Database"));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(cors());
app.post("/",auth,(req,res)=>{
    res.status(200).send("Hi :Welcome");
});
app.get("/test",(req,res)=>{
    res.status(200).json("Hi :Welcome");
});


 require('./routes/userRoutes')(app);
 
app.listen(5000,()=>{
    console.log("Server started PORT 5000");
});