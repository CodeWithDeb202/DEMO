import Bookmark from "../models/Bookmark.js";
import Internship from "../models/Internship.js";


export const addBookmark = async (req, res) => {

    try {

        const { internshipId } = req.body;

        const internship = await Internship.findById(

            internshipId

        );

        if (!internship) {

            return res.status(404).json({

                success: false,

                message: "Internship not found"

            });

        }

        const exists = await Bookmark.findOne({

            student: req.user._id,

            internship: internshipId

        });

        if (exists) {

            return res.status(409).json({

                success: false,

                message: "Internship already bookmarked"

            });

        }

        const bookmark = await Bookmark.create({

            student: req.user._id,

            internship: internshipId

        });

        return res.status(201).json({

            success: true,

            message: "Internship bookmarked successfully",

            bookmark

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const removeBookmark = async (req, res) => {

    try {

        const { internshipId } = req.params;

        const bookmark = await Bookmark.findOne({

            student: req.user._id,

            internship: internshipId

        });

        if (!bookmark) {

            return res.status(404).json({

                success: false,

                message: "Bookmark not found"

            });

        }

        await Bookmark.findByIdAndDelete(

            bookmark._id

        );

        return res.status(200).json({

            success: true,

            message: "Bookmark removed successfully"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getMyBookmarks = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const checkBookmark = async (req, res) => {

    try {

        const { internshipId } = req.params;

        const bookmark = await Bookmark.findOne({

            student: req.user._id,

            internship: internshipId

        });

        return res.status(200).json({

            success: true,

            bookmarked: !!bookmark

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};