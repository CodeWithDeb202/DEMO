import api from "../api";

const BASE_URL="/integrations/stripe";

export const connectStripe=async()=>{
const{data}=await api.get(`${BASE_URL}/connect`);
return data;
};

export const disconnectStripe=async()=>{
const{data}=await api.delete(`${BASE_URL}/disconnect`);
return data;
};

export const getStripe=async()=>{
const{data}=await api.get(BASE_URL);
return data;
};

export const refreshStripe=async()=>{
const{data}=await api.post(`${BASE_URL}/refresh`);
return data;
};

export const saveStripeSettings=async(payload)=>{
const{data}=await api.put(`${BASE_URL}/settings`,payload);
return data;
};

export const getStripeHistory=async()=>{
const{data}=await api.get(`${BASE_URL}/history`);
return data;
};

export const createStripePaymentIntent=async(payload)=>{
const{data}=await api.post(`${BASE_URL}/payment-intents`,payload);
return data;
};

export const verifyStripePayment=async(payload)=>{
const{data}=await api.post(`${BASE_URL}/verify`,payload);
return data;
};

export const getStripePayments=async()=>{
const{data}=await api.get(`${BASE_URL}/payments`);
return data;
};

export const refundStripePayment=async(paymentId,payload)=>{
const{data}=await api.post(`${BASE_URL}/payments/${paymentId}/refund`,payload);
return data;
};