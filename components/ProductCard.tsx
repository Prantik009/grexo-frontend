import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProductBadge = "new" | "bestseller" | "sale"

interface ProductCardProps {
    slug: string
    imageUrl: string
    title: string

    price: number
    mrp?: number

    rating?: number
    ratingCount?: number

    badge?: ProductBadge
    tags?: string[]

    certifiedStampUrl?: string
}

const BADGE_STYLES: Record<ProductBadge, string> = {
    new: "bg-primary text-foreground",
    bestseller: "bg-terracotta text-white",
    sale: "bg-destructive text-destructive-foreground",
}

export function ProductCard({
    slug,
    imageUrl,
    title,
    price,
    mrp,
    rating,
    ratingCount,
    badge,
    tags = [],
    certifiedStampUrl,
}: ProductCardProps) {
    return (
        <Link
            href={`/products/${slug}`}
            className="
        group block rounded-xl border bg-background
        transition-shadow hover:shadow-md
      "
        >
            {/* Image wrapper */}
            <div className="relative overflow-hidden rounded-t-xl bg-secondary">
                <div
                    className="relative w-full"
                    style={{ aspectRatio: "1 / 1" }}
                >
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="
              object-contain p-0
              transition-transform duration-300
              group-hover:scale-105
            "
                    />
                </div>

                {/* Badge */}
                {badge && (
                    <div
                        className={cn(
                            "absolute left-2 top-0 z-10",
                            "flex h-14 w-8 items-center justify-center",
                            "rounded-b-lg",
                            BADGE_STYLES[badge]
                        )}
                    >
                        <span
                            className="
                                text-[10px] font-bold uppercase tracking-wide
                                writing-mode-vertical
                            "
                        >
                            {badge.slice(0, 4)}
                        </span>
                    </div>
                )}

                {/* Bottom overlays */}
                {(rating || certifiedStampUrl) && (
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                        {/* Rating */}
                        {rating && ratingCount && (
                            <div
                                className="
                  flex items-center gap-1 rounded-md
                  bg-background/80 px-2 py-1
                  text-xs backdrop-blur
                "
                            >
                                <span className="font-medium">{rating.toFixed(1)}</span>
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-muted-foreground">
                                    | {ratingCount}
                                </span>
                            </div>
                        )}

                        {/* Certified stamp */}
                        {certifiedStampUrl && (
                            <Image
                                src={certifiedStampUrl}
                                alt="Certified"
                                width={28}
                                height={28}
                                className="object-contain"
                            />
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="space-y-2 p-3">
                <h3 className="line-clamp-2 text-sm font-medium">
                    {title}
                </h3>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="
                  rounded-full bg-secondary px-2 py-0.5
                  text-[10px] text-secondary-foreground
                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Price */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">
                        ₹{price}
                    </span>

                    {mrp && mrp > price && (
                        <span className="text-xs text-muted-foreground line-through">
                            ₹{mrp}
                        </span>
                    )}
                </div>

                {/* CTA */}
                <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 w-full"
                >
                    Add to cart
                </Button>
            </div>
        </Link>
    )
}
