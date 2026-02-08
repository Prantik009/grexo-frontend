// app/_shared/hooks/useAuthGuard.ts
"use client";

import { useState } from "react";
import { useAuthStore } from "../store/auth.store";

export function useAuthGuard() {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const [authOpen, setAuthOpen] = useState(false);

  const requireAuth = (onSuccess: () => void) => {
    if (!isAuthenticated) {
      setAuthOpen(true);
      return;
    }
    onSuccess();
  };

  return {
    authOpen,
    setAuthOpen,
    requireAuth,
  };
}
