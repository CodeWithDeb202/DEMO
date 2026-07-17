import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {

    try {

        const notifications = await Notification.find({

            receiver: req.user._id

        }).sort({

            createdAt: -1

        });

        return res.status(200).json({

            success: true,

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

        notification.isRead = true;

        await notification.save();

        return res.status(200).json({

            success: true,

            message: "Notification marked as read"

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

        await Notification.findByIdAndDelete(

            req.params.id

        );

        return res.status(200).json({

            success: true,

            message: "Notification deleted"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};