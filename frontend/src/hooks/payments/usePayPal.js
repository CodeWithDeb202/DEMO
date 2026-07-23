import{useCallback,useEffect,useState}from"react";

import{
connectPayPal,
disconnectPayPal,
getPayPal,
refreshPayPal,
savePayPalSettings,
getPayPalHistory,
getPayPalPayments,
createPayPalOrder,
capturePayPalOrder,
refundPayPalPayment
}from"../services/paypalService";

function usePayPal(){

const[integration,setIntegration]=useState(null);
const[history,setHistory]=useState([]);
const[payments,setPayments]=useState([]);
const[loading,setLoading]=useState(false);

const loadIntegration=useCallback(async()=>{
try{
setLoading(true);
const response=await getPayPal();
setIntegration(response.data);
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
},[]);

const loadHistory=useCallback(async()=>{
try{
const response=await getPayPalHistory();
setHistory(response.data||[]);
}catch(error){
console.error(error);
}
},[]);

const loadPayments=useCallback(async()=>{
try{
const response=await getPayPalPayments();
setPayments(response.data||[]);
}catch(error){
console.error(error);
}
},[]);

useEffect(()=>{
loadIntegration();
loadHistory();
loadPayments();
},[loadIntegration,loadHistory,loadPayments]);

const connect=async()=>{
try{
setLoading(true);
await connectPayPal();
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
await disconnectPayPal();
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
await refreshPayPal();
await loadIntegration();
await loadHistory();
await loadPayments();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const saveSettings=async(settings)=>{
try{
setLoading(true);
await savePayPalSettings(settings);
await loadIntegration();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const createOrder=async(payload)=>{
try{
setLoading(true);
const response=await createPayPalOrder(payload);
await loadPayments();
await loadHistory();
return response;
}catch(error){
console.error(error);
throw error;
}finally{
setLoading(false);
}
};

const captureOrder=async(orderId)=>{
try{
setLoading(true);
const response=await capturePayPalOrder(orderId);
await loadPayments();
await loadHistory();
return response;
}catch(error){
console.error(error);
throw error;
}finally{
setLoading(false);
}
};

const refundPayment=async(paymentId,payload)=>{
try{
setLoading(true);
await refundPayPalPayment(paymentId,payload);
await loadPayments();
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
payments,
loading,
connect,
disconnect,
refresh,
saveSettings,
createOrder,
captureOrder,
refundPayment
};

}

export default usePayPal;