import { AssetImageEnum } from "@/src/components/common";
import { BestSellingProduct, Product } from "@/src/services/product/product.type";

const TIMEOUT = 3000;

export const getTopSellingProducts = (): Promise<BestSellingProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          ranking: 1,
          name: "XIAOMI Max 24",
          quantity: 1424567,
          revenue: 7809234,
        },
        {
          id: "2",
          ranking: 2,
          name: "XIAOMI Mi 13 Pro",
          quantity: 876543,
          revenue: 9567890,
        },
        {
          id: "3",
          ranking: 3,
          name: "XIAOMI Redmi Note 11",
          quantity: 123456,
          revenue: 7890123,
        },
        {
          id: "4",
          ranking: 4,
          name: "XIAOMI Poco X4",
          quantity: 654321,
          revenue: 8765432,
        },
        {
          id: "5",
          ranking: 5,
          name: "XIAOMI Pad 5",
          quantity: 543210,
          revenue: 1234567,
        },
        {
          id: "6",
          ranking: 6,
          name: "XIAOMI 12T Pro",
          quantity: 554321,
          revenue: 1345678,
        },
        {
          id: "7",
          ranking: 7,
          name: "XIAOMI 11 Lite 5G",
          quantity: 954321,
          revenue: 9876543,
        },
        {
          id: "8",
          ranking: 8,
          name: "XIAOMI Mi Band 7",
          quantity: 200432,
          revenue: 3456789,
        },
        {
          id: "9",
          ranking: 9,
          name: "XIAOMI Mi TV Q1",
          quantity: 254321,
          revenue: 2567890,
        },
        {
          id: "10",
          ranking: 10,
          name: "XIAOMI Air Purifier Pro",
          quantity: 404321,
          revenue: 6789012,
        },
      ]);
    }, TIMEOUT);
  });
};

export const getTopProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "XIAOMI Max 24",
          image: AssetImageEnum.PRODUCT_1,
        },
        {
          id: "2",
          name: "XIAOMI Mi 13 Pro",
          image: AssetImageEnum.PRODUCT_2,
        },
        {
          id: "3",
          name: "XIAOMI Redmi Note 11",
          image: AssetImageEnum.PRODUCT_3,
        },
        {
          id: "4",
          name: "XIAOMI Poco X4",
          image: AssetImageEnum.PRODUCT_4,
        },
        {
          id: "5",
          name: "XIAOMI Pad 5",
          image: AssetImageEnum.PRODUCT_5,
        },
        {
          id: "6",
          name: "XIAOMI 12T Pro",
          image: AssetImageEnum.PRODUCT_6,
        },
        {
          id: "7",
          name: "XIAOMI Max 24",
          image: AssetImageEnum.PRODUCT_1,
        },
        {
          id: "8",
          name: "XIAOMI Mi 13 Pro",
          image: AssetImageEnum.PRODUCT_2,
        },
        {
          id: "9",
          name: "XIAOMI Redmi Note 11",
          image: AssetImageEnum.PRODUCT_3,
        },
        {
          id: "10",
          name: "XIAOMI Poco X4",
          image: AssetImageEnum.PRODUCT_4,
        },
        {
          id: "11",
          name: "XIAOMI Pad 5",
          image: AssetImageEnum.PRODUCT_5,
        },
        {
          id: "12",
          name: "XIAOMI 12T Pro",
          image: AssetImageEnum.PRODUCT_6,
        },
      ]);
    }, TIMEOUT);
  });
};

export const getBlackFridayProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "XIAOMI Max 24",
          image: AssetImageEnum.BLACK_FRIDAY,
        },
        {
          id: "2",
          name: "XIAOMI Max 24",
          image: AssetImageEnum.BLACK_FRIDAY,
        },
        {
          id: "3",
          name: "XIAOMI Max 24",
          image: AssetImageEnum.BLACK_FRIDAY,
        },
      ]);
    }, TIMEOUT);
  });
};

export const getNewProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "XIAOMI Max 24",
          image: AssetImageEnum.NEW_PRODUCT,
        },
      ]);
    }, TIMEOUT);
  });
};

export const getSales = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "XIAOMI Max 24",
          image: AssetImageEnum.SALES,
        },
      ]);
    }, TIMEOUT);
  });
};