import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(

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

        checkIn: {

            type: Date

        },

        checkOut: {

            type: Date

        },

        status: {

            type: String,

            enum: [

                "Present",

                "Absent",

                "Leave"

            ],

            default: "Present"

        }

    },

    {

        timestamps: true

    }

);

export default mongoose.model(

    "Attendance",

    attendanceSchema

);