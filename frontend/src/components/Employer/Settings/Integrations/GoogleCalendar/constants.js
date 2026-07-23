const googleCalendarFields = [

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
        placeholder: "Google OAuth Client Secret"
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

                label:"Primary",

                value:"primary"

            },

            {

                label:"Work",

                value:"work"

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
        label: "Auto Create Events",
        name: "autoCreate"
    },

    {
        type: "number",
        label: "Reminder (Minutes)",
        name: "reminder",
        min:5,
        max:120,
        step:5
    },

    {
        type:"textarea",
        label:"Default Event Description",
        name:"description"
    }

];

export default googleCalendarFields;