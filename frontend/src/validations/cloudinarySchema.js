import{z}from"zod";

const cloudinarySchema=z.object({

cloudName:z.string().trim().min(
1,
"Cloud Name is required."
),

apiKey:z.string().trim().min(
1,
"API Key is required."
),

apiSecret:z.string().trim().min(
1,
"API Secret is required."
),

uploadPreset:z.string().trim().optional(),

folder:z.string().trim().default("job-portal"),

enabled:z.boolean().default(true),

autoOptimize:z.boolean().default(true),

autoCompress:z.boolean().default(true)

});

export default cloudinarySchema;