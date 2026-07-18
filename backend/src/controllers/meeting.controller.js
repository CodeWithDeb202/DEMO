import Meeting from "../models/Meeting.js";
import Application from "../models/Application.js";
import User from "../models/User.js";
import Notification from "../models/Notification.js";

import asyncHandler from '../utils/asyncHandler.js';
import AppError from "../utils/AppError.js";
import logActivity from "../utils/logActivity.js";

import { sendInterviewEmail } from "../services/email.service.js";


export const scheduleMeeting = asyncHandler(async (req, res) => {

    // ==========================================================
    // Request Body
    // ==========================================================

    const {

        applicationId,

        meetingLink,

        meetingDate,

        platform,

        location

    } = req.body;

    // ==========================================================
    // Validation
    // ==========================================================

    if (!applicationId) {

        throw new AppError(

            "Application ID is required.",

            400

        );

    }

    if (!meetingDate) {

        throw new AppError(

            "Meeting date is required.",

            400

        );

    }

    if (!platform) {

        throw new AppError(

            "Meeting platform is required.",

            400

        );

    }

    // ==========================================================
    // Future Date Validation
    // ==========================================================

    if (new Date(meetingDate) <= new Date()) {

        throw new AppError(

            "Meeting date must be in the future.",

            400

        );

    }

    // ==========================================================
    // Online / Offline Validation
    // ==========================================================

    if (

        platform === "Google Meet" ||

        platform === "Zoom" ||

        platform === "Microsoft Teams"

    ) {

        if (!meetingLink) {

            throw new AppError(

                "Meeting link is required.",

                400

            );

        }

    }

    if (

        platform === "Offline"

    ) {

        if (!location) {

            throw new AppError(

                "Meeting location is required.",

                400

            );

        }

    }

    // ==========================================================
    // Application
    // ==========================================================

    const application = await Application.findById(applicationId)

        .populate("applicant")

        .populate("internship");

    if (!application) {

        throw new AppError(

            "Application not found.",

            404

        );

    }

    // ==========================================================
    // Duplicate Meeting Check
    // ==========================================================

    const alreadyScheduled = await Meeting.findOne({

        application: applicationId,

        status: "Scheduled"

    });

    if (alreadyScheduled) {

        throw new AppError(

            "Meeting already scheduled for this application.",

            409

        );

    }

    // ==========================================================
    // Create Meeting
    // ==========================================================

    const meeting = await Meeting.create({

        internship: application.internship._id,

        application: application._id,

        employer: req.user._id,

        student: application.applicant._id,

        meetingLink,

        meetingDate,

        location,

        platform,

        status: "Scheduled"

    });

    // ==========================================================
    // Notification
    // ==========================================================

    await Notification.create({

        user: application.applicant._id,

        internship: application.internship._id,

        title: "Interview Scheduled",

        message: `Your interview for ${application.internship.title} has been scheduled.`,

        type: "interview"

    });

    // ==========================================================
    // Activity Log
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "SCHEDULE_INTERVIEW",

        "Meeting",

        `Interview scheduled for ${application.applicant.firstName}`

    );

    // ==========================================================
    // Send Email
    // ==========================================================

    await sendInterviewEmail(

        application.applicant.email,

        {

            studentName:

                application.applicant.firstName,

            internshipTitle:

                application.internship.title,

            meetingDate,

            meetingLink,

            location,

            platform

        }

    );

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(201).json({

        success: true,

        message: "Meeting scheduled successfully.",

        meeting

    });

});


export const getStudentMeetings = asyncHandler(async (req, res) => {

    // ==========================================================
    // Pagination
    // ==========================================================

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // ==========================================================
    // Filters
    // ==========================================================

    const {

        status,

        search,

        upcoming

    } = req.query;

    const query = {

        student: req.user._id

    };

    // ==========================================================
    // Status Filter
    // ==========================================================

    if (status) {

        query.status = status;

    }

    // ==========================================================
    // Upcoming Meetings
    // ==========================================================

    if (upcoming === "true") {

        query.meetingDate = {

            $gte: new Date()

        };

    }

    // ==========================================================
    // Total Count
    // ==========================================================

    const totalMeetings = await Meeting.countDocuments(

        query

    );

    // ==========================================================
    // Meetings
    // ==========================================================

    const meetings = await Meeting.find(query)

        .populate({

            path: "internship",

            select: "title",

            match: search
                ? {

                    title: {

                        $regex: search,

                        $options: "i"

                    }

                }
                : {}

        })

        .populate(

            "employer",

            "firstName lastName email profileImage"

        )

        .sort({

            meetingDate: 1

        })

        .skip(skip)

        .limit(limit);

    // ==========================================================
    // Remove Null Internship (Search Case)
    // ==========================================================

    const filteredMeetings = meetings.filter(

        meeting => meeting.internship

    );

    // ==========================================================
    // Activity Log (Optional)
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "VIEW_MEETINGS",

        "Meeting",

        "Viewed student meetings"

    );

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(

            totalMeetings / limit

        ),

        totalMeetings,

        meetings: filteredMeetings

    });

});

