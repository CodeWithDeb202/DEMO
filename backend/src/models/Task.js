import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(

    {

        title: {

            type: String,

            required: true,

            trim: true

        },

        description: {

            type: String,

            default: ""

        },

        assignedBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        assignedTo: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        internship: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Internship"

        },

        status: {

            type: String,

            enum: [

                "Pending",

                "In Progress",

                "Completed"

            ],

            default: "Pending"

        },

        dueDate: {

            type: Date,

            required: true

        }

    },

    {

        timestamps: true

    }

);

const Task = mongoose.model(

    "Task",

    taskSchema

);

export default Task;