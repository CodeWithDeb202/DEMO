import { z } from "zod";

const googleCalendarSchema = z.object({

    clientId: z

        .string()

        .trim()

        .min(

            1,

            "Client ID is required."

        ),

    clientSecret: z

        .string()

        .trim()

        .min(

            1,

            "Client Secret is required."

        ),

    redirectUri: z

        .string()

        .trim()

        .url(

            "Enter a valid Redirect URI."

        ),

    calendar: z

        .string()

        .trim()

        .min(

            1,

            "Please select a calendar."

        ),

    calendarSync: z

        .boolean()

        .default(true),

    autoCreate: z

        .boolean()

        .default(false),

    reminder: z

        .number({

            invalid_type_error: "Reminder must be a number."

        })

        .min(

            5,

            "Minimum reminder is 5 minutes."

        )

        .max(

            120,

            "Maximum reminder is 120 minutes."

        ),

    description: z

        .string()

        .trim()

        .max(

            500,

            "Description cannot exceed 500 characters."

        )

        .optional()

});

export default googleCalendarSchema;