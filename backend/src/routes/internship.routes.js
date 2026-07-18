import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";
import validate from "../middleware/validate.middleware.js";

import {

    internshipSchema

} from "../../validations/internship.validation.js";

import {

    createInternship,

    getInternships,

    getInternshipById,

    updateInternship,

    deleteInternship,

    getPopularInternships,

    getRecommendedInternships,

    restoreInternship

} from "../controllers/internship.controller.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    validate(internshipSchema),
    createInternship
);

router.get(
    "/",
    getInternships
);

router.get(
    "/:id",
    getInternshipById
);

router.put(
    "/:id",
    authMiddleware,
    updateInternship
);

router.delete(
    "/:id",
    authMiddleware,
    deleteInternship
);

router.get(

    "/popular",

    getPopularInternships

);

router.get(

    "/recommended",

    authMiddleware,

    authorizeRoles("student"),

    getRecommendedInternships

);

router.patch(

    "/restore/:id",

    authMiddleware,

    authorizeRoles("employer"),

    restoreInternship

);

export default router;