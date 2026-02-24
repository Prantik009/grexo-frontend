// app/_shared/hooks/useAuthGuard.ts
"use client";

import { useState } from "react";
import { useAuthStore } from "../store/auth.store";

export function useAuthGuard() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const isAuthenticated = !!accessToken;

  const [authOpen, setAuthOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const requireAuth = (onSuccess: () => void) => {
    if (!isAuthenticated) {
      setPendingAction(() => onSuccess);
      setAuthOpen(true);
      return;
    }
    onSuccess();
  };

  const handleLoginSuccess = () => {
    setAuthOpen(false);
    pendingAction?.();
    setPendingAction(null);
  };

  return {
    authOpen,
    setAuthOpen,
    requireAuth,
    handleLoginSuccess,
  };
}
