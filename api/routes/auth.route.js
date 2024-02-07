import Express from "express";
import signup from "../controller/auth.controller.js";

const authroute = Express.Router();

authroute.post("/signup", signup);

export default authroute
