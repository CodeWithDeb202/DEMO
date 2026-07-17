import Interview from "../models/Interview.js";
import Application from "../models/Application.js";
import User from "../models/User.js";
import { sendInterviewEmail } from "../services/email.service.js";

export const scheduleInterview = async (req, res) => {

    try {

        const {

            application,

            interviewDate,

            interviewMode,

            meetingLink,

            location

        } = req.body;

        const applicationData = await Application.findById(application)
            .populate("internship");

        if (!applicationData) {

            return res.status(404).json({

                success: false,

                message: "Application not found"

            });

        }

        const interview = await Interview.create({

            internship: applicationData.internship._id,

            application,

            student: applicationData.applicant,

            employer: req.user._id,

            interviewDate,

            interviewMode,

            meetingLink,

            location

        });

        const student = await User.findById(applicationData.applicant);

        if (student) {

            await sendInterviewEmail(

                student.email,

                interview

            );

        }

        return res.status(201).json({

            success: true,

            message: "Interview scheduled successfully",

            interview

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getStudentInterviews = async (req, res) => {

    try {

        const interviews = await Interview.find({

            student: req.user._id

        })

        .populate("internship", "title")

        .sort({

            interviewDate: 1

        });

        return res.status(200).json({

            success: true,

            interviews

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getEmployerInterviews = async (req, res) => {

    try {

        const interviews = await Interview.find({

            employer: req.user._id

        })

        .populate(

            "student",

            "firstName lastName email"

        )

        .populate(

            "internship",

            "title"

        )

        .sort({

            interviewDate: 1

        });

        return res.status(200).json({

            success: true,

            interviews

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const updateInterview = async (req, res) => {

    try {

        const interview = await Interview.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true

            }

        );

        if (!interview) {

            return res.status(404).json({

                success: false,

                message: "Interview not found"

            });

        }

        return res.status(200).json({

            success: true,

            message: "Interview updated",

            interview

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const cancelInterview = async (req, res) => {

    try {

        const interview = await Interview.findById(

            req.params.id

        );

        if (!interview) {

            return res.status(404).json({

                success: false,

                message: "Interview not found"

            });

        }

        interview.status = "Cancelled";

        await interview.save();

        return res.status(200).json({

            success: true,

            message: "Interview cancelled",

            interview

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};