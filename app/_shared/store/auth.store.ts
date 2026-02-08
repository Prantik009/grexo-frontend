// app/_shared/store/auth.store.ts
import { create } from "zustand";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;

    shouldRedirectAfterLogin: boolean;

    login: (user: User, redirect?: boolean) => void;
    devLogin: (redirect?: boolean) => void;
    logout: () => void;
}


export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    shouldRedirectAfterLogin: false,

    login: (user, redirect = true) =>
        set({
            user,
            isAuthenticated: true,
            shouldRedirectAfterLogin: redirect,
        }),

    devLogin: (redirect = false) =>
        set({
            isAuthenticated: true,
            shouldRedirectAfterLogin: redirect,
            user: {
                id: "dev_001",
                name: "Prantik",
                email: "testUser@gmail.com",
            },
        }),

    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
            shouldRedirectAfterLogin: false,
        }),
}));

