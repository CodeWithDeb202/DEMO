import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

    getMyActivities,

    getAllActivities

} from "../controllers/activity.controller.js";

const router = express.Router();

router.get(

    "/me",

    authMiddleware,

    getMyActivities

);

router.get(

    "/all",

    authMiddleware,

    authorizeRoles("admin"),

    getAllActivities

);

export default router;