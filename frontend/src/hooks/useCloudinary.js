import{useCallback,useEffect,useState}from"react";

import{
connectCloudinary,
disconnectCloudinary,
getCloudinary,
refreshCloudinary,
saveCloudinarySettings,
getCloudinaryHistory,
uploadImage,
uploadResume,
uploadCompanyLogo,
deleteAsset
}from"../services/cloudinaryService";

function useCloudinary(){

const[integration,setIntegration]=useState(null);
const[history,setHistory]=useState([]);
const[loading,setLoading]=useState(false);

const loadIntegration=useCallback(async()=>{
try{
setLoading(true);
const response=await getCloudinary();
setIntegration(response.data);
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
},[]);

const loadHistory=useCallback(async()=>{
try{
const response=await getCloudinaryHistory();
setHistory(response.data||[]);
}catch(error){
console.error(error);
}
},[]);

useEffect(()=>{
loadIntegration();
loadHistory();
},[loadIntegration,loadHistory]);

const connect=async()=>{
try{
setLoading(true);
await connectCloudinary();
await loadIntegration();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const disconnect=async()=>{
try{
setLoading(true);
await disconnectCloudinary();
await loadIntegration();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const refresh=async()=>{
try{
setLoading(true);
await refreshCloudinary();
await loadIntegration();
await loadHistory();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const saveSettings=async(settings)=>{
try{
setLoading(true);
await saveCloudinarySettings(settings);
await loadIntegration();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const uploadProfileImage=async(formData)=>{
try{
setLoading(true);
const response=await uploadImage(formData);
await loadHistory();
return response;
}catch(error){
console.error(error);
throw error;
}finally{
setLoading(false);
}
};

const uploadUserResume=async(formData)=>{
try{
setLoading(true);
const response=await uploadResume(formData);
await loadHistory();
return response;
}catch(error){
console.error(error);
throw error;
}finally{
setLoading(false);
}
};

const uploadLogo=async(formData)=>{
try{
setLoading(true);
const response=await uploadCompanyLogo(formData);
await loadHistory();
return response;
}catch(error){
console.error(error);
throw error;
}finally{
setLoading(false);
}
};

const removeAsset=async(publicId)=>{
try{
setLoading(true);
await deleteAsset(publicId);
await loadHistory();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

return{
integration,
history,
loading,
connect,
disconnect,
refresh,
saveSettings,
uploadProfileImage,
uploadUserResume,
uploadLogo,
removeAsset
};

}

export default useCloudinary;