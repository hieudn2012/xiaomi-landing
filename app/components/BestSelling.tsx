"use client";

import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

import { AssetIcon, AssetIconEnum } from "@/src/components/common";
import { useTopSellingProducts } from "@/src/services/product/product.hooks";
import { BestSellingProduct } from "@/src/services/product/product.type";
import { formatNumber, formatCurrency } from "@/src/utils/format";

const Item = ({ product }: { product: BestSellingProduct }) => {
  const getRankHighlight = (ranking: number) => {
    if (ranking === 1) {
      return "from-primary-500/15";
    }
    if (ranking === 2) {
      return "from-secondary-100/10";
    }
    if (ranking === 3) {
      return "from-[#99735A]/20";
    }
    return "from-primary-100/5";
  }

  return (
    <div className="rounded-2xl overflow-hidden text-2xs lg:text-base font-black bg-secondary-800">
      <div className={twMerge(
        "flex gap-dm-8 items-center py-dm-18 px-dm-10 lg:px-dm-24 bg-linear-to-r via-secondary-900/10 via-20% to-secondary-900/10 to-90%",
        getRankHighlight(product.ranking)
      )}>
        <div className="w-dm-48 lg:w-1/8 shrink-0">
          {product.ranking <= 3 && (
            <div className="w-dm-20 h-dm-20 lg:w-dm-40 lg:h-dm-40 relative">
              <AssetIcon
                src={`/icons/rank-${product.ranking}.svg` as AssetIconEnum}
                alt="rank"
                fill
              />
            </div>
          )}
          {product.ranking > 3 && (
            <div className="text-primary-200 text-xl lg:text-3xl">
              {product.ranking}
            </div>
          )}
        </div>

        <div className="flex-1 text-white uppercase text-center">
          {product.name}
        </div>

        <div className="flex-1 text-white text-center">
          {formatNumber(product.quantity)}
        </div>

        <div className="flex-1 flex justify-end">
          <div className="px-dm-16 py-dm-8 rounded-2xl bg-secondary-900 text-primary-500">
            {formatCurrency(product.revenue)}
          </div>
        </div>
      </div>
    </div>
  )
};

const Skeleton = () => {
  return (
    <div className="animate-pulse bg-secondary-800 rounded-2xl h-dm-72"></div>
  )
}

const BestSelling = () => {
  const { t } = useTranslation();
  const { data: products, isLoading } = useTopSellingProducts();

  return (
    <div className="font-black italic">
      <div className="text-center italic font-black text-lg lg:text-2xl text-primary-500 py-dm-12 px-dm-24 bg-linear-to-r from-secondary-900/10 via-primary-500/10 to-secondary-900/10">
        {t("top_best_selling_products")}
      </div>
      <div className="flex gap-dm-8 py-dm-18 px-dm-10 lg:px-dm-24 text-2xs lg:text-sm">
        <div className="w-dm-48 lg:w-1/8 shrink-0">{t("no")}</div>
        <div className="flex-1 text-center">{t("products")}</div>
        <div className="flex-1 text-center">{t("quantity")}</div>
        <div className="flex-1 text-right">{t("price")}</div>
      </div>
      <div className="grid gap-dm-14 max-h-[400] lg:max-h-[450px] overflow-y-auto">
        {isLoading && Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
        {!isLoading && products?.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default BestSelling;
