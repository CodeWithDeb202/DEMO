import Company from "../models/Company.js";
import uploadToCloudinary from "../utils/uploadCloudinary.js";
import logActivity from "../utils/logActivity.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";

export const createCompany = asyncHandler(async (req, res) => {

    const {

        companyName,
        companyEmail,
        companyWebsite,
        industry,
        companySize,
        foundedYear,
        location,
        description

    } = req.body;

    if (!companyName || !companyEmail) {

        throw new AppError(

            "Company name and email are required",

            400

        );

    }

    const existingCompany = await Company.findOne({

        companyEmail

    });

    if (existingCompany) {

        throw new AppError(

            "Company already exists",

            409

        );

    }

    let companyLogo = "";

    if (req.file) {

        companyLogo = await uploadToCloudinary(

            req.file,

            "tech-monster/company-logo"

        );

    }

    const company = await Company.create({

        companyName,
        companyEmail,
        companyWebsite,
        companyLogo,
        industry,
        companySize,
        foundedYear,
        location,
        description,
        createdBy: req.user._id

    });

    await logActivity(

        req,

        req.user._id,

        "CREATE_COMPANY",

        "Company",

        `Created company: ${company.companyName}`

    );

    return res.status(201).json({

        success: true,

        message: "Company created successfully",

        company

    });

});

export const getCompanies = asyncHandler(async (req, res) => {



    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    const query = {

        companyName: {

            $regex: search,

            $options: "i"

        }

    };

    const totalCompanies = await Company.countDocuments(query);

    const companies = await Company.find(query)

        .populate("createdBy", "firstName lastName email profileImage")

        .sort({ createdAt: -1 })

        .skip(skip)

        .limit(limit);

    return res.status(200).json({

        success: true,

        totalCompanies,

        currentPage: page,

        totalPages: Math.ceil(totalCompanies / limit),

        companies

    });





    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});

export const getCompanyById = asyncHandler(async (req, res) => {



    const { id } = req.params;

    const company = await Company.findById(id)
        .populate(
            "createdBy",
            "firstName lastName email profileImage"
        );

    if (!company) {

        throw new AppError(

            "Company not found",

            404

        );

    }

    return res.status(200).json({

        success: true,

        company

    });

    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});

export const updateCompany = asyncHandler(async (req, res) => {

    const { id } = req.params;

    const {
        companyName,
        companyEmail,
        companyWebsite,
        companyLogo,
        industry,
        companySize,
        foundedYear,
        location,
        description
    } = req.body;

    const company = await Company.findById(id);

    if (!company) {
        throw new AppError(
            "Company not found",
            404
        );
    }

    // Owner Check
    if (company.createdBy.toString() !== req.user._id.toString()) {
        throw new AppError(

            "You are not authorized to update this company",

            403

        );
    }

    // Duplicate Email Check
    if (
        companyEmail &&
        companyEmail !== company.companyEmail
    ) {

        const existingCompany = await Company.findOne({
            companyEmail
        });

        if (existingCompany) {
            throw new AppError(

                "Company email already exists",

                409

            );
        }

    }

    company.companyName = companyName ?? company.companyName;
    company.companyEmail = companyEmail ?? company.companyEmail;
    company.companyWebsite = companyWebsite ?? company.companyWebsite;
    company.companyLogo = companyLogo ?? company.companyLogo;
    company.industry = industry ?? company.industry;
    company.companySize = companySize ?? company.companySize;
    company.foundedYear = foundedYear ?? company.foundedYear;
    company.location = location ?? company.location;
    company.description = description ?? company.description;

    await company.save();

    return res.status(200).json({
        success: true,
        message: "Company updated successfully",
        company
    });


    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

export const deleteCompany = asyncHandler(async (req, res) => {


    const { id } = req.params;

    const company = await Company.findById(id);

    if (!company) {

        throw new AppError(

            "Company not found",

            404

        );

    }

    // Owner Check
    if (company.createdBy.toString() !== req.user._id.toString()) {

        throw new AppError(

            "You are not authorized to delete this company",

            403

        );

    }

    await Company.findByIdAndDelete(id);

    return res.status(200).json({

        success: true,

        message: "Company deleted successfully"

    });

    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});