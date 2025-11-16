"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

import { Button, LanguageSwitcher } from "@/src/components/ui";
import { AssetIcon, AssetIconEnum } from "@/src/components/common";
import Container from "@/src/components/common/Container";
import { ROUTER_PATH } from "@/src/contants/router.constant";

const NAV_LINKS = [
  { name: "home", path: ROUTER_PATH.HOME },
  { name: "product", path: ROUTER_PATH.PRODUCT },
  { name: "contact", path: ROUTER_PATH.CONTACT },
  { name: "price", path: ROUTER_PATH.PRICE },
];

const Header = () => {
  const { t } = useTranslation();
  const pathName = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenMenu])

  const renderMenuLinks = () => {
    return NAV_LINKS.map((item) => (
      <Link
        href={item.path}
        key={item.name}
        className={twMerge(
          "uppercase rounded-full text-center px-dm-20 py-dm-14 lg:py-dm-10 text-sm font-medium",
          pathName === item.path && "bg-secondary-600 text-primary-500"
        )}
        onClick={() => setIsOpenMenu(false)}
      >
        {t(item.name)}
      </Link>
    ))
  }

  return (
    <nav className="sticky top-0 z-50 bg-background">
      <Container className="py-dm-20 flex items-center justify-between">
        <div className="flex">
          <button className="lg:hidden cursor-pointer mr-dm-16" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <AssetIcon
              src={isOpenMenu ? AssetIconEnum.CLOSE : AssetIconEnum.MENU}
              width={24}
              height={24}
              alt="menu"
              className={twMerge(
                "transition-transform duration-200",
                isOpenMenu && "rotate-90"
              )}
            />
          </button>
          <Link href={ROUTER_PATH.HOME}>
            <div className="hidden lg:block">
              <AssetIcon src={AssetIconEnum.LOGO} width={138} height={40} alt="logo" />
            </div>
            <div className="block lg:hidden">
              <AssetIcon src={AssetIconEnum.MOBILE_LOGO} width={38} height={40} alt="logo" />
            </div>
          </Link>
          <div className="hidden lg:flex ml-dm-40">
            {renderMenuLinks()}
          </div>
        </div>
        <div className="flex items-center gap-dm-8">
          <Button variant="primary">
            {t("sign_up")}
          </Button>
          <Button variant="secondary">
            {t("log_in")}
          </Button>
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
        </div>
      </Container>

      {isOpenMenu && (
        <div className="fixed top-dm-80 bottom-0 left-0 right-0 bg-secondary-800 flex flex-col gap-dm-16 p-dm-20">
          {renderMenuLinks()}
        </div>
      )}
    </nav>
  );
};

export default Header;
