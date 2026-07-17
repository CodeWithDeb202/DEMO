import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {

createInternship,

getInternships,

getInternshipById,

updateInternship,

deleteInternship

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

export default router;