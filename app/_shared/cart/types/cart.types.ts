// app/_shared/cart/types/cart.types.ts
// Single item inside cart
export interface CartItem {
    productId: string;
    title: string;
    image: string;
    price: number;
    mrp?: number;
    quantity: number;
    pot?: string;
}

// Entire cart response from backend
export interface Cart {
    _id: string;
    user?: string;          // present if logged in
    sessionId?: string;     // present if guest
    items: CartItem[];

    totalItems: number;
    subtotal: number;
    discount?: number;
    total: number;

    createdAt: string;
    updatedAt: string;
}

export interface AddToCartPayload {
    productId: string;
    quantity: number;
    pot?: string;
}

export interface UpdateCartPayload {
    productId: string;
    quantity: number;
}

