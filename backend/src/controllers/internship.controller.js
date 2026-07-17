import Internship from "../models/Internship.js";
import Company from "../models/Company.js";
import logActivity from "../utils/logActivity.js";

export const createInternship = async (req, res) => {

    try {

        const {

            title,
            description,
            location,
            workMode,
            internshipType,
            stipend,
            duration,
            skills,
            category,
            openings,
            experience,
            lastDate,

        } = req.body;

        // Validation

        if (
            !title ||
            !company ||
            !description ||
            !location ||
            !workMode ||
            !internshipType ||
            !duration ||
            !lastDate
        ) {

            return res.status(400).json({

                success: false,

                message: "Please fill all required fields"

            });

        }

        // Check Company

        const existingCompany = await Company.findById(company);

        if (!existingCompany) {

            return res.status(404).json({

                success: false,

                message: "Company not found"

            });

        }

        // Owner Check

        if (
            existingCompany.createdBy.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({

                success: false,

                message: "You are not authorized"

            });

        }



        if (!company) {

            return res.status(404).json({

                success: false,

                message: "Company not found"

            });

        }

        if (!company.isVerified) {

            return res.status(403).json({

                success: false,

                message: "Company is not verified. You cannot post internships."

            });

        }

        const internship = await Internship.create({

            title,

            company,

            description,

            location,

            workMode,

            internshipType,

            stipend,

            duration,

            skills,

            category,

            openings,

            experience,

            lastDate,

            createdBy: req.user._id

        });

        await logActivity(

            req,

            req.user._id,

            "CREATE_INTERNSHIP",

            "Internship",

            `Created internship: ${internship.title}`

        );

        return res.status(201).json({

            success: true,

            message: "Internship created successfully",

            internship

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getInternships = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 10;

        const search = req.query.search || "";

        const location = req.query.location || "";

        const workMode = req.query.workMode || "";

        const skip = (page - 1) * limit;

        const query = {};

        if (search) {

            query.title = {
                $regex: search,
                $options: "i"
            };

        }

        if (location) {

            query.location = location;

        }

        if (workMode) {

            query.workMode = workMode;

        }

        const totalInternships = await Internship.countDocuments(query);

        const internships = await Internship.find(query)

            .populate("company", "companyName companyLogo")

            .populate("createdBy", "firstName lastName")

            .sort({ createdAt: -1 })

            .skip(skip)

            .limit(limit);

        return res.status(200).json({

            success: true,

            totalInternships,

            currentPage: page,

            totalPages: Math.ceil(totalInternships / limit),

            internships

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getInternshipById = async (req, res) => {

    try {

        const internship = await Internship.findById(req.params.id)

            .populate("company")

            .populate("createdBy", "firstName lastName email");

        internship.views += 1;
        await internship.save();

        if (!internship) {

            return res.status(404).json({

                success: false,

                message: "Internship not found"

            });

        }

        return res.status(200).json({

            success: true,

            internship

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const updateInternship = async (req, res) => {

    try {

        const internship = await Internship.findById(req.params.id);

        if (!internship) {

            return res.status(404).json({

                success: false,

                message: "Internship not found"

            });

        }

        if (
            internship.createdBy.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({

                success: false,

                message: "Unauthorized"

            });

        }

        Object.assign(

            internship,

            req.body

        );

        await internship.save();

        return res.status(200).json({

            success: true,

            message: "Internship updated successfully",

            internship

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const deleteInternship = async (req, res) => {

    try {

        const internship = await Internship.findById(req.params.id);

        if (!internship) {

            return res.status(404).json({

                success: false,

                message: "Internship not found"

            });

        }

        if (
            internship.createdBy.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({

                success: false,

                message: "Unauthorized"

            });

        }

        await Internship.findByIdAndDelete(req.params.id);

        return res.status(200).json({

            success: true,

            message: "Internship deleted successfully"

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};


export const getPopularInternships = async(req,res)=>{

    const internships=await Internship.find()

    .sort({

        applicationsCount:-1,

        views:-1

    })

    .limit(10);

    res.json({

        success:true,

        internships

    });

}


export const getRecommendedInternships = async (req, res) => {

    try {

        const user = req.user;

        const internships = await Internship.find({

            status: "Open",

            skills: {

                $in: user.skills || []

            },

            lastDate: {

                $gte: new Date()

            }

        })

        .populate(

            "company",

            "companyName companyLogo"

        )

        .sort({

            isFeatured: -1,

            applicationsCount: -1,

            views: -1

        })

        .limit(10);

        return res.status(200).json({

            success: true,

            internships

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};