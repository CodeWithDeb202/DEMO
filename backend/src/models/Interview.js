import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(

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

        student: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        employer: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        interviewDate: {

            type: Date,

            required: true

        },

        interviewMode: {

            type: String,

            enum: [

                "Online",

                "Offline"

            ],

            default: "Online"

        },

        meetingLink: {

            type: String,

            default: ""

        },

        location: {

            type: String,

            default: ""

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

    "Interview",

    interviewSchema

);