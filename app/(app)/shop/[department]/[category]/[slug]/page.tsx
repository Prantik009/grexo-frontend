// app/(app)/shop/[department]/[category]/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/app/_shared/product/api/product.api";
import { AddToCartButton } from "@/components/AddToCartButton";

interface PageProps {
    params: {
        department: string;
        category: string;
        slug: string;
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { department, category, slug } = params;

    let product;

    try {
        product = await getProductBySlug(slug, department, category);
    } catch (error) {
        notFound();
    }

    if (!product || !product.isActive) {
        notFound();
    }

    // Safety check — prevents URL manipulation
    if (
        product.department !== department ||
        product.category !== category
    ) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-10">
            <div className="grid gap-10 md:grid-cols-2">
                {/* Product Images */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
                    <Image
                        src={product.images?.[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Product Details */}
                <div className="space-y-5">
                    {/* Breadcrumb */}
                    <p className="text-sm text-muted-foreground capitalize">
                        {product.department} / {product.category}
                    </p>

                    <h1 className="text-2xl font-semibold md:text-3xl">
                        {product.name}
                    </h1>

                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold">
                            ₹{product.price}
                        </span>

                        {product.compareAtPrice && (
                            <span className="text-sm line-through text-muted-foreground">
                                ₹{product.compareAtPrice}
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                    </p>

                    {/* Stock */}
                    <p
                        className={`text-sm ${product.stock > 0
                                ? "text-green-600"
                                : "text-destructive"
                            }`}
                    >
                        {product.stock > 0
                            ? `${product.stock} in stock`
                            : "Out of stock"}
                    </p>

                    {/* Add to Cart */}
                    <AddToCartButton
                        productId={product._id}
                        disabled={product.stock === 0}
                    />
                </div>
            </div>
        </div>
    );
}