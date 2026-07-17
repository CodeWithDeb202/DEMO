import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {

    getMyNotifications,

    markAsRead,

    markAllAsRead,

    deleteNotification

} from "../controllers/notification.controller.js";

const router = express.Router();

router.get(

    "/",

    authMiddleware,

    getMyNotifications

);

router.patch(

    "/:id/read",

    authMiddleware,

    markAsRead

);

router.patch(

    "/read-all",

    authMiddleware,

    markAllAsRead

);

router.delete(

    "/:id",

    authMiddleware,

    deleteNotification

);

export default router;