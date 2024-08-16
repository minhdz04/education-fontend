// services/userService.ts
import {
  LoginRequestPayload,
  RegisterRequestPayload,
} from "../../redux/auth/actions";
import axiosInstance from "../../utils/axiosInstance";
import { AxiosResponse } from "axios";

interface LoginResponse {
  _id: string;
  name: string;
  email: string;
  username: string;
  bio: string;
  profilePic: string;
  token: string;
}

export const loginUser = async (
  payload: LoginRequestPayload
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const respone = await axiosInstance.post("/api/users/login", payload);
    return respone;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const registerUser = async (
  payload: RegisterRequestPayload
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    return await axiosInstance.post("/api/users/signup", payload);
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem("token");
};
