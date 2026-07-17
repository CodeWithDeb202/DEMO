import cloudinary from "../config/cloudinary.js";


const uploadToCloudinary = async(file)=>{
    const result = await cloudinary.uploader.upload(
        `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
        {
            folder:"tech-monster"
        }
    );
    return result.secure_url;
};
export default uploadToCloudinary;