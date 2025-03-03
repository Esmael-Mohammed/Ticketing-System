// const ticketModel = require('../model/ticket.model');
const {User,Ticket} = require('../model/ticket.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const singup=async(req,res)=>{
try {
    const {name,email,password,role}=req.body;
    const salt=await bcrypt.genSalt(12);
    const passwordHash=await bcrypt.hash(password,salt);
    const user=await User.create({name,email,password:passwordHash,role});
    res.status(201).json(user)

} catch (error) {
    res.status(400).json({message:error.message})
}
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user) return res.status(400).json({message:'user not found'});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:'Invalid credentials'});
        const token=jwt.sign({_id:user._id,role:user.role},process.env.JWT_KEY,{expiresIn:'1h'});
        res.status(200).json({token});
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
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
module.exports={singup,login,createTicket,getTicket,updateTicket};