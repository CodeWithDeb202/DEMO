const cloudinaryFields=[

{

type:"text",

label:"Cloud Name",

name:"cloudName",

placeholder:"Enter Cloud Name",

required:true

},

{

type:"text",

label:"API Key",

name:"apiKey",

placeholder:"Enter API Key",

required:true

},

{

type:"password",

label:"API Secret",

name:"apiSecret",

placeholder:"Enter API Secret",

required:true

},

{

type:"text",

label:"Upload Preset",

name:"uploadPreset",

placeholder:"Unsigned Upload Preset"

},

{

type:"text",

label:"Folder",

name:"folder",

placeholder:"job-portal"

},

{

type:"switch",

label:"Enable Cloudinary",

name:"enabled"

},

{

type:"checkbox",

label:"Auto Optimize Images",

name:"autoOptimize"

},

{

type:"checkbox",

label:"Auto Compress Images",

name:"autoCompress"

}

];

export default cloudinaryFields;