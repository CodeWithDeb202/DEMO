import ActivityLog from "../models/ActivityLog.js";


export const getMyActivities = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;

        const totalActivities = await ActivityLog.countDocuments({

            user: req.user._id

        });

        const activities = await ActivityLog.find({

            user: req.user._id

        })

        .sort({

            createdAt: -1

        })

        .skip((page - 1) * limit)

        .limit(limit);

        return res.status(200).json({

            success: true,

            currentPage: page,

            totalPages: Math.ceil(totalActivities / limit),

            totalActivities,

            activities

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getAllActivities = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 20;

        const totalActivities = await ActivityLog.countDocuments();

        const activities = await ActivityLog.find()

            .populate(

                "user",

                "firstName lastName email role"

            )

            .sort({

                createdAt: -1

            })

            .skip((page - 1) * limit)

            .limit(limit);

        return res.status(200).json({

            success: true,

            currentPage: page,

            totalPages: Math.ceil(totalActivities / limit),

            totalActivities,

            activities

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};