/* ==========================================================

Future Improvements

-------------------------------------------------------------

1. Today's Meetings

2. Completed Meetings

3. Missed Meetings

4. Join Meeting Button

5. Countdown Timer

6. Google Calendar Sync

7. Outlook Calendar Sync

8. Reminder Notification

9. Reminder Email

10. WhatsApp Reminder

11. SMS Reminder

12. Meeting Recording URL

13. Student Feedback

14. Employer Feedback

15. Attendance Tracking

16. Meeting Duration

17. Redis Cache

18. Export PDF

19. Export Excel

20. Soft Delete Support

21. AI Meeting Summary

22. AI Resume Suggestions

23. AI Interview Preparation

24. Company Filter

25. Platform Filter

========================================================== */


export const getEmployerMeetings = asyncHandler(async (req, res) => {

    // ==========================================================
    // Pagination
    // ==========================================================

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // ==========================================================
    // Filters
    // ==========================================================

    const {

        status,

        search,

        platform,

        upcoming

    } = req.query;

    const query = {

        employer: req.user._id

    };

    // ==========================================================
    // Status Filter
    // ==========================================================

    if (status) {

        query.status = status;

    }

    // ==========================================================
    // Platform Filter
    // ==========================================================

    if (platform) {

        query.platform = platform;

    }

    // ==========================================================
    // Upcoming Meetings
    // ==========================================================

    if (upcoming === "true") {

        query.meetingDate = {

            $gte: new Date()

        };

    }

    // ==========================================================
    // Total Meetings
    // ==========================================================

    const totalMeetings = await Meeting.countDocuments(

        query

    );

    // ==========================================================
    // Get Meetings
    // ==========================================================

    const meetings = await Meeting.find(query)

        .populate(

            "student",

            "firstName lastName email profileImage"

        )

        .populate({

            path: "internship",

            select: "title company",

            populate: {

                path: "company",

                select: "companyName"

            },

            match: search

                ? {

                    title: {

                        $regex: search,

                        $options: "i"

                    }

                }

                : {}

        })

        .sort({

            meetingDate: 1

        })

        .skip(skip)

        .limit(limit);

    // ==========================================================
    // Remove Null Internship (Search Case)
    // ==========================================================

    const filteredMeetings = meetings.filter(

        meeting => meeting.internship

    );

    // ==========================================================
    // Activity Log (Optional)
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "VIEW_EMPLOYER_MEETINGS",

        "Meeting",

        "Viewed employer meetings"

    );

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        currentPage: page,

        totalPages: Math.ceil(

            totalMeetings / limit

        ),

        totalMeetings,

        meetings: filteredMeetings

    });

});

/* ==========================================================

Future Improvements

-------------------------------------------------------------

1. Today's Meetings

2. Completed Meetings

3. Cancelled Meetings

4. Search by Student Name

5. Search by Company

6. Date Range Filter

7. Join Meeting Button

8. Auto Reminder Email

9. WhatsApp Reminder

10. SMS Reminder

11. Google Calendar Sync

12. Outlook Calendar Sync

13. Zoom API Integration

14. Google Meet Auto Create

15. Microsoft Teams Integration

16. Meeting Recording URL

17. Meeting Notes

18. AI Meeting Summary

19. Student Rating

20. Employer Feedback

21. Export Excel

22. Export PDF

23. Redis Cache

24. Soft Delete

25. Audit Logs

26. Analytics Dashboard

27. AI Suggested Interview Questions

========================================================== */

