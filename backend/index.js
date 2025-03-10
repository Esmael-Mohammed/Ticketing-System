const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv').config();


const ticketRoutes=require('./routes/ticket.route');
const userRoutes=require('./routes/user.route');
//Express app
const app=express();
const PORT=process.env.PORT || 3000
//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
//ticket Routes
app.use('/api',ticketRoutes);
//user Routes
app.use('/api',userRoutes);

// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT,()=>{
        console.log('Server is running on port',PORT);
    })
}) 
