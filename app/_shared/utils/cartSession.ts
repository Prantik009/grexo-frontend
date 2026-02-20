// app/_shared/utils/cartSession.ts
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "cartSessionId";

export const getCartSessionId = () => {
    if (typeof window === "undefined") return null;
    let sessionId = localStorage.getItem(STORAGE_KEY);

    if (!sessionId) {
        sessionId = uuidv4();
        localStorage.setItem(STORAGE_KEY, sessionId);
    }

    return sessionId;
};
