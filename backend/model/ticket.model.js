const mongoose=require('mongoose');
//ticket schema
const ticketSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,enum:['open','in progress','closed'],default:'open'},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}

})
const Ticket=mongoose.model('Ticket',ticketSchema);
module.exports={Ticket};