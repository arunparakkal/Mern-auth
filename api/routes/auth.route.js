import Express from "express";
import signup, { signin } from "../controller/auth.controller.js";

const authroute = Express.Router();

authroute.post("/signup", signup);
authroute.post("/signin",signin)

export default authroute
