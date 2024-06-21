import axios from 'axios';
import { getCookie } from '../utils/cookie';
import { refreshToken } from './api';

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["X-CSRFToken"] = getCookie("csrftoken");

export const instance = axios.create();
export const instanceWithToken = axios.create();

instanceWithToken.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("access_token");
    if (!accessToken) {
      return;
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },

  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

instanceWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.error(error);
    const originalRequest = error.config;
    if (error.response.status === 401) {
      const token = getCookie("refresh_token");
      await refreshToken(token);
      return instanceWithToken(originalRequest);
    }
    return Promise.reject(error);
  }
);