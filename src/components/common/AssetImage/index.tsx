import Image, { ImageProps } from "next/image";

export enum AssetImageEnum {
  BANNER = "/images/banner.png",
  MOBILE_BANNER = "/images/mobile-banner.png",
  PRODUCT_1 = "/images/product-1.png",
  PRODUCT_2 = "/images/product-2.png",
  PRODUCT_3 = "/images/product-3.png",
  PRODUCT_4 = "/images/product-4.png",
  PRODUCT_5 = "/images/product-5.png",
  PRODUCT_6 = "/images/product-6.png",
  SALES = "/images/sales.png",
  NEW_PRODUCT = "/images/new-product.png",
  BLACK_FRIDAY = "/images/black-friday.png",
  INSTALL_APP = "/images/install-app.png",
  SECURE = "/images/secure.png",
  INTRODUCE = "/images/introduce.png",
}

interface AssetImageProps extends ImageProps {
  src: AssetImageEnum;
  alt: string;
}

const AssetImage = ({ src, alt, ...props }: AssetImageProps) => {
  return (
    <Image src={src} alt={alt} {...props} />
  )
}

export default AssetImage;
