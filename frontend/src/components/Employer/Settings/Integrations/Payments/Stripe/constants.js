const stripeFields=[

{

type:"text",

label:"Publishable Key",

name:"publishableKey",

placeholder:"pk_test_xxxxxxxxx",

required:true

},

{

type:"password",

label:"Secret Key",

name:"secretKey",

placeholder:"sk_test_xxxxxxxxx",

required:true

},

{

type:"password",

label:"Webhook Secret",

name:"webhookSecret",

placeholder:"whsec_xxxxxxxxx"

},

{

type:"select",

label:"Mode",

name:"mode",

options:[

{

label:"Test",

value:"test"

},

{

label:"Live",

value:"live"

}

]

},

{

type:"text",

label:"Currency",

name:"currency",

placeholder:"INR"

},

{

type:"switch",

label:"Enable Stripe",

name:"enabled"

},

{

type:"checkbox",

label:"Automatic Payment Capture",

name:"automaticCapture"

},

{

type:"number",

label:"Minimum Amount",

name:"minimumAmount",

min:1,

step:1

},

{

type:"textarea",

label:"Payment Description",

name:"description",

rows:4,

maxLength:300,

showCounter:true

}

];

export default stripeFields;