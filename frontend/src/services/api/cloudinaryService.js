import api from "../api";

const BASE_URL="/integrations/cloudinary";

export const connectCloudinary=async()=>{
const{data}=await api.get(`${BASE_URL}/connect`);
return data;
};

export const disconnectCloudinary=async()=>{
const{data}=await api.delete(`${BASE_URL}/disconnect`);
return data;
};

export const getCloudinary=async()=>{
const{data}=await api.get(BASE_URL);
return data;
};

export const refreshCloudinary=async()=>{
const{data}=await api.post(`${BASE_URL}/refresh`);
return data;
};

export const saveCloudinarySettings=async(payload)=>{
const{data}=await api.put(`${BASE_URL}/settings`,payload);
return data;
};

export const getCloudinaryHistory=async()=>{
const{data}=await api.get(`${BASE_URL}/history`);
return data;
};

export const uploadImage=async(formData)=>{
const{data}=await api.post(`${BASE_URL}/upload/image`,formData,{
headers:{
"Content-Type":"multipart/form-data"
}
});
return data;
};

export const uploadResume=async(formData)=>{
const{data}=await api.post(`${BASE_URL}/upload/resume`,formData,{
headers:{
"Content-Type":"multipart/form-data"
}
});
return data;
};

export const uploadCompanyLogo=async(formData)=>{
const{data}=await api.post(`${BASE_URL}/upload/company-logo`,formData,{
headers:{
"Content-Type":"multipart/form-data"
}
});
return data;
};

export const deleteAsset=async(publicId)=>{
const{data}=await api.delete(`${BASE_URL}/assets/${publicId}`);
return data;
};