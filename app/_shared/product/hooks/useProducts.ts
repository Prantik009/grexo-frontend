// app/_shared/product/hooks/useProducts.ts

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.api";

interface UseProductsOptions {
  page?: number;
  limit?: number;
  category?: string;
  department?: string;
}

export const useProducts = (options?: UseProductsOptions) => {
  return useQuery({
    queryKey: ["products", options],
    queryFn: () => getProducts(options),
    staleTime: 1000 * 60 * 5,
  });
};
