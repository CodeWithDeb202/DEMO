import express from "express";

import { uploadProfileImage } from "../controllers/profile.controller.js";
import { uploadResume } from "../controllers/resume.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

import upload from "../middleware/upload.middleware.js";


const router = express.Router();



router.put(
    "/profile-image",
    authMiddleware,
    upload.single("image"),
    uploadProfileImage
);

router.put(
    "/resume",
    authMiddleware,
    upload.single("resume"), 
    uploadResume
);



export default router;