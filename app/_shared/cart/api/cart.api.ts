// app/_shared/cart/api/cart.api.ts
import api from "@/app/_shared/api/axios";
import {
    Cart,
    AddToCartPayload,
    UpdateCartPayload,
} from "../types/cart.types";

// GET CART
export const fetchCart = async (): Promise<Cart> => {
    const { data } = await api.get<Cart>("/cart");
    return data;
};

// ADD ITEM
export const addToCart = async (
    payload: AddToCartPayload
): Promise<Cart> => {
    const { data } = await api.post<Cart>("/cart/items", payload);
    return data;
};

// UPDATE ITEM QUANTITY
export const updateCartItem = async (
    payload: UpdateCartPayload
): Promise<Cart> => {
    const { data } = await api.patch<Cart>(
        `/cart/items/${payload.productId}`,
        { quantity: payload.quantity }
    );
    return data;
};

// REMOVE ITEM
export const removeCartItem = async (
    productId: string
): Promise<Cart> => {
    const { data } = await api.delete<Cart>(
        `/cart/items/${productId}`
    );
    return data;
};
