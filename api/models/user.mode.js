import mongoose, { Schema } from 'mongoose'
const userSchma = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

const User = mongoose.model("User",userSchma)

export default User


