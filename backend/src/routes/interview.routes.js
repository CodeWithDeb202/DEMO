import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

scheduleInterview,

getStudentInterviews,

getEmployerInterviews,

updateInterview,

cancelInterview

} from "../controllers/interview.controller.js";

const router = express.Router();


router.post(
    "/",
    authMiddleware,
    authorizeRoles("employer"),
    scheduleInterview
);

router.get(
    "/student",
    authMiddleware,
    authorizeRoles("student"),
    getStudentInterviews
);

router.get(
    "/employer",
    authMiddleware,
    authorizeRoles("employer"),
    getEmployerInterviews
);

router.put(
    "/:id",
    authMiddleware,
    authorizeRoles("employer"),
    updateInterview
);

router.patch(
    "/:id/cancel",
    authMiddleware,
    authorizeRoles("employer"),
    cancelInterview
);


export default router;