import express from "express";

import {

    searchInternships

} from "../controllers/search.controller.js";

const router = express.Router();

router.get(

    "/internships",

    searchInternships

);

export default router;