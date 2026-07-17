import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import authorizeRoles from "../middleware/role.middleware.js";

import {

issueCertificate,

getMyCertificates,

getEmployerCertificates,

downloadCertificate

} from "../controllers/certificate.controller.js";

const router = express.Router();



router.post(

    "/issue",

    authMiddleware,

    authorizeRoles("employer"),

    issueCertificate

);

router.get(

    "/student",

    authMiddleware,

    authorizeRoles("student"),

    getMyCertificates

);

router.get(

    "/employer",

    authMiddleware,

    authorizeRoles("employer"),

    getEmployerCertificates

);

router.get(

    "/download/:id",

    authMiddleware,

    downloadCertificate

);

export default router;