const smtpFields=[

{

type:"text",

label:"SMTP Host",

name:"host",

placeholder:"smtp.gmail.com",

required:true

},

{

type:"number",

label:"SMTP Port",

name:"port",

placeholder:"587",

required:true

},

{

type:"text",

label:"Email",

name:"email",

placeholder:"company@gmail.com",

required:true

},

{

type:"password",

label:"Password / App Password",

name:"password",

placeholder:"Enter Password",

required:true

},

{

type:"select",

label:"Encryption",

name:"secure",

options:[

{

label:"TLS",

value:"tls"

},

{

label:"SSL",

value:"ssl"

},

{

label:"None",

value:"none"

}

]

},

{

type:"switch",

label:"Enable SMTP",

name:"enabled"

},

{

type:"checkbox",

label:"Send Test Email",

name:"testEmail"

},

{

type:"text",

label:"Sender Name",

name:"senderName",

placeholder:"Tech Monster Pvt Ltd"

}

];

export default smtpFields;