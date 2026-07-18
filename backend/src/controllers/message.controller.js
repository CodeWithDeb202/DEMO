import Message from "../models/Message.js";
import Notification from "../models/Notification.js";

import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import logActivity from "../utils/logActivity.js";

import User from "../models/User.js";

import {

    getIO,

    getOnlineUsers

} from "../socket/socket.js";


export const sendMessage = asyncHandler(async (req, res) => {

    // ==========================================================
    // Request Body
    // ==========================================================

    const {

        receiver,

        message,

        file

    } = req.body;

    // ==========================================================
    // Validation
    // ==========================================================

    if (!receiver) {

        throw new AppError(

            "Receiver is required.",

            400

        );

    }

    if (!message && !file) {

        throw new AppError(

            "Message or file is required.",

            400

        );

    }

    // ==========================================================
    // Receiver Exists
    // ==========================================================

    const receiverUser = await User.findById(

        receiver

    );

    if (!receiverUser) {

        throw new AppError(

            "Receiver not found.",

            404

        );

    }

    // ==========================================================
    // Prevent Self Message
    // ==========================================================

    if (

        receiver === req.user._id.toString()

    ) {

        throw new AppError(

            "You cannot send a message to yourself.",

            400

        );

    }

    // ==========================================================
    // Create Message
    // ==========================================================

    const newMessage = await Message.create({

        sender: req.user._id,

        receiver,

        message,

        file,

        seen: false

    });

    // ==========================================================
    // Populate Sender
    // ==========================================================

    await newMessage.populate(

        "sender",

        "firstName lastName profileImage"

    );

    // ==========================================================
    // Notification
    // ==========================================================

    await Notification.create({

        user: receiver,

        title: "New Message",

        message: `${req.user.firstName} sent you a message.`,

        type: "message"

    });

    // ==========================================================
    // Socket.IO Real-time
    // ==========================================================

    const receiverSocketId = getOnlineUsers().get(

        receiver.toString()

    );

    if (

        receiverSocketId

    ) {

        getIO()

            .to(receiverSocketId)

            .emit(

                "receiveMessage",

                newMessage

            );

    }

    // ==========================================================
    // Activity Log
    // ==========================================================

    await logActivity(

        req,

        req.user._id,

        "SEND_MESSAGE",

        "Message",

        `Sent message to ${receiverUser.firstName}`

    );

    // ==========================================================
    // Response
    // ==========================================================

    return res.status(201).json({

        success: true,

        message: "Message sent successfully.",

        data: newMessage

    });

});

/* ==========================================================

Future Improvements

-------------------------------------------------------------

1. Typing Indicator

2. Read Receipt

3. Delivered Status

4. Message Reactions

5. Edit Message

6. Delete Message

7. Reply Message

8. Forward Message

9. Pin Message

10. Search Messages

11. Voice Message

12. Video Message

13. Emoji Support

14. GIF Support

15. File Preview

16. Image Compression

17. Message Encryption

18. Push Notification

19. Offline Queue

20. Redis Pub/Sub

21. WebRTC Calling

22. Group Chat

23. AI Smart Reply

24. Spam Detection

25. Profanity Filter

26. Audit Logs

========================================================== */


export const getMessages = asyncHandler(async (req, res) => {


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

    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });


});


export const markAsSeen = asyncHandler(async (req, res) => {

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

    console.log(error);

    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});