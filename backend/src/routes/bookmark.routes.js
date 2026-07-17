import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

    addBookmark,

    removeBookmark,

    getMyBookmarks,

    checkBookmark

} from "../controllers/bookmark.controller.js";

const router = express.Router();


router.post(

    "/",

    authMiddleware,

    authorizeRoles("student"),

    addBookmark

);


router.delete(

    "/:internshipId",

    authMiddleware,

    authorizeRoles("student"),

    removeBookmark

);



router.get(

    "/",

    authMiddleware,

    authorizeRoles("student"),

    getMyBookmarks

);


router.get(

    "/check/:internshipId",

    authMiddleware,

    authorizeRoles("student"),

    checkBookmark

);

export default router;