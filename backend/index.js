const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to MongoDB');
}) 
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})