import Certificate from "../models/Certificate.js";
import Offer from "../models/Offer.js";
import User from "../models/User.js";
import Notification from "../models/Notification.js";

import { generateCertificatePDF } from "../utils/generateCertificatePDF.js";
import { sendCertificateEmail } from "../services/email.service.js";
import logActivity from "../utils/logActivity.js";

export const issueCertificate = async (req, res) => {

    try {

        const { offerId } = req.body;

        const offer = await Offer.findById(offerId)
            .populate("student")
            .populate("internship");

        if (!offer) {

            return res.status(404).json({

                success: false,

                message: "Offer not found"

            });

        }

        const certificateNumber =
            "TM-" + Date.now();

        const certificate = await Certificate.create({

            student: offer.student._id,

            internship: offer.internship._id,

            employer: req.user._id,

            offer: offer._id,

            certificateNumber

        });

        await logActivity(

            req,

            req.user._id,

            "ISSUE_CERTIFICATE",

            "Certificate",

            "Certificate issued"

        );


        await Notification.create({

            user: student._id,

            title: "Certificate Issued",

            message: "Your internship completion certificate has been issued.",

            type: "certificate"

        });



        const pdfUrl = await generateCertificatePDF(

            certificate,

            offer.student,

            offer.internship

        );

        certificate.pdfUrl = pdfUrl;

        await certificate.save();

        await sendCertificateEmail(

            offer.student.email,

            pdfUrl

        );

        return res.status(201).json({

            success: true,

            message: "Certificate issued successfully",

            certificate

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getMyCertificates = async (req, res) => {

    try {

        const certificates = await Certificate.find({

            student: req.user._id

        })

            .populate(

                "internship",

                "title"

            )

            .sort({

                createdAt: -1

            });

        return res.status(200).json({

            success: true,

            certificates

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getEmployerCertificates = async (req, res) => {

    try {

        const certificates = await Certificate.find({

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

            certificates

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const downloadCertificate = async (req, res) => {

    try {

        const certificate = await Certificate.findById(

            req.params.id

        );

        if (!certificate) {

            return res.status(404).json({

                success: false,

                message: "Certificate not found"

            });

        }

        return res.download(

            certificate.pdfUrl

        );

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};