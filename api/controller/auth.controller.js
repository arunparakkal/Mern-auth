import User from "../models/user.mode.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/error.js";

const signup = async (req, res, next) => {
 
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password)
  const newUser = User({ username, email, password:hashPassword });

  try {
    
    await newUser.save();
    res.status(201).json({ message: "user is created" });
  } catch (error) {
   
    next(error)
  }
};
export default signup;

export const signin = async(req,res,next)=>{
const{email,password} = req.body

try{

const validUser = await User.findOne({email});
if(!validUser) return next(errorHandler(404,"user not found"))
const validPassword = bcryptjs.compareSync(password,validUser.password)
if(!validPassword) return next(errorHandler(401,"wrong credential"))

const token = jwt.sign({id:validUser._id} , process.env.JWT_SECRETKEY)
const {password:hashPassword ,...rest} = validUser._doc
const expiryDate = new Date(Date.now() + 36000)// 1hour
res.cookie("accestoken",token,{httpOnly:true,expires:expiryDate}).status(200).json(rest)


}catch(error){
next(error)
}
}
