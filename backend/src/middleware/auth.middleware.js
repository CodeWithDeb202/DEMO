import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";

export const protect = asyncHandler(async (req, res, next) => {

    let token;

    if (

        req.headers.authorization &&

        req.headers.authorization.startsWith("Bearer")

    ) {

        token = req.headers.authorization.split(" ")[1];

    }

    if (!token) {

        throw new AppError(

            "Not authorized. No token provided.",

            401

        );

    }

    const decoded = jwt.verify(

        token,

        process.env.JWT_SECRET

    );

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {

        throw new AppError(

            "User not found",

            404

        );

    }

    req.user = user;

    next();

});

const authMiddleware = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {

            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });

        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        if (!decoded.id) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        if (user.isBlocked) {

            return res.status(403).json({

                success: false,

                message: "Your account has been blocked."

            });

        }

        req.user = user;

        next();

    } catch (error) {

        console.error(error);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });

    }

};

export default authMiddleware;