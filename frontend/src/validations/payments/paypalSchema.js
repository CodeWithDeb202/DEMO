import{z}from"zod";

const paypalSchema=z.object({

clientId:z.string().trim().min(
1,
"Client ID is required."
),

clientSecret:z.string().trim().min(
1,
"Client Secret is required."
),

mode:z.enum(
["sandbox","live"],
{
required_error:"Mode is required."
}
),

enabled:z.boolean().default(true),

autoCapture:z.boolean().default(true),

currency:z.string().trim().min(
1,
"Currency is required."
),

minimumAmount:z.number({
invalid_type_error:"Minimum amount must be a number."
}).min(
1,
"Minimum amount should be at least 1."
),

description:z.string().trim().max(
300,
"Description cannot exceed 300 characters."
).optional()

});

export default paypalSchema;