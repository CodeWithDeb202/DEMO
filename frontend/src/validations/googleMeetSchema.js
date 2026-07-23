import { z } from "zod";

const googleMeetSchema = z.object({

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

            "Please enter a valid Redirect URI."

        ),

    meetingType: z

        .string()

        .trim()

        .min(

            1,

            "Meeting Type is required."

        ),

    meetingSync: z

        .boolean()

        .default(true),

    autoCreateMeeting: z

        .boolean()

        .default(false),

    duration: z

        .number({

            invalid_type_error:

                "Meeting duration must be a number."

        })

        .min(

            15,

            "Minimum duration is 15 minutes."

        )

        .max(

            180,

            "Maximum duration is 180 minutes."

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

export default googleMeetSchema;