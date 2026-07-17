import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {

sendMessage,

getMessages,

markAsSeen

} from "../controllers/message.controller.js";

import chatUpload from "../middleware/chatUpload.middleware.js";

import {

    uploadChatFile

} from "../controllers/chatUpload.controller.js";

const router = express.Router();

router.post(

    "/",

    authMiddleware,

    sendMessage

);

router.get(

    "/:userId",

    authMiddleware,

    getMessages

);

router.patch(

    "/seen/:userId",

    authMiddleware,

    markAsSeen

);

router.post(

    "/upload",

    authMiddleware,

    chatUpload.single("file"),

    uploadChatFile

);

export default router;