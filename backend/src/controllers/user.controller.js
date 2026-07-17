import bcrypt from "bcrypt";
import OTP from "../models/OTP.js";
import User from "../models/User.js";

export const getCurrentUser = async (req, res) => {
  try {

    const user = req.user;

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      user: user,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};


export const updateProfile = async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            phone,
            bio,
            college,
            skills,
            location,
            github,
            linkedin
        } = req.body;

        const user = await User.findByIdAndUpdate(

            req.user._id,

            {
                firstName,
                lastName,
                phone,
                bio,
                college,
                skills,
                location,
                github,
                linkedin
            },

            {
                new: true,
                runValidators: true
            }

        ).select("-password");

        return res.status(200).json({

            success: true,

            message: "Profile updated successfully",

            user

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const changePassword = async (req, res) => {

    try {

        const {

            currentPassword,

            newPassword

        } = req.body;

        if (!currentPassword || !newPassword) {

            return res.status(400).json({

                success: false,

                message: "All fields are required"

            });

        }

        const user = await User.findById(req.user._id);

        const isMatch = await bcrypt.compare(

            currentPassword,

            user.password

        );

        if (!isMatch) {

            return res.status(400).json({

                success: false,

                message: "Current password is incorrect"

            });

        }

        user.password = newPassword;

        await user.save();

        return res.status(200).json({

            success: true,

            message: "Password changed successfully"

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const deleteAccount = async (req, res) => {

    try {

        await OTP.deleteMany({

            email: req.user.email

        });

        await User.findByIdAndDelete(

            req.user._id

        );

        return res.status(200).json({

            success: true,

            message: "Account deleted successfully"

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};