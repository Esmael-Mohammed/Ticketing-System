const mongoose=require('mongoose');
import { type } from './../node_modules/nodemon/index.d';
const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:['user','admin'],default:'user'},
});
const ticketSchema=new mongoose.Schema({
    title:String,
    required:true,
    description:String,
    required:true,
    status:{type:String,enum:['open','in progress','closed'],default:'open'},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}

})
const User=mongoose.model('User',userSchema);
const Ticket=mongoose.model('Ticket',ticketSchema);
module.exports={User,Ticket};