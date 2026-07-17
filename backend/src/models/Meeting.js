import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(

    {

        internship: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Internship",

            required: true

        },

        application: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Application",

            required: true

        },

        employer: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        student: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        meetingLink: {

            type: String,

            required: true

        },

        platform: {

            type: String,

            enum: [

                "Google Meet",

                "Zoom",

                "Microsoft Teams"

            ],

            default: "Google Meet"

        },

        meetingDate: {

            type: Date,

            required: true

        },

        status: {

            type: String,

            enum: [

                "Scheduled",

                "Completed",

                "Cancelled"

            ],

            default: "Scheduled"

        }

    },

    {

        timestamps: true

    }

);

export default mongoose.model(

    "Meeting",

    meetingSchema

);