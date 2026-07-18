import User from "../models/User.js";
import uploadToCloudinary from "../utils/uploadCloudinary.js";

import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";


export const uploadProfileImage = asyncHandler( async (req, res) => {


        if (!req.file) {

            throw new AppError(
                "Please upload an image",
                400
            )

        }


        const imageUrl = await uploadToCloudinary(
            req.file,
            "tech-monster/profile"
        );



        const user = await User.findByIdAndUpdate(

            req.user.id,

            {
                profileImage: imageUrl
            },

            {
                new: true
            }

        );



        res.status(200).json({

            success: true,

            message: "Profile image uploaded successfully",

            user

        });



        res.status(500).json({

            success: false,

            message: error.message

        });

});