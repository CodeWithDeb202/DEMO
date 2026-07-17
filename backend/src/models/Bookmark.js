import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(

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

        }

    },

    {

        timestamps: true

    }

);

bookmarkSchema.index(

    {

        student: 1,

        internship: 1

    },

    {

        unique: true

    }

);

export default mongoose.model(

    "Bookmark",

    bookmarkSchema

);