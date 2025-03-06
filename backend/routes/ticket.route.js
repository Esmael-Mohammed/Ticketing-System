const express=require('express');
const router=express.Router();
const {createTicket,getTicket,updateTicket}=require('../controller/ticket.controller');
const {authMiddleware,adminMiddleware}=require('../auth/authMiddleware');

router.post('/tickets',authMiddleware,createTicket);
router.get('/tickets',authMiddleware,getTicket);
router.put('/tickets/:id',authMiddleware,adminMiddleware,updateTicket);

module.exports=router;