// app/_shared/api/axios.ts

import axios from "axios";
import { refreshToken } from "./auth.api";
import { useAuthStore } from "../store/auth.store";
import { getCartSessionId } from "../utils/cartSession";
import { ENV } from "@/app/config/env";

let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

const api = axios.create({
  baseURL: `${ENV.API_URL}`,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers["x-session-id"] = getCartSessionId();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh") // 🔥 prevent self-refresh
    ) {
      originalRequest._retry = true;

      try {
        const { data } = await refreshToken();

        setAccessToken(data.accessToken);
        useAuthStore.getState().login(data.user);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

        return api(originalRequest);
      } catch {
        useAuthStore.getState().logout(); // 🔥 important
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
