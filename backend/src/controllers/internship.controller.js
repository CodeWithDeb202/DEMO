import Internship from "../models/Internship.js";
import Company from "../models/Company.js";
import InternshipView from "../models/InternshipView.js";
import Notification from "../models/Notification.js";
import Bookmark from "../models/Bookmark.js";
import ActivityLog from "../models/ActivityLog.js";

import logActivity from "../utils/logActivity.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";

export const createInternship = asyncHandler(async (req, res) => {

    const {

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

        lastDate

    } = req.body;

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

        throw new AppError(

            "Please fill all required fields",

            400

        );

    }

    const existingCompany = await Company.findById(company);

    if (!existingCompany) {

        throw new AppError(

            "Company not found",

            404

        );

    }

    if (

        existingCompany.createdBy.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to create internships for this company",

            403

        );

    }

    if (!existingCompany.isVerified) {

        throw new AppError(

            "Company is not verified. You cannot post internships.",

            403

        );

    }

    const today = new Date();

    today.setHours(

        0,

        0,

        0,

        0

    );

    if (

        new Date(lastDate) < today

    ) {

        throw new AppError(

            "Last application date cannot be in the past",

            400

        );

    }

    let internshipSkills = [];

    if (skills) {

        internshipSkills =

            Array.isArray(skills)

                ? skills

                : skills

                    .split(",")

                    .map(

                        skill => skill.trim()

                    );

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

        skills: internshipSkills,

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

});


export const getInternships = asyncHandler(async (req, res) => {

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const {

        search,

        location,

        workMode,

        internshipType,

        experience,

        category,

        minStipend,

        maxStipend,

        duration,

        skills,

        status,

        featured,

        sort

    } = req.query;

    const query = {

        isDeleted: false

    };

    // Search

    if (search) {

        query.$or = [

            {

                title: {

                    $regex: search,

                    $options: "i"

                }

            },

            {

                description: {

                    $regex: search,

                    $options: "i"

                }

            }

        ];

    }

    // Filters

    if (location)

        query.location = {

            $regex: location,

            $options: "i"

        };

    if (workMode)

        query.workMode = workMode;

    if (internshipType)

        query.internshipType = internshipType;

    if (experience)

        query.experience = experience;

    if (category)

        query.category = category;

    if (duration)

        query.duration = duration;

    if (status)

        query.status = status;

    if (featured === "true")

        query.isFeatured = true;

    // Skills

    if (skills) {

        query.skills = {

            $in: skills.split(",")

        };

    }

    // Stipend

    if (minStipend || maxStipend) {

        query.stipend = {};

        if (minStipend)

            query.stipend.$gte = Number(minStipend);

        if (maxStipend)

            query.stipend.$lte = Number(maxStipend);

    }

    let sortOption = {

        createdAt: -1

    };

    switch (sort) {

        case "stipend_high":

            sortOption = {

                stipend: -1

            };

            break;

        case "stipend_low":

            sortOption = {

                stipend: 1

            };

            break;

        case "popular":

            sortOption = {

                applicationsCount: -1,

                views: -1

            };

            break;

        case "deadline":

            sortOption = {

                lastDate: 1

            };

            break;

        case "latest":

            sortOption = {

                createdAt: -1

            };

            break;

    }

    const [

        totalInternships,

        internships

    ] = await Promise.all([

        Internship.countDocuments(query),

        Internship.find(query)

            .populate(

                "company",

                "companyName companyLogo"

            )

            .populate(

                "createdBy",

                "firstName lastName"

            )

            .sort(sortOption)

            .skip(skip)

            .limit(limit)

    ]);

    const internship = await Internship.findById(req.params.id);

    if (!internship) {

        throw new AppError(
            "Internship not found",
            404
        );

    }

    if (
        internship.status === "Open" &&
        internship.lastDate < new Date()
    ) {

        internship.status = "Closed";

        await internship.save();

    }

    query.isDeleted = false;

    return res.status(200).json({

        success: true,

        totalInternships,

        currentPage: page,

        totalPages: Math.ceil(

            totalInternships / limit

        ),

        internships

    });

});

export const getInternshipById = asyncHandler(async (req, res) => {

    const internship = await Internship.findById(req.params.id).populate("company").populate("createdBy", "firstName lastName email");
    if (

        internship.isDeleted

    ) {

        throw new AppError(

            "Internship not found",

            404

        );

    }

    if (!internship) {

        throw new AppError(

            "Internship not found",

            404

        );

    }

    if (req.user) {

        const alreadyViewed = await InternshipView.findOne({

            internship: internship._id,

            user: req.user._id

        });

        if (!alreadyViewed) {

            internship.views += 1;

            await internship.save();

            await InternshipView.create({

                internship: internship._id,

                user: req.user._id

            });

        }

    } else {

        internship.views += 1;

        await internship.save();

    }

    if (
        internship.status === "Open" &&
        internship.lastDate < new Date()
    ) {
        throw new AppError("Application deadline has passed", 400);
        internship.status = "Closed";
        await internship.save();
    }

    internship.views += 1;

    await internship.save();

    const relatedInternships = await Internship.find({

        _id: {

            $ne: internship._id

        },

        category: internship.category,

        status: "Open"

    })

        .populate(

            "company",

            "companyName companyLogo"

        )

        .limit(5);

    return res.status(200).json({

        success: true,

        internship,

        relatedInternships

    });

});

