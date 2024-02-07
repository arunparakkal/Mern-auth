import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/user.route.js";
import authroute from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = Express();
app.use(Express.json());

app.listen(3000, () => {
  console.log("server is running");
});

app.use("/api/user", route);
app.use("/api/auth", authroute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    succes: false,
    message,
    statusCode,
  });
});
