import { z } from "zod";

export const createInternshipSchema = z.object({

    title: z.string()
        .trim()
        .min(5, "Internship title must be at least 5 characters")
        .max(100, "Internship title cannot exceed 100 characters"),

    category: z.string()
        .min(1, "Category is required"),

    internshipType: z.string()
        .min(1, "Internship type is required"),

    workMode: z.string()
        .min(1, "Work mode is required"),

    duration: z.string()
        .min(1, "Duration is required"),

    openings: z.coerce.number()
        .min(1, "At least one opening is required"),

    experience: z.string()
        .min(1, "Experience is required"),

    deadline: z.string()
        .min(1, "Application deadline is required")
        .refine(value => new Date(value) > new Date(), "Deadline must be a future date"),

    country: z.string().optional(),

    state: z.string().optional(),

    city: z.string().optional(),

    pinCode: z.string().optional(),

    address: z.string().optional(),

    mapUrl: z.string()
        .optional()
        .or(z.literal("")),

    isPaid: z.string(),

    stipend: z.union([
        z.string(),
        z.number()
    ]).optional(),

    currency: z.string().optional(),

    salaryType: z.string().optional(),

    performanceBonus: z.union([
        z.string(),
        z.number()
    ]).optional(),

    joiningBonus: z.union([
        z.string(),
        z.number()
    ]).optional(),

    perks: z.string().optional(),

    skills: z.array(
        z.string().trim()
    )
        .min(1, "Add at least one skill"),

    responsibilities: z.array(
        z.string().trim()
    )
        .min(1, "Add at least one responsibility"),

    requirements: z.array(
        z.string().trim()
    )
        .min(1, "Add at least one requirement"),

    benefits: z.array(
        z.string().trim()
    ).optional(),

    visibility: z.string(),

    status: z.string(),

    featured: z.boolean(),

    allowRemote: z.boolean(),

    autoShortlist: z.boolean(),

    emailNotification: z.boolean(),

    certificate: z.boolean(),

    ppo: z.boolean()

}).superRefine((data, ctx) => {

    if (data.workMode !== "Remote") {

        if (!data.country) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["country"],
                message: "Country is required"
            });

        }

        if (!data.state) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["state"],
                message: "State is required"
            });

        }

        if (!data.city) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["city"],
                message: "City is required"
            });

        }

        if (!data.address) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["address"],
                message: "Office address is required"
            });

        }

    }

    if (data.isPaid === "true") {

        if (!data.stipend || Number(data.stipend) <= 0) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["stipend"],
                message: "Enter a valid stipend"
            });

        }

        if (!data.currency) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["currency"],
                message: "Currency is required"
            });

        }

        if (!data.salaryType) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["salaryType"],
                message: "Salary type is required"
            });

        }

    }

});