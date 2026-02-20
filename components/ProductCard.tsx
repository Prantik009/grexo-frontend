"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/app/_shared/cart/hooks/useCart";

type ProductBadge = "new" | "bestseller" | "sale";

interface ProductCardProps {
    id: string;
    slug: string;
    department: string;
    category: string;
    imageUrl: string;
    title: string;
    price: number;
    mrp?: number;
    badge?: ProductBadge;
    tags?: string[];
}

const BADGE_STYLES: Record<ProductBadge, string> = {
    new: "bg-primary text-primary-foreground",
    bestseller: "bg-terracotta text-white",
    sale: "bg-destructive text-destructive-foreground",
};

export function ProductCard(props: ProductCardProps) {
    const { addToCart, isAdding } = useCart();

    const handleAddToCart = () => {
        addToCart({
            productId: props.id,
            quantity: 1,
        });
    };

    const productUrl = `/shop/${props.department}/${props.category}/${props.slug}`;

    return (
        <div className="group rounded-xl border bg-background hover:shadow-md transition-shadow">
            <Link href={productUrl}>
                <div className="relative overflow-hidden rounded-t-xl bg-secondary">
                    <div className="aspect-square relative">
                        <Image
                            src={props.imageUrl}
                            alt={props.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                        />
                    </div>

                    {props.badge && (
                        <div
                            className={cn(
                                "absolute left-2 top-0 h-14 w-8 flex items-center justify-center rounded-b-lg",
                                BADGE_STYLES[props.badge]
                            )}
                        >
                            <span className="writing-mode-vertical text-[10px] font-bold uppercase">
                                {props.badge.slice(0, 4)}
                            </span>
                        </div>
                    )}
                </div>
            </Link>

            <div className="p-3 space-y-2">
                <h3 className="line-clamp-2 text-sm font-medium">
                    {props.title}
                </h3>

                {/* Category label */}
                {props.department && props.category && (
                    <p className="text-xs text-muted-foreground capitalize">
                        {props.department} / {props.category}
                    </p>
                )}

                <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">
                        ₹{props.price}
                    </span>
                    {props.mrp && (
                        <span className="text-xs text-muted-foreground line-through">
                            ₹{props.mrp}
                        </span>
                    )}
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    disabled={isAdding}
                    onClick={handleAddToCart}
                >
                    {isAdding ? "Adding..." : "Add to cart"}
                </Button>
            </div>
        </div>
    );
}