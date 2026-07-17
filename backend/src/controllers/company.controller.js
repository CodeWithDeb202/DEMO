import Company from "../models/Company.js";
import uploadToCloudinary from "../utils/uploadCloudinary.js";

export const createCompany = async (req, res) => {

    try {

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

        // Validation
        if (!companyName || !companyEmail) {

            return res.status(400).json({

                success: false,

                message: "Company name and email are required"

            });

        }

        // Duplicate Email Check
        const existingCompany = await Company.findOne({
            companyEmail
        });

        if (existingCompany) {

            return res.status(409).json({

                success: false,

                message: "Company already exists"

            });

        }

        
        let companyLogo = "";
        if (req.file) {
            companyLogo = await uploadToCloudinary(
                req.file,
                "tech-monster/company-logo"
            );
        }

        // Create Company
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

        return res.status(201).json({

            success: true,

            message: "Company created successfully",

            company

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getCompanies = async (req, res) => {

    try {

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

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const getCompanyById = async (req, res) => {

    try {

        const { id } = req.params;

        const company = await Company.findById(id)
            .populate(
                "createdBy",
                "firstName lastName email profileImage"
            );

        if (!company) {

            return res.status(404).json({

                success: false,

                message: "Company not found"

            });

        }

        return res.status(200).json({

            success: true,

            company

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};

export const updateCompany = async (req, res) => {
    try {

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
            return res.status(404).json({
                success: false,
                message: "Company not found"
            });
        }

        // Owner Check
        if (company.createdBy.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this company"
            });
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
                return res.status(409).json({
                    success: false,
                    message: "Company email already exists"
                });
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

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

export const deleteCompany = async (req, res) => {

    try {

        const { id } = req.params;

        const company = await Company.findById(id);

        if (!company) {

            return res.status(404).json({

                success: false,

                message: "Company not found"

            });

        }

        // Owner Check
        if (company.createdBy.toString() !== req.user._id.toString()) {

            return res.status(403).json({

                success: false,

                message: "You are not authorized to delete this company"

            });

        }

        await Company.findByIdAndDelete(id);

        return res.status(200).json({

            success: true,

            message: "Company deleted successfully"

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error"

        });

    }

};