import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    workMode: {
      type: String,
      enum: ["Remote", "Onsite", "Hybrid"],
      required: true,
    },

    internshipType: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship"],
      required: true,
    },

    stipend: {
      type: Number,
      default: 0,
    },

    duration: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    openings: {
      type: Number,
      default: 1,
    },

    experience: {
      type: String,
      default: "Fresher",
    },

    lastDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    category: {
      type: String,
      default: "Software Development"
    },

    isFeatured: {
      type: Boolean,
      default: false
    },

    views: {
      type: Number,
      default: 0
    },

    applicationsCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Internship", internshipSchema);