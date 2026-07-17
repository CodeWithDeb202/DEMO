import uploadToCloudinary from "../utils/uploadCloudinary.js";


export const uploadChatFile = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "No file uploaded"

            });

        }

        const fileUrl = await uploadToCloudinary(

            req.file,

            "tech-monster/chat"

        );

        return res.status(200).json({

            success: true,

            fileUrl

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};