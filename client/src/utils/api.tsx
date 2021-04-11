import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const apiConfig: AxiosRequestConfig = {
  withCredentials: false,
  timeout: 30000,
  baseURL: "http://localhost:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
    common: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
};

const api: AxiosInstance = axios.create(apiConfig);

export default api;
