import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db";
import userRoutes from "./routes/user.routes";

dotenv.config();
connectDb();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("User service is up and running!"); // Basic health check endpoint
});

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
