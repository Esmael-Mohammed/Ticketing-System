const mongoose=require('mongoose');
//user schema
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:['user','admin'],default:'user'}
});
const User=mongoose.model('User',userSchema);
module.exports={User};