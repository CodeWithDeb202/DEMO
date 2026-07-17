import User from "../models/User.js";
import uploadToCloudinary from "../utils/uploadCloudinary.js";


export const uploadProfileImage = async (req, res) => {

    try {


        if(!req.file){

            return res.status(400).json({

                success:false,
                message:"Please upload an image"

            });

        }


        const imageUrl = await uploadToCloudinary(req.file);



        const user = await User.findByIdAndUpdate(

            req.user.id,

            {
                profileImage:imageUrl
            },

            {
                new:true
            }

        );



        res.status(200).json({

            success:true,

            message:"Profile image uploaded successfully",

            user

        });



    } catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};