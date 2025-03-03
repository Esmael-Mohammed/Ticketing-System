const express=require('express');
const router=express.Router();

router.post('/singup',singup);
router.post('/login',login);
router.post('/tickets',createTicket);
router.put('/tickets/:id',updateTicket);
router.get('/tickets',getTickets);

module.exports=router;