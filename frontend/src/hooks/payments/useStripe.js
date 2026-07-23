import{useCallback,useEffect,useState}from"react";
import{
connectStripe,
disconnectStripe,
getStripe,
refreshStripe,
saveStripeSettings,
getStripeHistory,
getStripePayments,
createStripePaymentIntent,
verifyStripePayment,
refundStripePayment
}from"../services/stripeService";

function useStripe(){

const[integration,setIntegration]=useState(null);
const[history,setHistory]=useState([]);
const[payments,setPayments]=useState([]);
const[loading,setLoading]=useState(false);

const loadIntegration=useCallback(async()=>{
try{
setLoading(true);
const response=await getStripe();
setIntegration(response.data);
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
},[]);

const loadHistory=useCallback(async()=>{
try{
const response=await getStripeHistory();
setHistory(response.data||[]);
}catch(error){
console.error(error);
}
},[]);

const loadPayments=useCallback(async()=>{
try{
const response=await getStripePayments();
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
await connectStripe();
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
await disconnectStripe();
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
await refreshStripe();
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
await saveStripeSettings(settings);
await loadIntegration();
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

const createPaymentIntent=async(payload)=>{
try{
setLoading(true);
const response=await createStripePaymentIntent(payload);
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
const response=await verifyStripePayment(payload);
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
await refundStripePayment(paymentId,payload);
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
createPaymentIntent,
verifyPayment,
refundPayment
};

}

export default useStripe;