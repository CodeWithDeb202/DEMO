import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

    scheduleMeeting,

    getStudentMeetings,

    getEmployerMeetings,

    updateMeetingStatus,

    deleteMeeting

} from "../controllers/meeting.controller.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    authorizeRoles("employer"),
    scheduleMeeting
);

router.get(
    "/student",
    authMiddleware,
    authorizeRoles("student"),
    getStudentMeetings
);

router.get(
    "/employer",
    authMiddleware,
    authorizeRoles("employer"),
    getEmployerMeetings
);

router.patch(
    "/:id/status",
    authMiddleware,
    authorizeRoles("employer"),
    updateMeetingStatus
);

router.delete(
    "/:id",
    authMiddleware,
    authorizeRoles("employer"),
    deleteMeeting
);

export default router;