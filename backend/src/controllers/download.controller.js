import path from "path";
import fs from "fs";

export const downloadOfferLetter = async (req, res) => {

    try {

        const filePath = path.join(

            process.cwd(),

            "src",

            "uploads",

            "offers",

            `Offer-${req.user._id}.pdf`

        );

        if (!fs.existsSync(filePath)) {

            return res.status(404).json({

                success: false,

                message: "Offer letter not found"

            });

        }

        return res.download(filePath);

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};