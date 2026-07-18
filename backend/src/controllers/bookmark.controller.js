import Bookmark from "../models/Bookmark.js";
import Internship from "../models/Internship.js";

import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import logActivity from "../utils/logActivity.js";


export const addBookmark = asyncHandler(async (req, res) => {

    const { internshipId } = req.body;

    if (!internshipId) {

        throw new AppError(

            "Internship ID is required",

            400

        );

    }

    const internship = await Internship.findById(

        internshipId

    );

    if (!internship) {

        throw new AppError(

            "Internship not found",

            404

        );

    }

    const exists = await Bookmark.findOne({

        student: req.user._id,

        internship: internshipId

    });

    if (exists) {

        throw new AppError(

            "Internship already bookmarked",

            409

        );

    }

    const bookmark = await Bookmark.create({

        student: req.user._id,

        internship: internshipId

    });

    await logActivity(

        req,

        req.user._id,

        "BOOKMARK_INTERNSHIP",

        "Bookmark",

        `Bookmarked internship: ${internship.title}`

    );

    return res.status(201).json({

        success: true,

        message: "Internship bookmarked successfully",

        bookmark

    });

});


export const removeBookmark = asyncHandler(async (req, res) => {

    const { internshipId } = req.params;

    const bookmark = await Bookmark.findOne({

        student: req.user._id,

        internship: internshipId

    });

    if (!bookmark) {

        throw new AppError(

            "Bookmark not found",

            404

        );

    }

    await Bookmark.findByIdAndDelete(

        bookmark._id

    );

    await logActivity(

        req,

        req.user._id,

        "REMOVE_BOOKMARK",

        "Bookmark",

        "Removed bookmarked internship"

    );

    return res.status(200).json({

        success: true,

        message: "Bookmark removed successfully"

    });

});


export const getMyBookmarks = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const totalBookmarks = await Bookmark.countDocuments({

        student: req.user._id

    });

    const bookmarks = await Bookmark.find({

        student: req.user._id

    })

        .populate({

            path: "internship",

            populate: {

                path: "company",

                select: "companyName companyLogo location"

            }

        })

        .sort({

            createdAt: -1

        })

        .skip((page - 1) * limit)

        .limit(limit);

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(totalBookmarks / limit),

        totalBookmarks,

        bookmarks

    });

});


export const checkBookmark = asyncHandler(async (req, res) => {

    const { internshipId } = req.params;

    const bookmark = await Bookmark.findOne({

        student: req.user._id,

        internship: internshipId

    });

    return res.status(200).json({

        success: true,

        bookmarked: Boolean(bookmark)

    });

});