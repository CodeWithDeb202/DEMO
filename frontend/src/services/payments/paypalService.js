import api from "../api";

const BASE_URL="/integrations/paypal";

export const connectPayPal=async()=>{
const{data}=await api.get(`${BASE_URL}/connect`);
return data;
};

export const disconnectPayPal=async()=>{
const{data}=await api.delete(`${BASE_URL}/disconnect`);
return data;
};

export const getPayPal=async()=>{
const{data}=await api.get(BASE_URL);
return data;
};

export const refreshPayPal=async()=>{
const{data}=await api.post(`${BASE_URL}/refresh`);
return data;
};

export const savePayPalSettings=async(payload)=>{
const{data}=await api.put(`${BASE_URL}/settings`,payload);
return data;
};

export const getPayPalHistory=async()=>{
const{data}=await api.get(`${BASE_URL}/history`);
return data;
};

export const createPayPalOrder=async(payload)=>{
const{data}=await api.post(`${BASE_URL}/orders`,payload);
return data;
};

export const capturePayPalOrder=async(orderId)=>{
const{data}=await api.post(`${BASE_URL}/orders/${orderId}/capture`);
return data;
};

export const refundPayPalPayment=async(paymentId,payload)=>{
const{data}=await api.post(`${BASE_URL}/payments/${paymentId}/refund`,payload);
return data;
};

export const getPayPalPayments=async()=>{
const{data}=await api.get(`${BASE_URL}/payments`);
return data;
};