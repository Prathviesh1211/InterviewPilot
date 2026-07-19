import express from "express"
import validate from "../middleware/validate.js";
import { registerSchema,loginSchema} from "../validations/auth.validation.js";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router=express.Router();

router.post(
    "/register",
    validate(registerSchema),
    registerUser
)

router.post(
    "/login",
    validate(loginSchema),
    loginUser
)

export default router;