export const updateInternship = asyncHandler(async (req, res) => {

    const internship = await Internship.findById(

        req.params.id

    );

    if (!internship) {

        throw new AppError(

            "Internship not found",

            404

        );

    }

    // Only owner can update
    if (

        internship.createdBy.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to update this internship",

            403

        );

    }

    const company = await Company.findById(

        internship.company

    );

    if (

        !company ||

        !company.isVerified

    ) {

        throw new AppError(

            "Company is not verified",

            403

        );

    }

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

        status,

        isFeatured

    } = req.body;

    // Last date validation
    if (

        lastDate &&

        new Date(lastDate) < new Date()

    ) {

        throw new AppError(

            "Last application date cannot be in the past",

            400

        );

    }

    internship.title = title ?? internship.title;

    internship.description =

        description ?? internship.description;

    internship.location =

        location ?? internship.location;

    internship.workMode =

        workMode ?? internship.workMode;

    internship.internshipType =

        internshipType ?? internship.internshipType;

    internship.stipend =

        stipend ?? internship.stipend;

    internship.duration =

        duration ?? internship.duration;

    internship.skills =

        skills ??

        internship.skills;

    internship.category =

        category ??

        internship.category;

    internship.openings =

        openings ??

        internship.openings;

    internship.experience =

        experience ??

        internship.experience;

    internship.lastDate =

        lastDate ??

        internship.lastDate;

    internship.status =

        status ??

        internship.status;

    internship.isFeatured = isFeatured ?? internship.isFeatured;

    if (

        skills &&

        typeof skills === "string"

    ) {

        internship.skills = skills

            .split(",")

            .map(

                skill => skill.trim()

            );

    }

    if (

        internship.lastDate < new Date()

    ) {

        internship.status = "Closed";

    }

    if (

        internship.openings === 0

    ) {

        internship.status = "Closed";

    }

    await internship.save();

    await logActivity(

        req,

        req.user._id,

        "UPDATE_INTERNSHIP",

        "Internship",

        `Updated internship: ${internship.title}`

    );

    return res.status(200).json({

        success: true,

        message: "Internship updated successfully",

        internship

    });

});

export const deleteInternship = asyncHandler(async (req, res) => {

    const internship = await Internship.findById(

        req.params.id

    );

    if (!internship) {

        throw new AppError(

            "Internship not found",

            404

        );

    }

    // Owner Check
    if (

        internship.createdBy.toString() !==

        req.user._id.toString()

    ) {

        throw new AppError(

            "You are not authorized to delete this internship",

            403

        );

    }

    // Applications Check
    const totalApplications = await Application.countDocuments({

        internship: internship._id

    });

    if (totalApplications > 0) {

        throw new AppError(

            "Cannot delete internship because applications already exist",

            400

        );

    }

    await Notification.deleteMany({

        internship: internship._id

    });

    await Bookmark.deleteMany({

        internship: internship._id

    });

    await ActivityLog.deleteMany({

        target: internship._id

    });

    internship.isDeleted = true;

    await internship.save();

    await logActivity(

        req,

        req.user._id,

        "DELETE_INTERNSHIP",

        "Internship",

        `Deleted internship: ${internship.title}`

    );

    return res.status(200).json({

        success: true,

        message: "Internship deleted successfully"

    });

});


export const getPopularInternships = asyncHandler(async (req, res) => {

    const limit = Number(req.query.limit) || 10;

    const internships = await Internship.find({

        status: "Open",

        isDeleted: false,

        lastDate: {

            $gte: new Date()

        },
        createdAt: {

            $gte: new Date(

                Date.now() - 30 * 24 * 60 * 60 * 1000

            )

        }

    })

        .populate(

            "company",

            "companyName companyLogo location"

        )

        .sort({

            isFeatured: -1,

            applicationsCount: -1,

            views: -1,

            createdAt: -1

        })

        .limit(limit);

    return res.status(200).json({

        success: true,

        total: internships.length,

        internships

    });

});


export const getRecommendedInternships = asyncHandler(async (req, res) => {

    // Logged in user
    const user = req.user;

    if (!user) {

        throw new AppError(

            "User not found",

            404

        );

    }

    // User skills (avoid undefined/null)
    const userSkills = user.skills || [];

    // If user has no skills, return latest featured internships
    if (userSkills.length === 0) {

        const internships = await Internship.find({

            status: "Open",

            isDeleted: false,

            lastDate: {

                $gte: new Date()

            }

        })

        .populate(

            "company",

            "companyName companyLogo location"

        )

        .sort({

            isFeatured: -1,

            createdAt: -1

        })

        .limit(10);

        return res.status(200).json({

            success: true,

            recommendedBasedOn: "latest",

            internships

        });

    }

    // Recommended internships based on skills
    const internships = await Internship.find({

        status: "Open",

        isDeleted: false,

        lastDate: {

            $gte: new Date()

        },

        skills: {

            $in: userSkills

        }

    })

    .populate(

        "company",

        "companyName companyLogo location"

    )

    .sort({

        // Featured internships first
        isFeatured: -1,

        // More applications means more trusted
        applicationsCount: -1,

        // More views means more popular
        views: -1,

        // Latest internships
        createdAt: -1

    })

    .limit(10);

    return res.status(200).json({

        success: true,

        recommendedBasedOn: "skills",

        total: internships.length,

        internships

    });

});

export const restoreInternship = asyncHandler(

    async (req, res) => {

        const internship = await Internship.findById(

            req.params.id

        );

        if (!internship) {

            throw new AppError(

                "Internship not found",

                404

            );

        }

        if (

            internship.createdBy.toString() !==

            req.user._id.toString()

        ) {

            throw new AppError(

                "Unauthorized",

                403

            );

        }

        internship.isDeleted = false;

        await internship.save();

        return res.status(200).json({

            success: true,

            message: "Internship restored successfully",

            internship

        });

    }

);