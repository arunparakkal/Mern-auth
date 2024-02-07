import User from "../models/user.mode.js";
import bcryptjs from 'bcryptjs'
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password)
  const newUser = User({ username, email, password:hashPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "user is created" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export default signup;
