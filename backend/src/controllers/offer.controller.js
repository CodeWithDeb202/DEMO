import Offer from "../models/Offer.js";
import Application from "../models/Application.js";
import User from "../models/User.js";
import Notification from "../models/Notification.js";
import { sendOfferEmail } from "../services/email.service.js";
import { generateOfferPDF } from "../utils/generateOfferPDF.js";
import { sendOfferLetter } from "../services/offerPdf.service.js";
import logActivity from "../utils/logActivity.js";


export const createOffer = async (req, res) => {

    try {

        const {

            application,
            joiningDate,
            stipend,
            duration,
            message

        } = req.body;

        const applicationData = await Application.findById(application)
            .populate("internship");

        if (!applicationData) {

            return res.status(404).json({

                success: false,
                message: "Application not found"

            });

        }

        const offer = await Offer.create({

            internship: applicationData.internship._id,

            application,

            student: applicationData.applicant,

            employer: req.user._id,

            joiningDate,

            stipend,

            duration,

            message

        });

        await logActivity(

            req,

            req.user._id,

            "CREATE_OFFER",

            "Offer",

            "Offer letter generated"

        );


        await Notification.create({

            user: student._id,

            title: "Offer Letter Received",

            message: "Congratulations! You have received an offer letter.",

            type: "offer"

        });

        const student = await User.findById(

            applicationData.applicant

        );

        if (student) {

            const pdfPath = await generateOfferPDF(

                offer,

                student,

                applicationData.internship

            );

            await sendOfferLetter(

                student.email,

                pdfPath

            );

            await sendOfferEmail(

                student.email,

                offer

            );

        }

        return res.status(201).json({

            success: true,

            message: "Offer created successfully",

            offer

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getStudentOffers = async (req, res) => {

    try {

        const offers = await Offer.find({

            student: req.user._id

        })

            .populate("internship", "title")

            .sort({

                createdAt: -1

            });

        return res.status(200).json({

            success: true,

            offers

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getEmployerOffers = async (req, res) => {

    try {

        const offers = await Offer.find({

            employer: req.user._id

        })

            .populate(

                "student",

                "firstName lastName email"

            )

            .populate(

                "internship",

                "title"

            );

        return res.status(200).json({

            success: true,

            offers

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const acceptOffer = async (req, res) => {

    try {

        const offer = await Offer.findById(req.params.id);

        if (!offer) {

            return res.status(404).json({

                success: false,

                message: "Offer not found"

            });

        }

        offer.status = "Accepted";

        await offer.save();

        return res.status(200).json({

            success: true,

            message: "Offer accepted",

            offer

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const rejectOffer = async (req, res) => {

    try {

        const offer = await Offer.findById(req.params.id);

        if (!offer) {

            return res.status(404).json({

                success: false,

                message: "Offer not found"

            });

        }

        offer.status = "Rejected";

        await offer.save();

        return res.status(200).json({

            success: true,

            message: "Offer rejected",

            offer

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};