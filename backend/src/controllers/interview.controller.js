import Interview from "../models/Interview.js";
import Application from "../models/Application.js";
import User from "../models/User.js";
import Notification from "../models/Notification.js";

import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import logActivity from "../utils/logActivity.js";

import { sendInterviewEmail, sendInterviewCancelledEmail } from "../services/email.service.js";

export const scheduleInterview = asyncHandler(async (req, res) => {

    const {

        application,
        interviewDate,
        interviewMode,
        meetingLink,
        location

    } = req.body;

    // ==========================================================
    // Required Field Validation
    // ==========================================================

    if (

        !application ||
        !interviewDate ||
        !interviewMode

    ) {

        throw new AppError(

            "Application, interview date and interview mode are required.",

            400

        );

    }

    // ==========================================================
    // Interview Date Validation
    // ==========================================================

    if (

        new Date(interviewDate) <= new Date()

    ) {

        throw new AppError(

            "Interview date must be in the future.",

            400

        );

    }

    // ==========================================================
    // Find Application
    // ==========================================================

    const applicationData = await Application.findById(application)

        .populate("internship")

        .populate("applicant");

    if (!applicationData) {

        throw new AppError(

            "Application not found.",

            404

        );

    }

    // ==========================================================
    // Employer Authorization
    // ==========================================================

    if (

        applicationData.internship.createdBy.toString()

        !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to schedule this interview.",

            403

        );

    }

    // ==========================================================
    // Prevent Duplicate Interview
    // ==========================================================

    const alreadyScheduled = await Interview.findOne({

        application

    });

    if (alreadyScheduled) {

        throw new AppError(

            "Interview already scheduled for this application.",

            409

        );

    }

    // ==========================================================
    // Online Interview Validation
    // ==========================================================

    if (

        interviewMode === "Online" &&

        !meetingLink

    ) {

        throw new AppError(

            "Meeting link is required for online interview.",

            400

        );

    }

    // ==========================================================
    // Offline Interview Validation
    // ==========================================================

    if (

        interviewMode === "Offline" &&

        !location

    ) {

        throw new AppError(

            "Interview location is required for offline interview.",

            400

        );

    }

    // ==========================================================
    // Create Interview
    // ==========================================================

    const interview = await Interview.create({

        internship: applicationData.internship._id,

        application,

        student: applicationData.applicant._id,

        employer: req.user._id,

        interviewDate,

        interviewMode,

        meetingLink,

        location,

        status: "Scheduled"

    });

    // ==========================================================
    // Update Application Status
    // ==========================================================

    applicationData.status = "Interview Scheduled";

    await applicationData.save();

    // ==========================================================
    // Create Notification
    // ==========================================================

    await Notification.create({

        user: applicationData.applicant._id,

        title: "Interview Scheduled",

        message: `Your interview has been scheduled on ${new Date(interviewDate).toLocaleString()}.`,

        type: "interview"

    });

    // ==========================================================
    // Send Email
    // ==========================================================

    await sendInterviewEmail(

        applicationData.applicant.email,

        interview

    );

    // ==========================================================
    // Save Activity Log
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "SCHEDULE_INTERVIEW",

        "Interview",

        `Interview scheduled for ${applicationData.applicant.firstName}`

    );

    // ==========================================================
    // Success Response
    // ==========================================================

    return res.status(201).json({

        success: true,

        message: "Interview scheduled successfully.",

        interview

    });

});

export const getStudentInterviews = asyncHandler(async (req, res) => {

    // ==========================================================
    // Pagination
    // ==========================================================

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // ==========================================================
    // Filters
    // ==========================================================

    const status = req.query.status || "";

    const query = {

        student: req.user._id

    };

    if (status) {

        query.status = status;

    }

    // ==========================================================
    // Total Interviews
    // ==========================================================

    const totalInterviews = await Interview.countDocuments(query);

    // ==========================================================
    // Fetch Interviews
    // ==========================================================

    const interviews = await Interview.find(query)

        .populate({

            path: "internship",

            select: "title company location workMode",

            populate: {

                path: "company",

                select: "companyName companyLogo"

            }

        })

        .populate(

            "employer",

            "firstName lastName email"

        )

        .sort({

            interviewDate: 1

        })

        .skip(skip)

        .limit(limit);

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(totalInterviews / limit),

        totalInterviews,

        interviews

    });

});



