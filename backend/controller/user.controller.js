const {User}=require('../model/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const signup=async(req,res)=>{
    try {
        const { name, email, password, role } = req.body;
  
        if (!name || !email || !password || !role) {
          return res.status(400).json({ message: "All fields are required" });
        }
      
        // Check if email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Email already exists" });
        }
        const salt=await bcrypt.genSalt(12);
        const passwordHash=await bcrypt.hash(password,salt);
        const user=await User.create({name,email,password:passwordHash,role});
        res.status(201).json(user)
    
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    }
    const login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
    
            if (!user) return res.status(400).json({ message: "User not found" });
    
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    
            const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_KEY, { expiresIn: "1h" });
    
            res.status(200).json({ token, user: { _id: user._id, role: user.role, email: user.email } }); // ✅ Return user
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    
    module.exports={signup,login};