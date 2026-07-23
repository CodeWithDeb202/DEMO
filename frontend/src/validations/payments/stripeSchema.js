import{z}from"zod";

const stripeSchema=z.object({

publishableKey:z.string().trim().min(
1,
"Publishable Key is required."
),

secretKey:z.string().trim().min(
1,
"Secret Key is required."
),

webhookSecret:z.string().trim().optional(),

mode:z.enum(
["test","live"],
{
required_error:"Mode is required."
}
),

enabled:z.boolean().default(true),

automaticCapture:z.boolean().default(true),

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

export default stripeSchema;