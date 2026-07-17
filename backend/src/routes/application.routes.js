import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";

import { applyInternship, getMyApplications, getInternshipApplications, updateApplicationStatus, deleteApplication } from "../controllers/application.controller.js";

const router = express.Router();

router.post("/apply", authMiddleware, authorizeRoles("student"), applyInternship);

router.get("/my", authMiddleware, getMyApplications);

router.get("/internship/:id", authMiddleware, authorizeRoles("employer"), getInternshipApplications);

router.put("/:id/status", authMiddleware, authorizeRoles("employer"), updateApplicationStatus);

router.delete("/:id", authMiddleware, deleteApplication);

export default router;