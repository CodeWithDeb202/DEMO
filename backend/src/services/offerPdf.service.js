import { transporter } from "./email.service.js";

export const sendOfferLetter = async (

    email,

    pdfPath

) => {

    try {

        await transporter.sendMail({

            from: `"Tech Monster" <${process.env.EMAIL_USER}>`,

            to: email,

            subject: "Internship Offer Letter",

            text: "Congratulations! Your internship offer letter is attached with this email.",

            attachments: [

                {

                    filename: "Internship-Offer-Letter.pdf",

                    path: pdfPath

                }

            ]

        });

        console.log("✅ Offer Letter PDF Sent");

    } catch (error) {

        console.log("❌ Offer Letter Email Error:", error.message);

        throw error;

    }

};