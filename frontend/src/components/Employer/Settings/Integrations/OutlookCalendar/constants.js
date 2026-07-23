const outlookCalendarFields = [

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

        label: "Default Calendar",

        name: "calendar",

        options: [

            {

                label: "Primary",

                value: "primary"

            },

            {

                label: "Work",

                value: "work"

            },

            {

                label: "Personal",

                value: "personal"

            }

        ]

    },

    {

        type: "switch",

        label: "Enable Calendar Sync",

        name: "calendarSync"

    },

    {

        type: "checkbox",

        label: "Automatically Create Events",

        name: "autoCreateEvent"

    },

    {

        type: "number",

        label: "Reminder (Minutes)",

        name: "reminder",

        min: 5,

        max: 120,

        step: 5

    },

    {

        type: "textarea",

        label: "Default Event Description",

        name: "description",

        rows: 5,

        maxLength: 500,

        showCounter: true

    }

];

export default outlookCalendarFields;