import Meeting from "../models/Meeting.js";
import Application from "../models/Application.js";
import User from "../models/User.js";
import Notification from "../models/Notification.js";

import { sendInterviewEmail } from "../services/email.service.js";


export const scheduleMeeting = async (req, res) => {

    try {

        const {

            applicationId,

            meetingLink,

            meetingDate,

            platform

        } = req.body;

        const application = await Application.findById(applicationId)

            .populate("applicant")

            .populate("internship");

        if (!application) {

            return res.status(404).json({

                success: false,

                message: "Application not found"

            });

        }

        const meeting = await Meeting.create({

            internship: application.internship._id,

            application: application._id,

            employer: req.user._id,

            student: application.applicant._id,

            meetingLink,

            meetingDate,

            platform

        });

        await logActivity(

            req,

            req.user._id,

            "SCHEDULE_INTERVIEW",

            "Interview",

            "Interview scheduled"

        );

        await Notification.create({

            user: application.applicant._id,

            title: "Interview Scheduled",

            message: `Your interview for ${application.internship.title} has been scheduled.`,

            type: "interview"

        });

        await sendInterviewEmail(

            application.applicant.email,

            {

                title: application.internship.title,

                meetingDate,

                meetingLink,

                platform

            }

        );

        return res.status(201).json({

            success: true,

            message: "Interview scheduled successfully",

            meeting

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getStudentMeetings = async (req, res) => {

    try {

        const meetings = await Meeting.find({

            student: req.user._id

        })

            .populate(

                "internship",

                "title"

            )

            .populate(

                "employer",

                "firstName lastName email"

            )

            .sort({

                meetingDate: 1

            });

        return res.status(200).json({

            success: true,

            meetings

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getEmployerMeetings = async (req, res) => {

    try {

        const meetings = await Meeting.find({

            employer: req.user._id

        })

            .populate(

                "student",

                "firstName lastName email profileImage"

            )

            .populate(

                "internship",

                "title"

            )

            .sort({

                meetingDate: 1

            });

        return res.status(200).json({

            success: true,

            meetings

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const updateMeetingStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const meeting = await Meeting.findById(

            req.params.id

        );

        if (!meeting) {

            return res.status(404).json({

                success: false,

                message: "Meeting not found"

            });

        }

        if (

            ![

                "Scheduled",

                "Completed",

                "Cancelled"

            ].includes(status)

        ) {

            return res.status(400).json({

                success: false,

                message: "Invalid meeting status"

            });

        }

        meeting.status = status;

        await meeting.save();

        return res.status(200).json({

            success: true,

            message: "Meeting status updated successfully",

            meeting

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const deleteMeeting = async (req, res) => {

    try {

        const meeting = await Meeting.findById(

            req.params.id

        );

        if (!meeting) {

            return res.status(404).json({

                success: false,

                message: "Meeting not found"

            });

        }

        if (

            meeting.employer.toString() !== req.user._id.toString()

        ) {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }

        await Meeting.findByIdAndDelete(

            req.params.id

        );

        return res.status(200).json({

            success: true,

            message: "Meeting deleted successfully"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};