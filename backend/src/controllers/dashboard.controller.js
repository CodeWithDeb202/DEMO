import User from "../models/User.js";
import Company from "../models/Company.js";
import Internship from "../models/Internship.js";
import Application from "../models/Application.js";

export const studentDashboard = async (req, res) => {

    try {

        const totalApplications = await Application.countDocuments({

            applicant: req.user._id

        });

        const pendingApplications = await Application.countDocuments({

            applicant: req.user._id,

            status: "Pending"

        });

        const acceptedApplications = await Application.countDocuments({

            applicant: req.user._id,

            status: "Accepted"

        });

        const rejectedApplications = await Application.countDocuments({

            applicant: req.user._id,

            status: "Rejected"

        });

        return res.status(200).json({

            success: true,

            dashboard: {

                totalApplications,

                pendingApplications,

                acceptedApplications,

                rejectedApplications

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

export const employerDashboard = async (req, res) => {

    try {

        const totalCompanies = await Company.countDocuments({

            createdBy: req.user._id

        });

        const companyIds = await Company.find({

            createdBy: req.user._id

        }).select("_id");

        const internshipIds = await Internship.find({

            company: {

                $in: companyIds

            }

        }).select("_id");

        const totalInternships = internshipIds.length;

        const totalApplications = await Application.countDocuments({

            internship: {

                $in: internshipIds

            }

        });

        return res.status(200).json({

            success: true,

            dashboard: {

                totalCompanies,

                totalInternships,

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

export const adminDashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalCompanies = await Company.countDocuments();

        const totalInternships = await Internship.countDocuments();

        const totalApplications = await Application.countDocuments();

        return res.status(200).json({

            success: true,

            dashboard: {

                totalUsers,

                totalCompanies,

                totalInternships,

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