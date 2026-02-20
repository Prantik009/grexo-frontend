// app/_shared/product/types/product.types.ts

export interface Product {
    _id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    compareAtPrice?: number | null;
    stock: number;
    images: string[];
    department: string;      // ✅ REQUIRED
    category: string;        // ✅ REQUIRED
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
