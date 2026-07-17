import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";

import {

createInternship,

getInternships,

getInternshipById,

updateInternship,

deleteInternship,

getPopularInternships,

getRecommendedInternships

} from "../controllers/internship.controller.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
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

export default router;