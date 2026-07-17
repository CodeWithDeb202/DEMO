import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

checkIn,

checkOut,

getMyAttendance,

getInternAttendance

} from "../controllers/attendance.controller.js";

const router = express.Router();

router.post(
    "/check-in",
    authMiddleware,
    authorizeRoles("student"),
    checkIn
);

router.put(
    "/check-out/:id",
    authMiddleware,
    authorizeRoles("student"),
    checkOut
);

router.get(
    "/my-attendance",
    authMiddleware,
    authorizeRoles("student"),
    getMyAttendance
);

router.get(
    "/internship/:id",
    authMiddleware,
    authorizeRoles("employer"),
    getInternAttendance
);

export default router;