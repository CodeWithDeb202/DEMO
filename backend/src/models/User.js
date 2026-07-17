import bcrypt from "bcrypt";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {

        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true,
            select: false,
            minlength: 6,
        },

        role: {
            type: String,
            enum: [
                "student",
                "mentor",
                "admin"
            ],
            default: "student"
        },

        isVerified: {
            type: Boolean,
            default: false
        },

        avatar: {
            type: String,
            default: ""
        },

        phone: {
            type: String,
            default: ""
        },

        college: {
            type: String,
            default: ""
        },

        branch: {
            type: String,
            default: ""
        },

        year: {
            type: String,
            default: ""
        },

        github: {
            type: String,
            default: ""
        },

        linkedin: {
            type: String,
            default: ""
        },

        bio: {
            type: String,
            default: ""
        },

        skills: {

            type: [String],

            default: []

        },

        resume: {
            type: String,
            default: ""
        }

    },

    {

        timestamps: true

    }

);

userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

});

userSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(
        password,
        this.password
    );

};

export default mongoose.model(
    "User",
    userSchema
);