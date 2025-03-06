// const ticketModel = require('../model/ticket.model');
const {Ticket} = require('../model/ticket.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const createTicket=async(req,res)=>{
    try {
        const{title,description}=req.body;
        const ticket=await Ticket.create({title,description,createdBy:req.user._id});
        res.status(201).json({ticket})
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const getTicket=async(req,res)=>{
    try{
        if(req.user.role==='admin'){
            const tickets=await Ticket.find().populate('createdBy','name email');
            return res.status(200).json({tickets})
        }
        const tickets=await Ticket.find({createdBy:req.user._id});
        res.status(200).json({tickets})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}
const updateTicket=async(req,res)=>{
    try {
        const {id}=req.params;
        const {status}=req.body;
        const ticket=await Ticket.findByIdAndUpdate(id,{status},{new:true});
        res.status(200).json({ticket})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports={createTicket,getTicket,updateTicket};