export const getEmployerInterviews = asyncHandler(async (req, res) => {

    // ==========================================================
    // Pagination
    // ==========================================================

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // ==========================================================
    // Filters
    // ==========================================================

    const status = req.query.status || "";

    const interviewMode = req.query.interviewMode || "";

    const search = req.query.search || "";

    const query = {

        employer: req.user._id

    };

    if (status) {

        query.status = status;

    }

    if (interviewMode) {

        query.interviewMode = interviewMode;

    }

    // ==========================================================
    // Total Interviews
    // ==========================================================

    const totalInterviews = await Interview.countDocuments(query);

    // ==========================================================
    // Fetch Interviews
    // ==========================================================

    let interviews = await Interview.find(query)

        .populate({

            path: "student",

            select: "firstName lastName email profileImage"

        })

        .populate({

            path: "internship",

            select: "title company location workMode",

            populate: {

                path: "company",

                select: "companyName companyLogo"

            }

        })

        .sort({

            interviewDate: 1

        })

        .skip(skip)

        .limit(limit);

    // ==========================================================
    // Search by Student Name
    // ==========================================================

    if (search) {

        interviews = interviews.filter((item) => {

            const fullName =

                `${item.student.firstName} ${item.student.lastName}`

                    .toLowerCase();

            return fullName.includes(

                search.toLowerCase()

            );

        });

    }

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(totalInterviews / limit),

        totalInterviews,

        interviews

    });

});


export const updateInterview = asyncHandler(async (req, res) => {

    // ==========================================================
    // Get Interview
    // ==========================================================

    const interview = await Interview.findById(req.params.id);

    if (!interview) {

        throw new AppError(

            "Interview not found.",

            404

        );

    }

    // ==========================================================
    // Authorization
    // Only Interview Creator (Employer)
    // ==========================================================

    if (

        interview.employer.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to update this interview.",

            403

        );

    }

    // ==========================================================
    // Prevent Editing Cancelled Interview
    // ==========================================================

    if (

        interview.status === "Cancelled"

    ) {

        throw new AppError(

            "Cancelled interview cannot be updated.",

            400

        );

    }

    // ==========================================================
    // Request Data
    // ==========================================================

    const {

        interviewDate,

        interviewMode,

        meetingLink,

        location,

        status

    } = req.body;

    // ==========================================================
    // Validate Interview Date
    // ==========================================================

    if (

        interviewDate &&

        new Date(interviewDate) <= new Date()

    ) {

        throw new AppError(

            "Interview date must be in the future.",

            400

        );

    }

    // ==========================================================
    // Online Interview Validation
    // ==========================================================

    if (

        interviewMode === "Online" &&

        !meetingLink

    ) {

        throw new AppError(

            "Meeting link is required for online interview.",

            400

        );

    }

    // ==========================================================
    // Offline Interview Validation
    // ==========================================================

    if (

        interviewMode === "Offline" &&

        !location

    ) {

        throw new AppError(

            "Interview location is required for offline interview.",

            400

        );

    }

    // ==========================================================
    // Update Fields
    // ==========================================================

    interview.interviewDate = interviewDate ?? interview.interviewDate;

    interview.interviewMode = interviewMode ?? interview.interviewMode;

    interview.meetingLink = meetingLink ?? interview.meetingLink;

    interview.location = location ?? interview.location;

    interview.status = status ?? interview.status;

    await interview.save();

    // ==========================================================
    // Notification
    // ==========================================================

    await Notification.create({

        user: interview.student,

        title: "Interview Updated",

        message: "Your interview details have been updated.",

        type: "interview"

    });

    // ==========================================================
    // Activity Log
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "UPDATE_INTERVIEW",

        "Interview",

        `Updated interview ${interview._id}`

    );

    // ==========================================================
    // Send Updated Email
    // ==========================================================

    const student = await User.findById(interview.student);

    if (student) {

        await sendInterviewEmail(

            student.email,

            interview

        );

    }

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        message: "Interview updated successfully.",

        interview

    });

});



export const cancelInterview = asyncHandler(async (req, res) => {

    // ==========================================================
    // Find Interview
    // ==========================================================

    const interview = await Interview.findById(req.params.id);

    if (!interview) {

        throw new AppError(

            "Interview not found.",

            404

        );

    }

    // ==========================================================
    // Authorization
    // ==========================================================

    if (

        interview.employer.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to cancel this interview.",

            403

        );

    }

    // ==========================================================
    // Already Cancelled
    // ==========================================================

    if (

        interview.status === "Cancelled"

    ) {

        throw new AppError(

            "Interview is already cancelled.",

            400

        );

    }

    // ==========================================================
    // Cancel Interview
    // ==========================================================

    interview.status = "Cancelled";

    await interview.save();

    // ==========================================================
    // Restore Application Status
    // ==========================================================

    const application = await Application.findById(

        interview.application

    );

    if (application) {

        application.status = "Pending";

        await application.save();

    }

    // ==========================================================
    // Notify Student
    // ==========================================================

    await Notification.create({

        user: interview.student,

        title: "Interview Cancelled",

        message: "Your interview has been cancelled by the employer.",

        type: "interview"

    });

    // ==========================================================
    // Send Cancellation Email
    // ==========================================================

    const student = await User.findById(

        interview.student

    );

    if (student) {

        await sendInterviewCancelledEmail(

            student.email,

            interview

        );

    }

    // ==========================================================
    // Save Activity Log
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "CANCEL_INTERVIEW",

        "Interview",

        `Cancelled interview ${interview._id}`

    );

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        message: "Interview cancelled successfully.",

        interview

    });

});
