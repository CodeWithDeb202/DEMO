import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

    getDashboardAnalytics,
    getMonthlyAnalytics

} from "../controllers/analytics.controller.js";

const router = express.Router();

router.get(

    "/dashboard",

    authMiddleware,

    authorizeRoles("admin"),

    getDashboardAnalytics

);

router.get(

    "/monthly",

    authMiddleware,

    authorizeRoles("admin"),

    getMonthlyAnalytics

);

export default router;