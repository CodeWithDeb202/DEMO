import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {

        companyName: {
            type: String,
            required: true,
            trim: true,
        },

        companyEmail: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        companyWebsite: {
            type: String,
            default: "",
        },

        companyLogo: {
            type: String,
            default: "",
        },

        industry: {
            type: String,
            default: "",
        },

        companySize: {
            type: String,
            default: "",
        },

        foundedYear: {
            type: Number,
        },

        location: {
            type: String,
            default: "",
        },

        description: {
            type: String,
            default: "",
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }

    },

    {

        timestamps: true,

    }

);

export default mongoose.model(
    "Company",
    companySchema
);