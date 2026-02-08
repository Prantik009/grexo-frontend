// app/_shared/store/cart.store.ts
import { create } from "zustand";

export interface CartItem {
    id: string;
    title: string;
    image: string;
    price: number;
    mrp: number;
    quantity: number;
    pot?: string;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQty: (id: string, qty: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addItem: (item) =>
        set((state) => ({
            items: [...state.items, item],
        })),

    removeItem: (id) =>
        set((state) => ({
            items: state.items.filter((i) => i.id !== id),
        })),

    updateQty: (id, qty) =>
        set((state) => ({
            items: state.items.map((i) =>
                i.id === id ? { ...i, quantity: Math.max(1, qty) } : i
            ),
        })),
}));
