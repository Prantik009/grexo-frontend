// app/_shared/product/api/product.api.ts

import api from "@/app/_shared/api/axios";
import { Product } from "../types/product.types";

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
}

interface GetProductsParams {
  department?:string,
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

export const getProducts = async (
  params?: GetProductsParams
): Promise<ProductsResponse> => {
  const { data } = await api.get("/products", { params });
  return data;
};

export const getProductBySlug = async (
  slug: string,
  department: string,
  category: string
): Promise<Product> => {
  const { data } = await api.get(
    `/products/${department}/${category}/${slug}`
  );
  return data;
};
