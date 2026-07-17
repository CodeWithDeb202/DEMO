import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";
import upload from "../middleware/upload.middleware.js";
import { createCompany, getCompanies, getCompanyById, updateCompany, deleteCompany } from "../controllers/company.controller.js";
const router = express.Router();


router.post(
    "/",
    authMiddleware,
    authorizeRoles("employer"),
    upload.single("companyLogo"),
    createCompany
);
router.get("/", getCompanies );
router.get("/:id", getCompanyById );
router.put("/:id", authMiddleware, updateCompany);
router.delete("/:id", authMiddleware, deleteCompany);

export default router;