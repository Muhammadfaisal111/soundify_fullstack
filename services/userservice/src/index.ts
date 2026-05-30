import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db";
dotenv.config();
connectDb();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("User service is up and running!"); // Basic health check endpoint
});

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
