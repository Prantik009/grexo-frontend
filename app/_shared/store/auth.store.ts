// app/_shared/store/auth.store.ts

import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  setAccessToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  login: (user, token) =>
    set({
      user,
      accessToken: token,
    }),

  setAccessToken: (token) =>
    set({
      accessToken: token,
    }),

  logout: () =>
    set({
      user: null,
      accessToken: null,
    }),
}));
