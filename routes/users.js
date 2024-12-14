import express from "express";
import { login, dashboard } from "../controllers/users.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

export default router;
