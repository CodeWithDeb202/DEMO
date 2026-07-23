const paypalFields=[

{

type:"text",

label:"Client ID",

name:"clientId",

placeholder:"Enter PayPal Client ID",

required:true

},

{

type:"password",

label:"Client Secret",

name:"clientSecret",

placeholder:"Enter PayPal Client Secret",

required:true

},

{

type:"select",

label:"Mode",

name:"mode",

options:[

{

label:"Sandbox",

value:"sandbox"

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

placeholder:"USD"

},

{

type:"switch",

label:"Enable PayPal",

name:"enabled"

},

{

type:"checkbox",

label:"Auto Capture Payment",

name:"autoCapture"

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

export default paypalFields;