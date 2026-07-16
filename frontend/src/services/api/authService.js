import api from "./client";
import { API } from "./endpoints";

export const login = (data) => {
  return api.post(API.AUTH.LOGIN, data);
};

export const signup = (data) => {
  return api.post(API.AUTH.SIGNUP, data);
};

export const logout = () => {
  return api.post(API.AUTH.LOGOUT);
};

export const forgotPassword = (email) => {
  return api.post(API.AUTH.FORGOT_PASSWORD, { email });
};

export const verifyOTP = (data) => {
  return api.post(API.AUTH.VERIFY_OTP, data);
};

export const resetPassword = (data) => {
  return api.post(API.AUTH.RESET_PASSWORD, data);
};