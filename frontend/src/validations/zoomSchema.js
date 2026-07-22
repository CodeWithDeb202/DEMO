import { z } from "zod";

import {

    SYNC_MODE,
    MEETING_TYPES

} from "../constants";

// ==========================================
// Zoom Settings Validation Schema
// ==========================================

const zoomSchema = z.object({

    duration: z

        .number({

            required_error: "Meeting duration is required."

        })

        .min(

            15,

            "Minimum duration is 15 minutes."

        )

        .max(

            240,

            "Maximum duration is 240 minutes."

        ),

    syncMode: z.enum(

        [

            SYNC_MODE.ATS_TO_ZOOM,

            SYNC_MODE.ZOOM_TO_ATS,

            SYNC_MODE.BOTH

        ],

        {

            required_error: "Select a sync mode."

        }

    ),

    meetingType: z.enum(

        [

            MEETING_TYPES[0].value,

            MEETING_TYPES[1].value,

            MEETING_TYPES[2].value

        ]

    ),

    autoCreateMeeting:

        z.boolean(),

    waitingRoom:

        z.boolean(),

    joinBeforeHost:

        z.boolean(),

    cloudRecording:

        z.boolean(),

    hostVideo:

        z.boolean(),

    participantVideo:

        z.boolean(),

    authentication:

        z.string()

        .min(

            1,

            "Authentication is required."

        ),

    audio:

        z.string()

        .min(

            1,

            "Audio option is required."

        )

});

// ==========================================
// Validation Helper
// ==========================================

export const validateZoomSettings = (

    data

) => {

    return zoomSchema.safeParse(

        data

    );

};

export default zoomSchema;