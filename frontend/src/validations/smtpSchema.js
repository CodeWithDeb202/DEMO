import{z}from"zod";

const smtpSchema=z.object({

host:z.string().trim().min(
1,
"SMTP Host is required."
),

port:z.number({
invalid_type_error:"Port must be a number."
}).min(
1,
"Invalid SMTP Port."
).max(
65535,
"Invalid SMTP Port."
),

email:z.string().trim().email(
"Enter a valid email."
),

password:z.string().trim().min(
1,
"Password is required."
),

secure:z.enum(
["tls","ssl","none"],
{
required_error:"Encryption is required."
}
),

enabled:z.boolean().default(true),

testEmail:z.boolean().default(false),

senderName:z.string().trim().max(
100,
"Sender Name cannot exceed 100 characters."
).optional()

});

export default smtpSchema;