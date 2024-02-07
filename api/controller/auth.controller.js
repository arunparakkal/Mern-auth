import User from "../models/user.mode.js";
import bcryptjs from 'bcryptjs'

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