export const updateMeetingStatus = asyncHandler(async (req, res) => {

    // ==========================================================
    // Request Body
    // ==========================================================

    const { status } = req.body;

    // ==========================================================
    // Allowed Status
    // ==========================================================

    const allowedStatus = [

        "Scheduled",

        "Completed",

        "Cancelled"

    ];

    if (

        !allowedStatus.includes(status)

    ) {

        throw new AppError(

            "Invalid meeting status.",

            400

        );

    }

    // ==========================================================
    // Find Meeting
    // ==========================================================

    const meeting = await Meeting.findById(

        req.params.id

    )

        .populate(

            "student",

            "firstName lastName email"

        )

        .populate(

            "internship",

            "title"

        );

    if (!meeting) {

        throw new AppError(

            "Meeting not found.",

            404

        );

    }

    // ==========================================================
    // Authorization
    // ==========================================================

    if (

        meeting.employer.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to update this meeting.",

            403

        );

    }

    // ==========================================================
    // Already Same Status
    // ==========================================================

    if (

        meeting.status === status

    ) {

        throw new AppError(

            `Meeting is already ${status}.`,

            400

        );

    }

    // ==========================================================
    // Update Status
    // ==========================================================

    meeting.status = status;

    await meeting.save();

    // ==========================================================
    // Notification
    // ==========================================================

    await Notification.create({

        user: meeting.student._id,

        internship: meeting.internship._id,

        title: "Meeting Status Updated",

        message: `Your interview for ${meeting.internship.title} is now ${status}.`,

        type: "interview"

    });

    // ==========================================================
    // Email
    // ==========================================================

    await sendMeetingStatusEmail(

        meeting.student.email,

        {

            studentName:

                meeting.student.firstName,

            internshipTitle:

                meeting.internship.title,

            meetingDate:

                meeting.meetingDate,

            status

        }

    );

    // ==========================================================
    // Activity Log
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "UPDATE_MEETING_STATUS",

        "Meeting",

        `Meeting status changed to ${status}`

    );

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        message: "Meeting status updated successfully.",

        meeting

    });

});

/* ==========================================================

Future Improvements

-------------------------------------------------------------

1. Auto Update Application Status

2. Send Push Notification

3. WhatsApp Notification

4. SMS Notification

5. Google Calendar Update

6. Outlook Calendar Update

7. Zoom Meeting Update

8. Teams Meeting Update

9. Meeting Feedback

10. Employer Rating

11. Student Rating

12. AI Meeting Summary

13. Redis Cache

14. Audit Logs

15. Status History

16. Email Templates

17. Auto Generate Certificate

18. Auto Generate Offer Letter

19. Analytics Event

20. WebSocket Live Update

========================================================== */


export const deleteMeeting = asyncHandler(async (req, res) => {

    // ==========================================================
    // Find Meeting
    // ==========================================================

    const meeting = await Meeting.findById(req.params.id)

        .populate(

            "student",

            "firstName lastName email"

        )

        .populate(

            "internship",

            "title"

        );

    if (!meeting) {

        throw new AppError(

            "Meeting not found.",

            404

        );

    }

    // ==========================================================
    // Authorization
    // ==========================================================

    if (

        meeting.employer.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to delete this meeting.",

            403

        );

    }

    // ==========================================================
    // Delete Notification (Optional)
    // ==========================================================

    await Notification.deleteMany({

        user: meeting.student._id,

        internship: meeting.internship._id,

        type: "interview"

    });

    // ==========================================================
    // Activity Log
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "DELETE_MEETING",

        "Meeting",

        `Deleted meeting for ${meeting.student.firstName}`

    );

    // ==========================================================
    // Delete Meeting
    // ==========================================================

    await Meeting.findByIdAndDelete(

        meeting._id

    );

    // ==========================================================
    // Optional Email
    // ==========================================================

    await sendMeetingDeletedEmail(

        meeting.student.email,

        {

            studentName:

                meeting.student.firstName,

            internshipTitle:

                meeting.internship.title

        }

    );

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(200).json({

        success: true,

        message: "Meeting deleted successfully."

    });

});

/* ==========================================================

Future Improvements

-------------------------------------------------------------

1. Soft Delete Support

2. Restore Meeting API

3. Delete Google Calendar Event

4. Delete Outlook Calendar Event

5. Delete Zoom Meeting

6. Delete Google Meet Link

7. Delete Microsoft Teams Meeting

8. Push Notification

9. WhatsApp Notification

10. SMS Notification

11. Audit Logs

12. Redis Cache

13. Analytics Event

14. WebSocket Update

15. Meeting History

16. Email Template

17. Auto Restore Application Status

18. AI Delete Analysis

19. Bulk Delete Meetings

20. Delete Related Files

========================================================== */