import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(

    {

        user: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        action: {

            type: String,

            required: true

        },

        module: {

            type: String,

            enum: [

                "Auth",

                "Profile",

                "Company",

                "Internship",

                "Application",

                "Interview",

                "Offer",

                "Certificate",

                "Chat",

                "Notification",

                "Admin"

            ],

            required: true

        },

        description: {

            type: String,

            required: true

        },

        ipAddress: {

            type: String,

            default: ""

        },

        userAgent: {

            type: String,

            default: ""

        },
        target: {

            type: mongoose.Schema.Types.ObjectId,

            refPath: "targetModel"

        },

    },

    {

        timestamps: true

    }

);

export default mongoose.model(

    "ActivityLog",

    activityLogSchema

);