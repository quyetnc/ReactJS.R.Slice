import { AxiosResponse } from "axios";
import {
  LoginType 
} from "./authSaga";
import { axiosInstance } from "../../config/axios.config";

type LoginData = {
  token: string;
  expiration: string;
};

type LoginResponse = {
  data: LoginData;
  isSucceeded: boolean;
}; 

const authApi = {
  login: async ({
    payload,
  }: LoginType): Promise<AxiosResponse<LoginResponse, any>> => {
    const url = "login";
    const response = (await axiosInstance.post)<LoginResponse>(
      url,
      payload.values
    );
    return response;
  } 
};

export { authApi };
