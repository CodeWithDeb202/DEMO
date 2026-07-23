import{useCallback,useEffect,useState}from"react";
import{
connectRazorpay,
disconnectRazorpay,
getRazorpay,
refreshRazorpay,
saveRazorpaySettings,
getRazorpayHistory,
getRazorpayPayments,
createRazorpayOrder,
verifyRazorpayPayment,
refundRazorpayPayment
}from"../services/razorpayService";

function useRazorpay(){

const[integration,setIntegration]=useState(null);
const[history,setHistory]=useState([]);
const[payments,setPayments]=useState([]);
const[loading,setLoading]=useState(false);

const loadIntegration=useCallback(async()=>{
try{
setLoading(true);
const response=await getRazorpay();
setIntegration(response.data);
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
},[]);

const loadHistory=useCallback(async()=>{
try{
const response=await getRazorpayHistory();
setHistory(response.data||[]);
}catch(error){
console.error(error);
}
},[]);

const loadPayments=useCallback(async()=>{
try{
const response=await getRazorpayPayments();
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
await connectRazorpay();
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
await disconnectRazorpay();
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
await refreshRazorpay();
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
await saveRazorpaySettings(settings);
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
const response=await createRazorpayOrder(payload);
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

const verifyPayment=async(payload)=>{
try{
setLoading(true);
const response=await verifyRazorpayPayment(payload);
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
await refundRazorpayPayment(paymentId,payload);
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
verifyPayment,
refundPayment
};

}

export default useRazorpay;