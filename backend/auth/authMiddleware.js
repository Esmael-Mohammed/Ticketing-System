const jwt = require('jsonwebtoken');
// Middleware to check if the user is authenticated
const authMiddleware=async (req,res,next)=>{
    const authHeader=req.header('Authorization');
// console.log('authHeader',authHeader);
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:'Access denied'})
    }
    const token=authHeader.split(' ')[1];
    try {
        const verifiedUser=jwt.verify(token,process.env.JWT_KEY);
        req.user=verifiedUser;
        next();

    } catch (error) {
        return res.status(401).json({message:'Invalid token '})
    }

}
// Adimn middleware
const adminMiddleware=(req,res,next)=>{
    if(req.user.role!=='admin'){
        return res.status(403).json({message:'Forbidden'})
    }
    next();
}
// Export the middleware
module.exports={authMiddleware,adminMiddleware};