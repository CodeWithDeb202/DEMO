import Attendance from "../models/Attendance.js";

export const checkIn = async (req, res) => {

    try {

        const { internship } = req.body;

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const alreadyCheckedIn = await Attendance.findOne({

            student: req.user._id,

            internship,

            createdAt: {

                $gte: today

            }

        });

        if (alreadyCheckedIn) {

            return res.status(400).json({

                success: false,

                message: "Already checked in today"

            });

        }

        const attendance = await Attendance.create({

            student: req.user._id,

            internship,

            checkIn: new Date()

        });

        return res.status(201).json({

            success: true,

            message: "Check-in successful",

            attendance

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const checkOut = async (req, res) => {

    try {

        const attendance = await Attendance.findById(

            req.params.id

        );

        if (!attendance) {

            return res.status(404).json({

                success: false,

                message: "Attendance not found"

            });

        }

        attendance.checkOut = new Date();

        await attendance.save();

        return res.status(200).json({

            success: true,

            message: "Check-out successful",

            attendance

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getMyAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.find({

            student: req.user._id

        })

        .populate("internship", "title")

        .sort({

            createdAt: -1

        });

        return res.status(200).json({

            success: true,

            attendance

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getInternAttendance = async (req, res) => {

    try {

        const attendance = await Attendance.find({

            internship: req.params.id

        })

        .populate(

            "student",

            "firstName lastName email profileImage"

        )

        .sort({

            createdAt: -1

        });

        return res.status(200).json({

            success: true,

            attendance

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};