"use client";

import { useEffect } from "react";
import { refreshToken } from "../api/auth.api";
import { setAccessToken } from "../api/axios";
import { useAuthStore } from "../store/auth.store";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const login = useAuthStore((s) => s.login);
    const logout = useAuthStore((s) => s.logout);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const { data } = await refreshToken();

                setAccessToken(data.accessToken);
                login(data.user);
            } catch {
                logout();
            }
        };

        initAuth();
    }, [login, logout]);

    return <>{children}</>;
}
