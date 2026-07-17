import PDFDocument from "pdfkit";

import fs from "fs";

import path from "path";

export const generateOfferPDF = async (

    offer,

    student,

    internship

) => {

    return new Promise((resolve, reject) => {

        const uploadDir = path.join(

            process.cwd(),

            "src",

            "uploads",

            "offers"

        );

        if (!fs.existsSync(uploadDir)) {

            fs.mkdirSync(uploadDir, {

                recursive: true

            });

        }

        const filePath = path.join(

            uploadDir,

            `Offer-${student._id}.pdf`

        );

        const doc = new PDFDocument({

            margin: 50

        });

        const stream = fs.createWriteStream(filePath);

        doc.pipe(stream);

        // Header

        doc

            .fontSize(24)

            .text("TECH MONSTER PVT. LTD.", {

                align: "center"

            });

        doc.moveDown();

        doc

            .fontSize(18)

            .text("INTERNSHIP OFFER LETTER", {

                align: "center"

            });

        doc.moveDown(2);

        doc.fontSize(12);

        doc.text(`Candidate : ${student.firstName} ${student.lastName}`);

        doc.text(`Email : ${student.email}`);

        doc.moveDown();

        doc.text(`Internship : ${internship.title}`);

        doc.text(`Joining Date : ${new Date(offer.joiningDate).toDateString()}`);

        doc.text(`Duration : ${offer.duration}`);

        doc.text(`Monthly Stipend : ₹${offer.stipend}`);

        doc.moveDown();

        doc.text(

            "Congratulations! We are pleased to offer you an internship at Tech Monster Pvt. Ltd. We believe your skills and dedication will contribute to our organization."

        );

        doc.moveDown();

        if (offer.message) {

            doc.text(`Message: ${offer.message}`);

            doc.moveDown();

        }

        doc.text("Regards,");

        doc.text("HR Team");

        doc.text("Tech Monster Pvt. Ltd.");

        doc.end();

        stream.on("finish", () => {

            resolve(filePath);

        });

        stream.on("error", reject);

    });

};