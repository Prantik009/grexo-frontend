// app/_shared/api/auth.api.ts
import api from "./axios";

export const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const res = await api.post("/auth/register", data);
    return res.data;
};

export const loginUser = async (data: {
    email: string;
    password: string;
}) => {
    const res = await api.post("/auth/login", data);
    return res.data;
};

export const refreshToken = async () => {
    const res = await api.post("/auth/refresh");
    return res.data;
};

export const logoutUser = async () => {
    const res = await api.post("/auth/logout");
    return res.data;
};



export const forgotPassword = async (email: string) => {
    const res = await api.post("/auth/forgot-password", { email });
    return res.data;
};

export const resetPassword = async ({
    token,
    password,
}: {
    token: string;
    password: string;
}) => {
    const res = await api.post("/auth/reset-password", {
        token,
        password,
    });
    return res.data;
};

export const resendVerification = async (email: string) => {
    const res = await api.post("/auth/resend-verification", { email });
    return res.data;
};
