// app/_shared/cart/hooks/useCart.ts

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchCart,
    addToCart,
    updateCartItem,
    removeCartItem,
} from "../api/cart.api";
import { cartKeys } from "../keys/cart.keys";
import { AddToCartPayload, UpdateCartPayload } from "../types/cart.types";

export const useCart = () => {
    const queryClient = useQueryClient();

    // ---------------- FETCH CART ----------------
    const cartQuery = useQuery({
        queryKey: cartKeys.all,
        queryFn: fetchCart,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    // ---------------- ADD ITEM ----------------
    const addMutation = useMutation({
        mutationFn: (payload: AddToCartPayload) => addToCart(payload),
        onSuccess: (data) => {
            queryClient.setQueryData(cartKeys.all, data);
        },
    });

    // ---------------- UPDATE ITEM ----------------
    const updateMutation = useMutation({
        mutationFn: (payload: UpdateCartPayload) => updateCartItem(payload),
        onSuccess: (data) => {
            queryClient.setQueryData(cartKeys.all, data);
        },
    });

    // ---------------- REMOVE ITEM ----------------
    const removeMutation = useMutation({
        mutationFn: (productId: string) => removeCartItem(productId),
        onSuccess: (data) => {
            queryClient.setQueryData(cartKeys.all, data);
        },
    });

    return {
        cart: cartQuery.data,
        isLoading: cartQuery.isLoading,
        isFetching: cartQuery.isFetching,

        addToCart: addMutation.mutate,
        isAdding: addMutation.isPending,

        updateItem: updateMutation.mutate,
        isUpdating: updateMutation.isPending,

        removeItem: removeMutation.mutate,
        isRemoving: removeMutation.isPending,
    };
};
