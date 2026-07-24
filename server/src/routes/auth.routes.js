import express from "express";
import validate from "../middleware/validate.js";
import { registerSchema, loginSchema } from "../validations/auth.validation.js";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);

router.post("/login", validate(loginSchema), loginUser);

router.get("/me", authMiddleware, getCurrentUser);

router.post("/logout",logoutUser);

export default router;
