const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();

const ticketRoutes=require('./routes/ticket.route');
const userRoutes=require('./routes/user.route');
//Express app
const app=express();
//Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//ticket Routes
app.use('/api',ticketRoutes);
//user Routes
app.use('/api',userRoutes);

// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to MongoDB');
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    })
}) 
