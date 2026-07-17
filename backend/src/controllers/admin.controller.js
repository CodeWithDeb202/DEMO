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


export const getDashboardStats = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getAllUsers = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getAllCompanies = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getAllInternships = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getAllApplications = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};



export const blockUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        if (user.role === "admin") {

            return res.status(403).json({

                success: false,

                message: "Admin account cannot be blocked"

            });

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const unblockUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        user.isBlocked = false;

        await user.save();

        return res.status(200).json({

            success: true,

            message: "User unblocked successfully",

            user

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User not found"

            });

        }

        if (user.role === "admin") {

            return res.status(403).json({

                success: false,

                message: "Admin account cannot be deleted"

            });

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const verifyCompany = async (req, res) => {

    try {

        const company = await Company.findById(

            req.params.id

        );

        if (!company) {

            return res.status(404).json({

                success: false,

                message: "Company not found"

            });

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const featureInternship = async (req, res) => {

    try {

        const internship = await Internship.findById(

            req.params.id

        );

        if (!internship) {

            return res.status(404).json({

                success:false,

                message:"Internship not found"

            });

        }

        internship.isFeatured = !internship.isFeatured;

        await internship.save();

        return res.status(200).json({

            success:true,

            internship

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success:false,

            message:"Internal Server Error"

        });

    }

};