import Message from "../models/Message.js";
import Notification from "../models/Notification.js";

import User from "../models/User.js";

import {

    getIO,

    getOnlineUsers

} from "../socket/socket.js";


export const sendMessage = async (req, res) => {

    try {

        const {

            receiver,

            message,

            file

        } = req.body;

        const newMessage = await Message.create({

            sender: req.user._id,

            receiver,

            message,

            file

        });

        await Notification.create({

            user: receiver,

            title: "New Message",

            message: "You received a new message.",

            type: "message"

        });

        const receiverSocketId = getOnlineUsers().get(receiver);

        if (receiverSocketId) {

            getIO().to(receiverSocketId).emit(

                "receiveMessage",

                newMessage

            );

        }

        return res.status(201).json({

            success: true,

            message: "Message sent",

            data: newMessage

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getMessages = async (req, res) => {

    try {

        const {

            userId

        } = req.params;

        const messages = await Message.find({

            $or: [

                {

                    sender: req.user._id,

                    receiver: userId

                },

                {

                    sender: userId,

                    receiver: req.user._id

                }

            ]

        })

            .sort({

                createdAt: 1

            });

        return res.status(200).json({

            success: true,

            messages

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const markAsSeen = async (req, res) => {

    try {

        await Message.updateMany(

            {

                sender: req.params.userId,

                receiver: req.user._id,

                seen: false

            },

            {

                seen: true

            }

        );

        return res.status(200).json({

            success: true,

            message: "Messages marked as seen"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};