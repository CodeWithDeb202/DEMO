import uploadToCloudinary from "../utils/uploadCloudinary.js";

import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";


export const uploadChatFile = asyncHandler(async (req, res) => {

    if (!req.file) {

        throw new AppError(

            "No file uploaded",

            400

        );

    }
    
    const allowedMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedMimeTypes.includes(req.file.mimetype)) {

        throw new AppError(

            "Unsupported file type",

            400

        );

    }

    if (req.file.size > 10 * 1024 * 1024) {

        throw new AppError(

            "File size must not exceed 10 MB",

            400

        );

    }

    const fileUrl = await uploadToCloudinary(

        req.file,

        "tech-monster/chat"

    );

    return res.status(200).json({

        success: true,

        message: "File uploaded successfully",

        fileUrl

    });

});