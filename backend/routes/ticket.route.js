const express=require('express');
const router=express.Router();
const {singup,login}=require('../controller/ticket.controller');

router.post('/singup',singup);
router.post('/login',login);
// router.post('/tickets',createTicket);
// router.put('/tickets/:id',updateTicket);
// router.get('/tickets',getTickets);

module.exports=router;