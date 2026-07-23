import api from "../api";

const BASE_URL="/integrations/razorpay";

export const connectRazorpay=async()=>{
const{data}=await api.get(`${BASE_URL}/connect`);
return data;
};

export const disconnectRazorpay=async()=>{
const{data}=await api.delete(`${BASE_URL}/disconnect`);
return data;
};

export const getRazorpay=async()=>{
const{data}=await api.get(BASE_URL);
return data;
};

export const refreshRazorpay=async()=>{
const{data}=await api.post(`${BASE_URL}/refresh`);
return data;
};

export const saveRazorpaySettings=async(payload)=>{
const{data}=await api.put(`${BASE_URL}/settings`,payload);
return data;
};

export const getRazorpayHistory=async()=>{
const{data}=await api.get(`${BASE_URL}/history`);
return data;
};

export const createRazorpayOrder=async(payload)=>{
const{data}=await api.post(`${BASE_URL}/orders`,payload);
return data;
};

export const verifyRazorpayPayment=async(payload)=>{
const{data}=await api.post(`${BASE_URL}/verify`,payload);
return data;
};

export const getRazorpayPayments=async()=>{
const{data}=await api.get(`${BASE_URL}/payments`);
return data;
};

export const refundRazorpayPayment=async(paymentId,payload)=>{
const{data}=await api.post(`${BASE_URL}/payments/${paymentId}/refund`,payload);
return data;
};