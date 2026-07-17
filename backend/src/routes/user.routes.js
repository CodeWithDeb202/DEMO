import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getCurrentUser, updateProfile, changePassword, deleteAccount } from "../controllers/user.controller.js";

const router = express.Router();



router.get("/me", authMiddleware, getCurrentUser);
router.put("/profile", authMiddleware, updateProfile);
router.put("/change-password", authMiddleware, changePassword);
router.delete("/delete-account", authMiddleware, deleteAccount);

export default router;