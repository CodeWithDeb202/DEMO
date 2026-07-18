import User from "../models/User.js";
import Company from "../models/Company.js";
import Internship from "../models/Internship.js";
import Application from "../models/Application.js";

import asyncHandler from "../utils/asyncHandler.js";

export const studentDashboard = asyncHandler(async (req, res) => {

    const [

        totalApplications,

        pendingApplications,

        acceptedApplications,

        rejectedApplications

    ] = await Promise.all([

        Application.countDocuments({

            applicant: req.user._id

        }),

        Application.countDocuments({

            applicant: req.user._id,

            status: "Pending"

        }),

        Application.countDocuments({

            applicant: req.user._id,

            status: "Accepted"

        }),

        Application.countDocuments({

            applicant: req.user._id,

            status: "Rejected"

        })

    ]);

    return res.status(200).json({

        success: true,

        dashboard: {

            totalApplications,

            pendingApplications,

            acceptedApplications,

            rejectedApplications

        }

    });

});

export const employerDashboard = asyncHandler(async (req, res) => {

    const companies = await Company.find({

        createdBy: req.user._id

    }).select("_id");

    const companyIds = companies.map(

        company => company._id

    );

    const internships = await Internship.find({

        company: {

            $in: companyIds

        }

    }).select("_id");

    const internshipIds = internships.map(

        internship => internship._id

    );

    const [

        totalCompanies,

        totalApplications

    ] = await Promise.all([

        Company.countDocuments({

            createdBy: req.user._id

        }),

        Application.countDocuments({

            internship: {

                $in: internshipIds

            }

        })

    ]);

    return res.status(200).json({

        success: true,

        dashboard: {

            totalCompanies,

            totalInternships: internshipIds.length,

            totalApplications

        }

    });

});

export const adminDashboard = asyncHandler(async (req, res) => {

    const [

        totalUsers,

        totalCompanies,

        totalInternships,

        totalApplications

    ] = await Promise.all([

        User.countDocuments(),

        Company.countDocuments(),

        Internship.countDocuments(),

        Application.countDocuments()

    ]);

    return res.status(200).json({

        success: true,

        dashboard: {

            totalUsers,

            totalCompanies,

            totalInternships,

            totalApplications

        }

    });

});