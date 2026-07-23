import{z}from"zod";

const razorpaySchema=z.object({

keyId:z.string().trim().min(1,"Key ID is required."),

keySecret:z.string().trim().min(1,"Key Secret is required."),

mode:z.enum(
["test","live"],
{
required_error:"Mode is required."
}
),

enabled:z.boolean().default(true),

autoCapture:z.boolean().default(true),

minimumAmount:z.number({
invalid_type_error:"Minimum amount must be a number."
}).min(
1,
"Minimum amount should be at least ₹1."
),

description:z.string().trim().max(
300,
"Description cannot exceed 300 characters."
).optional()

});

export default razorpaySchema;