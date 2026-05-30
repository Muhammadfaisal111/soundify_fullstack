import express from "express";
import { isAuth } from "../middlewares/user.middleware";
import {
  registerUser,
  loginUser,
  myProfile,
} from "../controllers/user.controller";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", isAuth, myProfile);
export default router;
