import mongoose from "mongoose";

const internshipViewSchema = new mongoose.Schema(

    {

        internship: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Internship",

            required: true

        },

        user: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        }

    },

    {

        timestamps: true

    }

);

// Same user can view same internship only once
internshipViewSchema.index(

    {

        internship: 1,

        user: 1

    },

    {

        unique: true

    }

);

export default mongoose.model(

    "InternshipView",

    internshipViewSchema

);