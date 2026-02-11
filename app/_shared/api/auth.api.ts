import api from "./axios";

export const registerUser = (data: {
    name: string;
    email: string;
    password: string;
}) => api.post("/auth/register", data);

export const loginUser = (data: {
    email: string;
    password: string;
}) => api.post("/auth/login", data);

export const refreshToken = () =>
    api.post("/auth/refresh");

export const logoutUser = () =>
    api.post("/auth/logout");
