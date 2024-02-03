import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = Express();

app.listen(3000, () => {
  console.log("server is running");
});

app.use("/api",route)
