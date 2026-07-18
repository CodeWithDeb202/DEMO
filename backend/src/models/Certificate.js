import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(

    {

        student: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        internship: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Internship",

            required: true

        },

        employer: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        offer: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Offer"

        },

        certificateNumber: {

            type: String,

            unique: true,

            required: true

        },

        issueDate: {

            type: Date,

            default: Date.now

        },

        pdfUrl: {

            type: String,

            default: ""

        }

    },

    {

        timestamps: true

    }

);

certificateSchema.index(

    {

        offer: 1

    },

    {

        unique: true

    }

);

export default mongoose.model(

    "Certificate",

    certificateSchema

);