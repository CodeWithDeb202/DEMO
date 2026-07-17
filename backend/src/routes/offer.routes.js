import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

createOffer,

getStudentOffers,

getEmployerOffers,

acceptOffer,

rejectOffer

} from "../controllers/offer.controller.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    authorizeRoles("employer"),
    createOffer
);

router.get(
    "/student",
    authMiddleware,
    authorizeRoles("student"),
    getStudentOffers
);

router.get(
    "/employer",
    authMiddleware,
    authorizeRoles("employer"),
    getEmployerOffers
);

router.patch(
    "/:id/accept",
    authMiddleware,
    authorizeRoles("student"),
    acceptOffer
);

router.patch(
    "/:id/reject",
    authMiddleware,
    authorizeRoles("student"),
    rejectOffer
);

export default router;