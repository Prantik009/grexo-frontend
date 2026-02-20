"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/app/_shared/cart/hooks/useCart";

interface Props {
    productId: string;
    disabled?: boolean;
}

export function AddToCartButton({ productId, disabled }: Props) {
    const { addToCart, isAdding } = useCart();

    const handleClick = () => {
        addToCart({
            productId,
            quantity: 1,
        });
    };

    return (
        <Button
            size="lg"
            className="w-full md:w-auto"
            onClick={handleClick}
            disabled={isAdding || disabled}
        >
            {isAdding ? "Adding..." : "Add to cart"}
        </Button>
    );
}