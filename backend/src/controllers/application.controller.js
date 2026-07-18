import Application from "../models/Application.js";
import Internship from "../models/Internship.js";
import Notification from "../models/Notification.js";
import User from "../models/User.js";

import { sendApplicationStatusEmail } from "../services/email.service.js";

import logActivity from "../utils/logActivity.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";


export const applyInternship = asyncHandler(async (req, res) => {

    const {

        internship,

        coverLetter

    } = req.body;

    if (!internship) {

        throw new AppError(

            "Internship is required",

            400

        );

    }

    const internshipExists = await Internship.findById(

        internship

    );

    if (!internshipExists) {

        throw new AppError(

            "Internship not found",

            404

        );

    }

    const alreadyApplied = await Application.findOne({

        internship,

        applicant: req.user._id

    });

    if (alreadyApplied) {

        throw new AppError(

            "You already applied",

            409

        );

    }

    const application = await Application.create({

        internship,

        applicant: req.user._id,

        resume: req.user.resume,

        coverLetter

    });

    internshipExists.applicationsCount += 1;

    await internshipExists.save();

    await logActivity(

        req,

        req.user._id,

        "APPLY_INTERNSHIP",

        "Application",

        `Applied for ${internshipExists.title}`

    );

    await Notification.create({

        user: internshipExists.createdBy,

        title: "New Application",

        message: `${req.user.firstName} applied for your internship.`,

        type: "application"

    });

    return res.status(201).json({

        success: true,

        message: "Application submitted successfully",

        application

    });

});

export const getMyApplications = asyncHandler(async (req, res) => {

    const applications = await Application.find({

        applicant: req.user._id

    })

    .populate({

        path: "internship",

        populate: {

            path: "company"

        }

    })

    .sort({

        createdAt: -1

    });

    return res.status(200).json({

        success: true,

        applications

    });

});

export const getInternshipApplications = asyncHandler(async (req, res) => {

    const applications = await Application.find({

        internship: req.params.id

    })

    .populate(

        "applicant",

        "firstName lastName email profileImage"

    )

    .sort({

        createdAt: -1

    });

    return res.status(200).json({

        success: true,

        applications

    });

});

export const updateApplicationStatus = asyncHandler(async (req, res) => {

    const { status } = req.body;

    const application = await Application.findById(

        req.params.id

    );

    if (!application) {

        throw new AppError(

            "Application not found",

            404

        );

    }

    application.status = status;

    await application.save();

    const student = await User.findById(

        application.applicant

    );

    if (student) {

        await sendApplicationStatusEmail(

            student.email,

            status

        );

    }

    await Notification.create({

        user: application.applicant,

        title: "Application Updated",

        message: `Your application has been ${status}.`,

        type: "application"

    });

    await logActivity(

        req,

        req.user._id,

        "UPDATE_APPLICATION_STATUS",

        "Application",

        `Changed application status to ${status}`

    );

    return res.status(200).json({

        success: true,

        message: "Status updated successfully",

        application

    });

});

export const deleteApplication = asyncHandler(async (req, res) => {

    const application = await Application.findById(

        req.params.id

    );

    if (!application) {

        throw new AppError(

            "Application not found",

            404

        );

    }

    if (

        application.applicant.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "Unauthorized",

            403

        );

    }

    await Application.findByIdAndDelete(

        req.params.id

    );

    await Internship.findByIdAndUpdate(

        application.internship,

        {

            $inc: {

                applicationsCount: -1

            }

        }

    );

    await logActivity(

        req,

        req.user._id,

        "DELETE_APPLICATION",

        "Application",

        "Deleted internship application"

    );

    return res.status(200).json({

        success: true,

        message: "Application deleted successfully"

    });

});