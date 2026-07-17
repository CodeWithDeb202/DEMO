import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {

    getNotifications,

    markAsRead,

    deleteNotification

} from "../controllers/notification.controller.js";

const router = express.Router();

router.get(

    "/",

    authMiddleware,

    getNotifications

);

router.put(

    "/:id/read",

    authMiddleware,

    markAsRead

);

router.delete(

    "/:id",

    authMiddleware,

    deleteNotification

);

export default router;