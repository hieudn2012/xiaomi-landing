"use client";

import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useTranslation } from "react-i18next";

import { AssetIcon, AssetIconEnum } from "@/src/components/common";
import { AssetImage, AssetImageEnum } from "@/src/components/common";
import { IconButton } from "@/src/components/ui";
import {
  useBlackFridayProducts,
  useNewProducts,
  useSales,
} from "@/src/services/product/product.hooks";

const FlashSale = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);
  const { data: blackFridayProducts, isLoading: isLoadingBlackFridayProducts } = useBlackFridayProducts();
  const { data: newProducts, isLoading: isLoadingNewProducts } = useNewProducts();
  const { data: sales, isLoading: isLoadingSales } = useSales();
  const newProduct = newProducts?.[0];
  const salesProduct = sales?.[0];

  const settings: Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-dm-24">
      <div>
        <div className="flex justify-between items-center h-[48px] mb-dm-8">
          <div className="italic text-lg lg:text-2xl font-black text-primary-500">{t("black_friday")}</div>
          <div className="flex gap-dm-8">
            <IconButton onClick={goToPrev}>
              <AssetIcon src={AssetIconEnum.ARROW_LEFT} width={24} height={24} alt="" />
            </IconButton>
            <IconButton onClick={goToNext}>
              <AssetIcon src={AssetIconEnum.ARROW_RIGHT} width={24} height={24} alt="" />
            </IconButton>
          </div>
        </div>
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {isLoadingBlackFridayProducts && Array.from({ length: 3 }).map((_, index) => (
              <div className="animate-pulse bg-secondary-800 rounded-2xl w-full aspect-[2.04]" key={index}>
              </div>
            ))}
            {!isLoadingBlackFridayProducts && blackFridayProducts?.map((product) => (
              <div className="relative w-full aspect-[2.04]" key={product.id}>
                <AssetImage src={product.image as AssetImageEnum} fill alt="sales" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-dm-24">
        <div>
          <div className="italic flex items-center text-lg lg:text-2xl font-black text-primary-500 h-dm-48 mb-dm-8">{t("new_products")}</div>
          {isLoadingNewProducts && (
            <div className="animate-pulse bg-secondary-800 rounded-2xl w-full aspect-square"></div>
          )}
          {!isLoadingNewProducts && (
            <div className="relative w-full aspect-square" key={newProduct?.id}>
              <AssetImage src={newProduct?.image as AssetImageEnum} fill alt="new product" />
            </div>
          )}
        </div>
        <div>
          <div className="italic flex items-center text-lg lg:text-2xl font-black text-primary-500 h-dm-48 mb-dm-8">{t("sales")}</div>
          {isLoadingSales && (
            <div className="animate-pulse bg-secondary-800 rounded-2xl w-full aspect-square"></div>
          )}
          {!isLoadingSales && (
            <div className="relative w-full aspect-square" key={salesProduct?.id}>
              <AssetImage src={salesProduct?.image as AssetImageEnum} fill alt="sales" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FlashSale;
