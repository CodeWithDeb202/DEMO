const googleMeetFields = [

    {

        type: "text",

        label: "Client ID",

        name: "clientId",

        placeholder: "Google OAuth Client ID",

        required: true

    },

    {

        type: "password",

        label: "Client Secret",

        name: "clientSecret",

        placeholder: "Google OAuth Client Secret",

        required: true

    },

    {

        type: "text",

        label: "Redirect URI",

        name: "redirectUri",

        placeholder: "Redirect URI"

    },

    {

        type: "select",

        label: "Meeting Type",

        name: "meetingType",

        options: [

            {

                label: "Instant Meeting",

                value: "instant"

            },

            {

                label: "Scheduled Meeting",

                value: "scheduled"

            },

            {

                label: "Recurring Meeting",

                value: "recurring"

            }

        ]

    },

    {

        type: "switch",

        label: "Enable Meeting Sync",

        name: "meetingSync"

    },

    {

        type: "checkbox",

        label: "Automatically Create Meeting",

        name: "autoCreateMeeting"

    },

    {

        type: "number",

        label: "Default Meeting Duration",

        name: "duration",

        min: 15,

        max: 180,

        step: 15

    },

    {

        type: "textarea",

        label: "Default Meeting Description",

        name: "description",

        rows: 5,

        maxLength: 500,

        showCounter: true

    }

];

export default googleMeetFields;