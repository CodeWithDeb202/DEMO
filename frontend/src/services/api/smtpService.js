import api from "../api";

const BASE_URL="/integrations/smtp";

export const connectSMTP=async()=>{
const{data}=await api.get(`${BASE_URL}/connect`);
return data;
};

export const disconnectSMTP=async()=>{
const{data}=await api.delete(`${BASE_URL}/disconnect`);
return data;
};

export const getSMTP=async()=>{
const{data}=await api.get(BASE_URL);
return data;
};

export const refreshSMTP=async()=>{
const{data}=await api.post(`${BASE_URL}/refresh`);
return data;
};

export const saveSMTPSettings=async(payload)=>{
const{data}=await api.put(`${BASE_URL}/settings`,payload);
return data;
};

export const getSMTPHistory=async()=>{
const{data}=await api.get(`${BASE_URL}/history`);
return data;
};

export const sendTestEmail=async(payload)=>{
const{data}=await api.post(`${BASE_URL}/test-email`,payload);
return data;
};

export const verifySMTPConnection=async()=>{
const{data}=await api.get(`${BASE_URL}/verify`);
return data;
};