import{useCallback,useEffect,useState}from"react";

import{
connectSMTP,
disconnectSMTP,
getSMTP,
refreshSMTP,
saveSMTPSettings,
getSMTPHistory,
sendTestEmail,
verifySMTPConnection
}from"../services/smtpService";

function useSMTP(){

const[integration,setIntegration]=useState(null);
const[history,setHistory]=useState([]);
const[loading,setLoading]=useState(false);

const loadIntegration=useCallback(async()=>{
try{
setLoading(true);
const response=await getSMTP();
setIntegration(response.data);
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
},[]);

const loadHistory=useCallback(async()=>{
try{
const response=await getSMTPHistory();
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
await connectSMTP();
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
await disconnectSMTP();
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
await refreshSMTP();
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
await saveSMTPSettings(settings);
await loadIntegration();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const verifyConnection=async()=>{
try{
setLoading(true);
const response=await verifySMTPConnection();
return response;
}catch(error){
console.error(error);
throw error;
}finally{
setLoading(false);
}
};

const testEmail=async(payload)=>{
try{
setLoading(true);
const response=await sendTestEmail(payload);
await loadHistory();
return response;
}catch(error){
console.error(error);
throw error;
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
verifyConnection,
testEmail
};

}

export default useSMTP;