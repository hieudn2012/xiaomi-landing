import { useQuery } from "@tanstack/react-query";
import {
  getBlackFridayProducts,
  getNewProducts,
  getTopSellingProducts,
  getSales,
  getTopProducts
} from "./product.api";

const QUERY_KEYS = {
  TOP_SELLING_PRODUCTS: "top-selling-products",
  TOP_PRODUCTS: "top-products",
  BLACK_FRIDAY_PRODUCTS: "black-friday-products",
  NEW_PRODUCTS: "new-products",
  SALES: "sales",
};

export const useTopSellingProducts = () => {
  return useQuery(
    {
      queryKey: [QUERY_KEYS.TOP_SELLING_PRODUCTS],
      queryFn: getTopSellingProducts,
    }
  );
};

export const useTopProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TOP_PRODUCTS],
    queryFn: getTopProducts,
  });
};

export const useBlackFridayProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.BLACK_FRIDAY_PRODUCTS],
    queryFn: getBlackFridayProducts,
  });
};

export const useNewProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.NEW_PRODUCTS],
    queryFn: getNewProducts,
  });
};

export const useSales = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.SALES],
    queryFn: getSales,
  });
};
