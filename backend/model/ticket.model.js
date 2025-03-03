const mongoose=require('mongoose');
//user schema
const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:['user','admin'],default:'user'}
});
//ticket schema
const ticketSchema=new mongoose.Schema({
    title:String,
    description:String,
    status:{type:String,enum:['open','in progress','closed'],default:'open'},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}

})
const User=mongoose.model('User',userSchema);
const Ticket=mongoose.model('Ticket',ticketSchema);
module.exports={User,Ticket};