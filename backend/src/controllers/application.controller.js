import Application from "../models/Application.js";
import Internship from "../models/Internship.js";
import Notification from "../models/Notification.js";
import { sendApplicationStatusEmail } from "../services/email.service.js";

export const applyInternship = async (req, res) => {

    try {

        const {

            internship,

            resume,

            coverLetter

        } = req.body;

        if (!internship) {

            return res.status(400).json({

                success: false,

                message: "Internship is required"

            });

        }

        const internshipExists = await Internship.findById(internship);

        if (!internshipExists) {

            return res.status(404).json({

                success: false,

                message: "Internship not found"

            });

        }

        const alreadyApplied = await Application.findOne({

            internship,

            applicant: req.user._id

        });

        if (alreadyApplied) {

            return res.status(409).json({

                success: false,

                message: "You already applied"

            });

        }

        const application = await Application.create({

            internship,

            applicant: req.user._id,

            resume: req.user.resume,

            coverLetter,

        });

        await Notification.create({

            receiver: internshipExists.createdBy,

            title: "New Internship Application",

            message: `${req.user.firstName} applied for ${internshipExists.title}`

        });

        return res.status(201).json({

            success: true,

            message: "Application submitted successfully",

            application

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getMyApplications = async (req, res) => {

    try {

        const applications = await Application.find({

            applicant: req.user._id

        })

            .populate({

                path: "internship",

                populate: {

                    path: "company"

                }

            })

            .sort({

                createdAt: -1

            });

        return res.status(200).json({

            success: true,

            applications

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getInternshipApplications = async (req, res) => {

    try {

        const applications = await Application.find({

            internship: req.params.id

        })

            .populate(

                "applicant",

                "firstName lastName email profileImage"

            )

            .sort({

                createdAt: -1

            });

        return res.status(200).json({

            success: true,

            applications

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const updateApplicationStatus = async (req, res) => {

    try {

        const {

            status

        } = req.body;

        const application = await Application.findById(

            req.params.id

        );

        if (!application) {

            return res.status(404).json({

                success: false,

                message: "Application not found"

            });

        }

        application.status = status;

        await application.save();

        const student = await User.findById(application.applicant);
        if (student) {
            await sendApplicationStatusEmail(
                student.email,
                status
            );
        }

        await Notification.create({

            receiver: application.applicant,

            title: "Application Updated",

            message: `Your application has been ${status}`

        });

        return res.status(200).json({

            success: true,

            message: "Status updated",

            application

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const deleteApplication = async (req, res) => {

    try {

        const application = await Application.findById(

            req.params.id

        );

        if (!application) {

            return res.status(404).json({

                success: false,

                message: "Application not found"

            });

        }

        if (

            application.applicant.toString() !==

            req.user._id.toString()

        ) {

            return res.status(403).json({

                success: false,

                message: "Unauthorized"

            });

        }

        await Application.findByIdAndDelete(

            req.params.id

        );

        return res.status(200).json({

            success: true,

            message: "Application deleted"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};