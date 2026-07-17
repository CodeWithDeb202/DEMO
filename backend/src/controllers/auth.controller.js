import jwt from "jsonwebtoken";

import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import OTP from "../models/OTP.js";
import generateOTP from "../utils/generateOTP.js";
import { sendOTPEmail, sendResetPasswordOTP } from "../services/email.service.js";
import logActivity from "../utils/logActivity.js";
import RefreshToken from "../models/RefreshToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";



export const signup = async (req, res) => {
    try {

        const { firstName, lastName, email, password, role } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Existing user check
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists"
            });
        }

        // ✅ User create
        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            role
        });


        await logActivity(

            req,

            user._id,

            "SIGNUP",

            "Auth",

            "User account created"

        );

        // ==============================
        // OTP Generate
        // ==============================

        const otp = generateOTP();

        // old OTP delete
        await OTP.deleteMany({ email });

        // new OTP save
        await OTP.create({
            email,
            otp,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000)
        });

        // Email send
        await sendOTPEmail(email, otp);

        // ==============================

        return res.status(201).json({
            success: true,
            message: "Account created. OTP sent to your email."
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};



export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required",
            });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }


        if (!user.isVerified) {

            return res.status(403).json({
                success: false,
                message: "Please verify your email first."
            });
        }

        if (user.isBlocked) {

            return res.status(403).json({

                success: false,

                message: "Your account has been blocked. Please contact support."

            });

        }
        const accessToken = generateToken(user._id);

        const refreshToken = generateRefreshToken(user._id);
        await RefreshToken.deleteMany({

            user: user._id

        });

        await RefreshToken.create({

            user: user._id,

            token: refreshToken,

            expiresAt: new Date(

                Date.now() + 7 * 24 * 60 * 60 * 1000

            )

        });

        await logActivity(

            req,

            user._id,

            "LOGIN",

            "Auth",

            "User logged in successfully"

        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }
};


export const verifyOTP = async (req, res) => {

    try {

        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                success: false,
                message: "Email and OTP are required"
            });
        }

        const otpRecord = await OTP.findOne({ email });

        if (!otpRecord) {
            return res.status(400).json({
                success: false,
                message: "OTP not found"
            });
        }

        if (otpRecord.expiresAt < new Date()) {

            await OTP.deleteOne({ _id: otpRecord._id });

            return res.status(400).json({
                success: false,
                message: "OTP expired"
            });

        }

        if (otpRecord.otp !== otp) {

            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });

        }

        await User.updateOne(
            { email },
            {
                isVerified: true
            }
        );

        await OTP.deleteOne({
            _id: otpRecord._id
        });

        return res.status(200).json({
            success: true,
            message: "Email verified successfully"
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};



export const resendOTP = async (req, res) => {

    try {

        const { email } = req.body;


        if (!email) {

            return res.status(400).json({
                success: false,
                message: "Email is required"
            });

        }


        const user = await User.findOne({ email });


        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }


        if (user.isVerified) {

            return res.status(400).json({
                success: false,
                message: "Email already verified"
            });

        }


        const otp = generateOTP();


        // old OTP delete

        await OTP.deleteMany({
            email
        });


        // new OTP create

        await OTP.create({

            email,
            otp,
            expiresAt: new Date(
                Date.now() + 10 * 60 * 1000
            )

        });



        await sendOTPEmail(
            email,
            otp
        );


        return res.status(200).json({

            success: true,
            message: "OTP resent successfully"

        });



    } catch (error) {

        console.log(error);


        return res.status(500).json({

            success: false,
            message: "Internal Server Error"

        });

    }

};


export const forgotPassword = async (req, res) => {

    try {

        const { email } = req.body;


        if (!email) {

            return res.status(400).json({
                success: false,
                message: "Email is required"
            });

        }


        const user = await User.findOne({ email });


        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }


        const otp = generateOTP();


        // Remove old OTP

        await OTP.deleteMany({
            email
        });



        // Create reset OTP

        await OTP.create({

            email,
            otp,
            expiresAt: new Date(
                Date.now() + 10 * 60 * 1000
            )

        });



        await sendOTPEmail(
            email,
            otp
        );

        await sendResetPasswordOTP(
            email,
            otp
        );



        return res.status(200).json({

            success: true,
            message: "Password reset OTP sent"

        });



    } catch (error) {

        console.log(error);


        return res.status(500).json({

            success: false,
            message: "Internal Server Error"

        });

    }

};


export const verifyResetOTP = async (req, res) => {

    try {

        const { email, otp } = req.body;


        if (!email || !otp) {

            return res.status(400).json({

                success: false,
                message: "Email and OTP are required"

            });

        }



        const otpRecord = await OTP.findOne({
            email
        });



        if (!otpRecord) {

            return res.status(400).json({

                success: false,
                message: "OTP not found"

            });

        }



        if (otpRecord.expiresAt < new Date()) {


            await OTP.deleteOne({
                _id: otpRecord._id
            });


            return res.status(400).json({

                success: false,
                message: "OTP expired"

            });


        }



        if (otpRecord.otp !== otp) {


            return res.status(400).json({

                success: false,
                message: "Invalid OTP"

            });


        }



        return res.status(200).json({

            success: true,
            message: "OTP verified successfully"

        });



    } catch (error) {


        console.log(error);


        return res.status(500).json({

            success: false,
            message: "Internal Server Error"

        });


    }

};


export const resetPassword = async (req, res) => {

    try {

        const {
            email,
            newPassword,
            confirmPassword
        } = req.body;



        if (!email || !newPassword || !confirmPassword) {

            return res.status(400).json({

                success: false,
                message: "All fields are required"

            });

        }



        if (newPassword !== confirmPassword) {

            return res.status(400).json({

                success: false,
                message: "Passwords do not match"

            });

        }



        const user = await User.findOne({ email });



        if (!user) {

            return res.status(404).json({

                success: false,
                message: "User not found"

            });

        }



        // Update password
        user.password = newPassword;


        await user.save();



        // Delete used OTP

        await OTP.deleteMany({
            email
        });



        return res.status(200).json({

            success: true,
            message: "Password reset successfully"

        });



    } catch (error) {


        console.log(error);



        return res.status(500).json({

            success: false,
            message: "Internal Server Error"

        });


    }

};

export const logoutUser = async (req, res) => {

    try {

        await logActivity(

            req,

            req.user._id,

            "LOGOUT",

            "Auth",

            "User logged out"

        );

        await RefreshToken.deleteMany({

            user: req.user._id

        });

        return res.status(200).json({
            success: true,
            message: "Logout successful"
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Logout failed",
            error: error.message
        });

    }

};


export const refreshAccessToken = async (req, res) => {

    try {

        const { refreshToken } = req.body;

        if (!refreshToken) {

            return res.status(401).json({

                success: false,

                message: "Refresh token required"

            });

        }

        const savedToken = await RefreshToken.findOne({

            token: refreshToken

        });

        if (!savedToken) {

            return res.status(401).json({

                success: false,

                message: "Invalid refresh token"

            });

        }

        const decoded = jwt.verify(

            refreshToken,

            process.env.JWT_REFRESH_SECRET

        );

        const accessToken = generateToken(

            decoded.id

        );

        return res.status(200).json({

            success: true,

            accessToken

        });

    } catch (error) {

        console.log(error);

        return res.status(401).json({

            success: false,

            message: "Refresh token expired"

        });

    }

};