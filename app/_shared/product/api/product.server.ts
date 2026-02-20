import { ENV } from "@/app/config/env";
import { Product } from "../types/product.types";

interface ProductsResponse {
    products: Product[];
    total: number;
    page: number;
    totalPages: number;
}

export async function getProductsServer(params: {
    department?:string;
    sort?: string;
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    price?: string;
}): Promise<ProductsResponse> {
    const searchParams = new URLSearchParams();

    if (params.page) searchParams.set("page", String(params.page));
    if (params.limit) searchParams.set("limit", String(params.limit));
    if (params.category) searchParams.set("category", params.category);
    if (params.search) searchParams.set("search", params.search);

    const res = await fetch(    
        `${ENV.API_URL}/products?${searchParams.toString()}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
}