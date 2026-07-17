import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

    studentDashboard,

    employerDashboard,

    adminDashboard

} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get(

    "/student",

    authMiddleware,

    authorizeRoles("student"),

    studentDashboard

);

router.get(

    "/employer",

    authMiddleware,

    authorizeRoles("employer"),

    employerDashboard

);

router.get(

    "/admin",

    authMiddleware,

    authorizeRoles("admin"),

    adminDashboard

);

export default router;