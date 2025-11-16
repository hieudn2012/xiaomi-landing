"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import {
  AssetIcon,
  AssetIconEnum,
  AssetImage,
  AssetImageEnum
} from "@/src/components/common";
import Container from "@/src/components/common/Container";

const ABOUT_US = [
  { name: "company_details", path: "/company-details" },
  { name: "terms_conditions", path: "/terms-conditions" },
  { name: "privacy_policy", path: "/privacy-policy" },
  { name: "affiliate", path: "/affiliate" },
];

const HELP = [
  { name: "faq", path: "/faq" },
  { name: "aml_kyc_policy", path: "/aml-kyc-policy" },
  { name: "refund_policy", path: "/refund-policy" },
  { name: "dispute_resolution", path: "/dispute-resolution" },
];

const OUR_PRODUCTS = [
  { name: "product", path: "/product" },
  { name: "contact", path: "/contact" },
  { name: "price", path: "/price" },
  { name: "sales", path: "/sales" },
];

const CONTACT_US = [{
  email: "support@xiaomi.email",
  path: "/support",
}, {
  email: "affiliate@xiaomi.com",
  path: "/affiliate",
}]

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="py-dm-40 border-t border-secondary-600">
      <Container className="flex flex-col gap-dm-20 lg:gap-dm-40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-dm-24 gap-x-dm-16">
          <div>
            <div className="font-black uppercase italic mb-dm-12">{t("about_us")}</div>
            <div className="flex flex-col gap-dm-8">
              {ABOUT_US.map((item) => (
                <Link href={item.path} key={item.name} className="text-xs lg:text-sm">{t(item.name)}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-black uppercase italic mb-dm-12">{t("help")}</div>
            <div className="flex flex-col gap-dm-8">
              {HELP.map((item) => (
                <Link href={item.path} key={item.name} className="text-xs lg:text-sm">{t(item.name)}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-black uppercase italic mb-dm-12">{t("our_products")}</div>
            <div className="flex flex-col gap-dm-8">
              {OUR_PRODUCTS.map((item) => (
                <Link href={item.path} key={item.name} className="text-xs lg:text-sm">{t(item.name)}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="font-black uppercase italic mb-dm-12">{t("contact_us")}</div>
            <div className="flex flex-col gap-dm-8">
              {CONTACT_US.map((item) => (
                <a href={`mailto:${item.email}`} key={item.email} className="text-xs lg:text-sm">{item.email}</a>
              ))}
              <a href="https://play.google.com/" target="_blank">
                <AssetImage src={AssetImageEnum.INSTALL_APP} alt="install app" width={152} height={44} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-dm-20">
          <AssetImage src={AssetImageEnum.SECURE} alt="secure" width={132} height={30} />
          <div className="text-xs lg:text-sm text-center">{t("warranty_description")}</div>
        </div>
        <div className="text-xs lg:text-sm text-center lg:text-left">
          {t("warranty_details")}
        </div>
        <div className="text-xs lg:text-sm text-center py-dm-14 bg-secondary-800 rounded-xl">
          {t("copyright")}
        </div>
        <div className="flex justify-center flex-wrap gap-dm-24">
          <AssetIcon src={AssetIconEnum.VISA} alt="visa" width={74} height={24} />
          <AssetIcon src={AssetIconEnum.MASTERCARD} alt="mastercard" width={134} height={24} />
          <AssetIcon src={AssetIconEnum.ASTROPAY} alt="astropay" width={90} height={24} />
          <AssetIcon src={AssetIconEnum.INTERAC} alt="interac" width={25} height={24} />
          <AssetIcon src={AssetIconEnum.JETONBANK} alt="jetonbank" width={40} height={24} />
        </div>
      </Container>
    </div>
  )
}

export default Footer;
