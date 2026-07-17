import User from "../models/User.js";

export const getAllUsers = async (req, res) => {

    try {

        const users = await User.find()

            .select("-password")

            .sort({ createdAt: -1 });

        return res.status(200).json({

            success: true,

            users

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};