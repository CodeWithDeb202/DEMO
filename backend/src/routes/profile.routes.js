import express from "express";

import { uploadProfileImage } from "../controllers/profile.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

import upload from "../middleware/upload.middleware.js";


const router = express.Router();



router.put(
    "/profile-image",
    authMiddleware,
    upload.single("image"),
    uploadProfileImage
);



export default router;