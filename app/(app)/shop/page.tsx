// app/(app)/shop/page.tsx

import { CategorySection } from "@/app/(public)/_components/Category";
import { getProductsServer } from "@/app/_shared/product/api/product.server";
import { Product } from "@/app/_shared/product/types/product.types";
import { Pagination } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";
import { notFound } from "next/navigation";

interface PageProps {
    searchParams: {
        page?: string;
    };
}

export default async function ShopPage({ searchParams }: PageProps) {
    const page = Number(searchParams.page) || 1;

    const data = await getProductsServer({
        page,
        limit: 12,
    });

    if (!data?.products?.length) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-10">
             <CategorySection />
            {/* <h1 className="text-2xl font-semibold mb-8">
                All Products
            </h1> */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.products.map((product: Product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        slug={product.slug}
                        department={product.department}
                        category={product.category}
                        title={product.name}
                        imageUrl={product.images?.[0]}
                        price={product.price}
                        mrp={product.compareAtPrice ?? undefined}
                    />
                ))}
            </div>

            <Pagination
                currentPage={data.page}
                totalPages={data.totalPages}
                basePath="/shop"
            />
        </div>
    );
}