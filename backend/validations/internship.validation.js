import { z } from "zod";

export const internshipSchema = z.object({

    title: z.string().min(3),

    description: z.string().min(20),

    location: z.string(),

    workMode: z.enum([

        "Remote",

        "Onsite",

        "Hybrid"

    ]),

    internshipType: z.enum([

        "Full Time",

        "Part Time",

        "Internship"

    ]),

    stipend: z.number().min(0),

    duration: z.string(),

    lastDate: z.string()

});