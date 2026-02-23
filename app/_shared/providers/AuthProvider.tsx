"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { refreshToken } from "../api/auth.api";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const data = await refreshToken();

        setAccessToken(data.accessToken);
        login(data.user, data.accessToken);
      } catch {
        logout();
      } finally {
        setIsReady(true);
      }
    };

    initAuth();
  }, [login, logout, setAccessToken]);

  if (!isReady) return null;

  return <>{children}</>;
}
