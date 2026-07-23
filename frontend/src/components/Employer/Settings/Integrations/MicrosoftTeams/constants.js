const microsoftTeamsFields = [

    {

        type: "text",

        label: "Client ID",

        name: "clientId",

        placeholder: "Microsoft Azure Client ID",

        required: true

    },

    {

        type: "password",

        label: "Client Secret",

        name: "clientSecret",

        placeholder: "Microsoft Azure Client Secret",

        required: true

    },

    {

        type: "text",

        label: "Tenant ID",

        name: "tenantId",

        placeholder: "Microsoft Tenant ID",

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

        label: "Enable Teams Sync",

        name: "meetingSync"

    },

    {

        type: "checkbox",

        label: "Automatically Create Teams Meeting",

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

export default microsoftTeamsFields;