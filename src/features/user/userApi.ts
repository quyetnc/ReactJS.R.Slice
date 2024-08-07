import { axiosInstance } from "config/axios.config";
import { CurrentUser } from "features/user/userSlice";
import { AxiosResponse } from "axios";
import { IBaseResponse } from "models/base.model";
import { IUser } from "models/user.model";
import { TChangePassword } from "./userSlice";

type User = {
  name: string;
  id: string;
  age: number;
};

type getAlluserResponse = {
  data: User[];
};
type actionType = {
  type: string;
  _payload: any;
};

type getCurrentUserResponse = {
  data: CurrentUser;
  isSucceeded: boolean;
};

const userApi = {
  getAlluser: async ({
    _payload,
  }: actionType): Promise<AxiosResponse<getAlluserResponse, any>> => {
    const url = "user";
    const response = (await axiosInstance.get)<getAlluserResponse>(url);
    return response;
  },
  getCurrentUser: async (): Promise<
    AxiosResponse<getCurrentUserResponse, any>
  > => {
    const url = "User/Get-CurrentUser";
    const response = (await axiosInstance.get)<getCurrentUserResponse>(url);
    return response;
  },
  getUserProfile: async (): Promise<AxiosResponse<IBaseResponse<any>>> => {
    const url = "User/Get-UserProfile";
    const response = (await axiosInstance.get)<IBaseResponse<any>>(url);
    return response;
  },
  getListUser: async (): Promise<AxiosResponse<CurrentUser[]>> => {
    const url = `list-user`;
    const response = await axiosInstance.get<CurrentUser[]>(url);
    return response;
  },
  changePassword: async ({
    payload,
  }: TChangePassword): Promise<AxiosResponse<any, any>> => {
    const url = "User/change-password";
    const response = await axiosInstance.post(url, payload);
    return response;
  },
  resetPassword: async (idAccount: any): Promise<AxiosResponse<any, any>> => {
    const url = `User/reset-password?userId=${idAccount}`;
    const response = await axiosInstance.post(url);
    return response;
  },
  refreshToken: async (payload: { token: string; refreshToken: string }) => {
    const url = "User/refresh-token";
    const response = await axiosInstance.post(url, {
      token: payload.token,
      refreshToken: payload.refreshToken,
    });
    return response;
  },
};

export { userApi };
