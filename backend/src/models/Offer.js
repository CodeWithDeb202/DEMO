import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(

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

        joiningDate: {

            type: Date,

            required: true

        },

        stipend: {

            type: Number,

            default: 0

        },

        duration: {

            type: String,

            required: true

        },

        message: {

            type: String,

            default: ""

        },

        status: {

            type: String,

            enum: [

                "Pending",

                "Accepted",

                "Rejected"

            ],

            default: "Pending"

        },

        offerLetterUrl: {
            type: String,
            default: ""
        },

        offerLetterPublicId: {
            type: String,
            default: ""
        },

    },

    {

        timestamps: true

    }

);

export default mongoose.model(

    "Offer",

    offerSchema

);