import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

    getDashboardStats,

    getAllUsers,

    getAllCompanies,

    getAllInternships,

    getAllApplications,

    blockUser,

    unblockUser,

    deleteUser,

    verifyCompany,

    featureInternship

} from "../controllers/admin.controller.js";

const router = express.Router();

router.get(

    "/dashboard",

    authMiddleware,

    authorizeRoles("admin"),

    getDashboardStats

);


router.get(

    "/users",

    authMiddleware,

    authorizeRoles("admin"),

    getAllUsers

);


router.get(

    "/companies",

    authMiddleware,

    authorizeRoles("admin"),

    getAllCompanies

);

router.get(

    "/internships",

    authMiddleware,

    authorizeRoles("admin"),

    getAllInternships

);

router.get(

    "/applications",

    authMiddleware,

    authorizeRoles("admin"),

    getAllApplications

);


router.patch(

    "/users/:id/block",

    authMiddleware,

    authorizeRoles("admin"),

    blockUser

);

router.patch(

    "/users/:id/unblock",

    authMiddleware,

    authorizeRoles("admin"),

    unblockUser

);


router.delete(

    "/users/:id",

    authMiddleware,

    authorizeRoles("admin"),

    deleteUser

);

router.patch(

    "/companies/:id/verify",

    authMiddleware,

    authorizeRoles("admin"),

    verifyCompany

);

router.patch(

    "/internship/:id/feature",

    authMiddleware,

    authorizeRoles("admin"),

    featureInternship

);

export default router;