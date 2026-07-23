const razorpayFields = [

    {

        type: "text",

        label: "Key ID",

        name: "keyId",

        placeholder: "rzp_test_xxxxxxxxx",

        required: true

    },

    {

        type: "password",

        label: "Key Secret",

        name: "keySecret",

        placeholder: "Enter Razorpay Secret Key",

        required: true

    },

    {

        type: "select",

        label: "Mode",

        name: "mode",

        options: [

            {

                label: "Test",

                value: "test"

            },

            {

                label: "Live",

                value: "live"

            }

        ]

    },

    {

        type: "switch",

        label: "Enable Razorpay",

        name: "enabled"

    },

    {

        type: "checkbox",

        label: "Capture Payment Automatically",

        name: "autoCapture"

    },

    {

        type: "number",

        label: "Minimum Payment Amount",

        name: "minimumAmount",

        min: 1,

        step: 1

    },

    {

        type: "textarea",

        label: "Payment Description",

        name: "description",

        rows: 4,

        maxLength: 300,

        showCounter: true

    }

];

export default razorpayFields;