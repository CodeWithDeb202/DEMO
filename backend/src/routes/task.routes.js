import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";

import {

    createTask,

    getMyTasks,

    updateTask,

    deleteTask,

    updateTaskStatus

} from "../controllers/task.controller.js";

const router = express.Router();

// Employer creates task
router.post(

    "/",

    authMiddleware,

    authorizeRoles("employer"),

    createTask

);

// Student gets own tasks
router.get(

    "/my-tasks",

    authMiddleware,

    authorizeRoles("student"),

    getMyTasks

);

// Employer updates task
router.put(

    "/:id",

    authMiddleware,

    authorizeRoles("employer"),

    updateTask

);

// Employer deletes task
router.delete(

    "/:id",

    authMiddleware,

    authorizeRoles("employer"),

    deleteTask

);

// Student updates task status
router.patch(

    "/:id/status",

    authMiddleware,

    authorizeRoles("student"),

    updateTaskStatus

);

export default router;