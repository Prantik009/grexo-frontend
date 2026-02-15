"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import { refreshToken } from "../api/auth.api";
import { setAccessToken } from "../api/axios";

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
                const data = await refreshToken();

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
