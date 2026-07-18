import User from "../models/User.js";
import Company from "../models/Company.js";
import Internship from "../models/Internship.js";
import Application from "../models/Application.js";
import Message from "../models/Message.js";
import Meeting from "../models/Meeting.js";
import Offer from "../models/Offer.js";
import Certificate from "../models/Certificate.js";
import Notification from "../models/Notification.js";

import logActivity from "../utils/logActivity.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";


export const getDashboardStats = asyncHandler(async (req, res) => {

    const totalUsers = await User.countDocuments();

    const totalStudents = await User.countDocuments({
        role: "student"
    });

    const totalEmployers = await User.countDocuments({
        role: "employer"
    });

    const totalAdmins = await User.countDocuments({
        role: "admin"
    });

    const totalCompanies = await Company.countDocuments();

    const verifiedCompanies = await Company.countDocuments({
        isVerified: true
    });

    const totalInternships = await Internship.countDocuments();

    const activeInternships = await Internship.countDocuments({
        status: "Active"
    });

    const totalApplications = await Application.countDocuments();

    return res.status(200).json({

        success: true,

        stats: {

            totalUsers,
            totalStudents,
            totalEmployers,
            totalAdmins,
            totalCompanies,
            verifiedCompanies,
            totalInternships,
            activeInternships,
            totalApplications

        }

    });

});


export const getAllUsers = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const search = req.query.search || "";

    const role = req.query.role || "";

    const query = {};

    if (search) {

        query.$or = [

            {

                firstName: {

                    $regex: search,

                    $options: "i"

                }

            },

            {

                lastName: {

                    $regex: search,

                    $options: "i"

                }

            },

            {

                email: {

                    $regex: search,

                    $options: "i"

                }

            }

        ];

    }

    if (role) {

        query.role = role;

    }

    const totalUsers = await User.countDocuments(query);

    const users = await User.find(query)

        .select("-password")

        .sort({

            createdAt: -1

        })

        .skip((page - 1) * limit)

        .limit(limit);

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(totalUsers / limit),

        totalUsers,

        users

    });

});


export const getAllInternships = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const search = req.query.search || "";

    const query = {};

    if (search) {

        query.title = {

            $regex: search,

            $options: "i"

        };

    }

    const totalInternships = await Internship.countDocuments(query);

    const internships = await Internship.find(query)

        .populate(

            "company",

            "companyName"

        )

        .populate(

            "createdBy",

            "firstName lastName email"

        )

        .sort({

            createdAt: -1

        })

        .skip((page - 1) * limit)

        .limit(limit);

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(totalInternships / limit),

        totalInternships,

        internships

    });

});

export const getAllCompanies = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const search = req.query.search || "";

    const query = {};

    if (search) {

        query.companyName = {

            $regex: search,

            $options: "i"

        };

    }

    const totalCompanies = await Company.countDocuments(query);

    const companies = await Company.find(query)

        .populate(

            "createdBy",

            "firstName lastName email"

        )

        .sort({

            createdAt: -1

        })

        .skip((page - 1) * limit)

        .limit(limit);

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(totalCompanies / limit),

        totalCompanies,

        companies

    });

});

export const getAllApplications = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const totalApplications = await Application.countDocuments();

    const applications = await Application.find()

        .populate(

            "applicant",

            "firstName lastName email"

        )

        .populate(

            "internship",

            "title"

        )

        .sort({

            createdAt: -1

        })

        .skip((page - 1) * limit)

        .limit(limit);

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(totalApplications / limit),

        totalApplications,

        applications

    });

});



export const blockUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {

        throw new AppError(

            "User not found",

            404

        );

    }

    if (user.role === "admin") {

        throw new AppError(

            "Admin account cannot be blocked",

            403

        );

    }

    user.isBlocked = true;

    await user.save();

    await logActivity(

        req,

        req.user._id,

        "BLOCK_USER",

        "Admin",

        `Blocked user: ${user.email}`

    );

    return res.status(200).json({

        success: true,

        message: "User blocked successfully",

        user

    });

});


export const unblockUser = asyncHandler(async (req, res) => {

    const user = await User.findById(

        req.params.id

    );

    if (!user) {

        throw new AppError(

            "User not found",

            404

        );

    }

    user.isBlocked = false;

    await user.save();

    await logActivity(

        req,

        req.user._id,

        "UNBLOCK_USER",

        "Admin",

        `Unblocked user: ${user.email}`

    );

    return res.status(200).json({

        success: true,

        message: "User unblocked successfully",

        user

    });

});


export const deleteUser = asyncHandler(async (req, res) => {

    const user = await User.findById(

        req.params.id

    );

    if (!user) {

        throw new AppError(

            "User not found",

            404

        );

    }

    if (user.role === "admin") {

        throw new AppError(

            "Admin account cannot be deleted",

            403

        );

    }

    await Application.deleteMany({

        applicant: user._id

    });

    await Message.deleteMany({

        $or: [

            {

                sender: user._id

            },

            {

                receiver: user._id

            }

        ]

    });

    await Meeting.deleteMany({

        $or: [

            {

                student: user._id

            },

            {

                employer: user._id

            }

        ]

    });

    await Offer.deleteMany({

        student: user._id

    });

    await Certificate.deleteMany({

        student: user._id

    });

    await User.findByIdAndDelete(

        user._id

    );

    await logActivity(

        req,

        req.user._id,

        "DELETE_USER",

        "Admin",

        `Deleted user: ${user.email}`

    );

    return res.status(200).json({

        success: true,

        message: "User deleted successfully"

    });

});


export const verifyCompany = asyncHandler(async (req, res) => {

    const company = await Company.findById(

        req.params.id

    );

    if (!company) {

        throw new AppError(

            "Company not found",

            404

        );

    }

    company.isVerified = true;

    await company.save();

    await logActivity(

        req,

        req.user._id,

        "VERIFY_COMPANY",

        "Admin",

        `Verified company: ${company.companyName}`

    );

    await Notification.create({

        user: company.createdBy,

        title: "Company Verified",

        message: "Your company has been verified successfully.",

        type: "company"

    });

    return res.status(200).json({

        success: true,

        message: "Company verified successfully",

        company

    });

});


export const featureInternship = asyncHandler(async (req, res) => {

    const internship = await Internship.findById(

        req.params.id

    );

    if (!internship) {

        throw new AppError(

            "Internship not found",

            404

        );

    }

    internship.isFeatured = !internship.isFeatured;

    await internship.save();

    await logActivity(

        req,

        req.user._id,

        "FEATURE_INTERNSHIP",

        "Admin",

        `${internship.isFeatured ? "Featured" : "Unfeatured"} internship: ${internship.title}`

    );

    return res.status(200).json({

        success: true,

        message: internship.isFeatured
            ? "Internship marked as featured"
            : "Internship removed from featured",

        internship

    });

});