import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";

const router = express.Router();

router.get("/", protectedRoute, getAllUsers);

export default router;
