import { userApi } from "features/user/userApi";
import { TIME_EXPIRE_TOKEN } from "utils/constants";
import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";

export const BASE_URL = 'http://localhost:5000/';
// window?.__RUNTIME_CONFIG__?.REACT_APP_API_URL
//   ? window.__RUNTIME_CONFIG__.REACT_APP_API_URL
//   : process.env.REACT_APP_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 180000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Expose-Headers": "x-pagination, Access-Token, Uid",
  },
});

axiosInstance.interceptors.request.use(
  async (request: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem("token");
 
 
    if (request.headers === undefined) {
      request.headers = {};
    }

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (request.url === "User/refresh-token") {
      return request;
    }
    //Handle Check Token Expired Here
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    //Handle response here. May be handle pagination
    return response.data;
  },
  async (error) => {
    const { status } = error.response;
    switch (status) {
      case 400:
        // TODO: Define what to do on 400
        break;
      case 401:
        // TODO: Define what to do on 401
        break;
      case 403:
        // TODO: Define what to do on 403
        break;
      case 408:
        // TODO: Define what to do on 408
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);
