// components/ProductCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/app/_shared/store/cart.store";
import { AuthRequiredModal } from "@/components/auth/AuthRequiredModal";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/_shared/store/auth.store";
import { useState } from "react";

type ProductBadge = "new" | "bestseller" | "sale";

interface ProductCardProps {
    slug: string;
    imageUrl: string;
    title: string;
    price: number;
    mrp?: number;
    rating?: number;
    ratingCount?: number;
    badge?: ProductBadge;
    tags?: string[];
    certifiedStampUrl?: string;
}

const BADGE_STYLES: Record<ProductBadge, string> = {
    new: "bg-primary text-primary-foreground",
    bestseller: "bg-terracotta text-white",
    sale: "bg-destructive text-destructive-foreground",
};

export function ProductCard(props: ProductCardProps) {
    const addItem = useCartStore((s) => s.addItem);
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

    const [authOpen, setAuthOpen] = useState(false);

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            setAuthOpen(true);
            return;
        }

        addItem({
            id: props.slug,
            title: props.title,
            image: props.imageUrl,
            price: props.price,
            mrp: props.mrp ?? props.price,
            quantity: 1,
        });
    };

    return (
        <>
            <div className="group rounded-xl border bg-background hover:shadow-md transition-shadow">
                {/* Image + link */}
                <Link href={`/plants/${props.slug}`}>
                    <div className="relative overflow-hidden rounded-t-xl bg-secondary">
                        <div className="aspect-square relative">
                            <Image
                                src={props.imageUrl}
                                alt={props.title}
                                fill
                                className="object-contain transition-transform group-hover:scale-105"
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

                {/* Content */}
                <div className="p-3 space-y-2">
                    <h3 className="line-clamp-2 text-sm font-medium">
                        {props.title}
                    </h3>

                    {props.tags?.length ? (
                        <div className="flex gap-1 flex-wrap">
                            {props.tags.slice(0, 2).map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-secondary px-2 py-0.5 text-[10px]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">₹{props.price}</span>
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
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>

            <AuthRequiredModal
                open={authOpen}
                onClose={() => setAuthOpen(false)}
            />
        </>
    );
}
