import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

    getAllUsers

} from "../controllers/admin.controller.js";

const router = express.Router();

router.get(

    "/all-users",

    authMiddleware,

    authorizeRoles("admin"),

    getAllUsers

);

export default router;