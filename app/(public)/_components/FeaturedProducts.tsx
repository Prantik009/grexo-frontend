"use client";

import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/app/_shared/product/hooks/useProducts";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ViewAllButton } from "@/components/common/ViewAllButton";

export function FeaturedProducts({ department }: { department?: string }) {
    const { data, isLoading } = useProducts({ limit: 4 });

    if (isLoading) return <p>Loading...</p>;

    return (
        <section className="mx-auto max-w-7xl px-4 py-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold md:text-2xl">
                    Featured Products
                </h2>

                 <ViewAllButton href="/shop" />
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data?.products.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        slug={product.slug}
                        department={product.department}
                        category={product.category}
                        title={product.name}
                        imageUrl={
                            product.images?.[0] || "/products/placeholder.png"
                        }
                        price={product.price}
                        mrp={product.compareAtPrice ?? undefined}
                    />
                ))}
            </div>
        </section>
    );
}