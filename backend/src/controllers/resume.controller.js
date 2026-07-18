import User from "../models/User.js";
import uploadToCloudinary from "../utils/uploadCloudinary.js";


import asyncHandler from "../utils/asyncHandler.js";

export const uploadResume = asyncHandler(  async (req, res) => {
        const resumeUrl = await uploadToCloudinary(

            req.file,

            "tech-monster/resumes"

        );

        const user = await User.findByIdAndUpdate(

            req.user._id,

            {

                resume: resumeUrl

            },

            {

                new: true

            }

        );

        return res.status(200).json({

            success: true,

            message: "Resume uploaded",

            user

        });

});