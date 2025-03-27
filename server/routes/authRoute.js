import express from "express";
import { signUp } from "../controllers/authControllerjs";




const router = express.Router();

router.post("/sign-up", signUp);

export default router
