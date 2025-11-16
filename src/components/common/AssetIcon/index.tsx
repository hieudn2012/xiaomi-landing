import Image, { ImageProps } from "next/image";

export enum AssetIconEnum {
  LOGO = "/icons/logo.svg",
  ARROW_LEFT = "/icons/arrow-left.svg",
  ARROW_RIGHT = "/icons/arrow-right.svg",
  ARROW_DOWN = "/icons/arrow-down.svg",
  RANK_1 = "/icons/rank-1.svg",
  RANK_2 = "/icons/rank-2.svg",
  RANK_3 = "/icons/rank-3.svg",
  VISA = "/icons/visa.svg",
  MASTERCARD = "/icons/mastercard.svg",
  ASTROPAY = "/icons/astropay.svg",
  INTERAC = "/icons/interac.svg",
  JETONBANK = "/icons/jetonbank.svg",
  CLOSE = "/icons/close.svg",
  MOBILE_LOGO = "/icons/mobile-logo.svg",
  MENU = "/icons/menu.svg",
}

interface AssetIconProps extends ImageProps {
  src: AssetIconEnum;
  alt: string;
}

const AssetIcon = ({ src, alt, ...props }: AssetIconProps) => {
  return <Image src={src} alt={alt} {...props} />
}

export default AssetIcon;
