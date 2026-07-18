import Notification from "../models/Notification.js";

import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";

export const getMyNotifications = asyncHandler(async (req, res) => {

    const notifications = await Notification.find({

        user: req.user._id

    })

        .sort({

            createdAt: -1

        });

    const unreadCount = await Notification.countDocuments({

        user: req.user._id,

        isRead: false

    });

    return res.status(200).json({

        success: true,

        unreadCount,

        notifications

    });

    console.log(error);

    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});

export const markAsRead = asyncHandler(async (req, res) => {


    const notification = await Notification.findById(

        req.params.id

    );

    if (!notification) {

        throw new AppError(

            "Notification not found",

            404

        );
    }

    if (

        notification.user.toString() !== req.user._id.toString()

    ) {

        throw new AppError(

            "Access denied",

            403

        );

    }

    notification.isRead = true;

    await notification.save();

    return res.status(200).json({

        success: true,

        message: "Notification marked as read",

        notification

    });

    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});


export const markAllAsRead = asyncHandler( async (req, res) => {

        await Notification.updateMany(

            {

                user: req.user._id,

                isRead: false

            },

            {

                $set: {

                    isRead: true

                }

            }

        );

        return res.status(200).json({

            success: true,

            message: "All notifications marked as read"

        });

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

});


export const deleteNotification = asyncHandler( async (req, res) => {

        const notification = await Notification.findById(

            req.params.id

        );

        if (!notification) {

            throw new AppError(
                "Notification not found",
                404
            )
        }

        if (

            notification.user.toString() !== req.user._id.toString()

        ) {

            throw new AppError(
                "Access denied",
                403
            )

        }

        await Notification.findByIdAndDelete(

            req.params.id

        );

        return res.status(200).json({

            success: true,

            message: "Notification deleted successfully"

        });

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

});