import Notification from "../models/Notification.js";

export const getMyNotifications = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const markAsRead = async (req, res) => {

    try {

        const notification = await Notification.findById(

            req.params.id

        );

        if (!notification) {

            return res.status(404).json({

                success: false,

                message: "Notification not found"

            });

        }

        if (

            notification.user.toString() !== req.user._id.toString()

        ) {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }

        notification.isRead = true;

        await notification.save();

        return res.status(200).json({

            success: true,

            message: "Notification marked as read",

            notification

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const markAllAsRead = async (req, res) => {

    try {

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

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const deleteNotification = async (req, res) => {

    try {

        const notification = await Notification.findById(

            req.params.id

        );

        if (!notification) {

            return res.status(404).json({

                success: false,

                message: "Notification not found"

            });

        }

        if (

            notification.user.toString() !== req.user._id.toString()

        ) {

            return res.status(403).json({

                success: false,

                message: "Access denied"

            });

        }

        await Notification.findByIdAndDelete(

            req.params.id

        );

        return res.status(200).json({

            success: true,

            message: "Notification deleted successfully"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};