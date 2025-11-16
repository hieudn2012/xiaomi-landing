"use client";

import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  AssetIcon,
  AssetIconEnum,
  AssetImage,
  AssetImageEnum,
} from "@/src/components/common";
import { IconButton } from "@/src/components/ui";
import { useTopProducts } from "@/src/services/product/product.hooks";
import { Product } from "@/src/services/product/product.type";


const Skeleton = () => {
  return (
    <div className="animate-pulse bg-secondary-800 rounded-2xl w-[180px] aspect-[0.73] shrink-0"></div>
  )
}

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="mr-dm-16">
      <div className="bg-secondary-800 rounded-2xl overflow-hidden w-full aspect-[0.73]">
        {product.image && (
          <div className="relative w-full h-full">
            <AssetImage
              src={product.image as AssetImageEnum}
              fill
              alt={product.name}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}

const TopProducts = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { data: products, isLoading } = useTopProducts();
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 4 : 6,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center justify-between mb-dm-8">
        <div className="italic text-lg lg:text-2xl font-black text-primary-500">{t("top_products")}</div>
        <div className="flex gap-dm-8">
          <IconButton onClick={goToPrev}>
            <AssetIcon src={AssetIconEnum.ARROW_LEFT} width={24} height={24} alt="" />
          </IconButton>
          <IconButton onClick={goToNext}>
            <AssetIcon src={AssetIconEnum.ARROW_RIGHT} width={24} height={24} alt="" />
          </IconButton>
        </div>
      </div>
      <div className="mt-dm-8 overflow-hidden w-full">
        {isLoading ? (
          <div className="flex gap-dm-16">
            {Array.from({ length: 12 }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="w-full">
            <Slider ref={sliderRef} {...settings} className="-mr-[60px] lg:-mr-[100px]">
              {products?.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  )
}

export default TopProducts;
