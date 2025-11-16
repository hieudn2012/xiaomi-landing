"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

import { AssetIcon, AssetIconEnum } from "@/src/components/common";

const LANGUAGES = [
  { code: "en", label: "ENG" },
  { code: "ja", label: "JPN" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={twMerge(
          "flex items-center gap-dm-8 px-dm-12 py-dm-8 rounded-lg",
          "text-white font-medium text-sm",
          "hover:bg-secondary-700 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-primary-500"
        )}
      >
        <span>{currentLanguage.label}</span>
        <AssetIcon
          src={AssetIconEnum.ARROW_DOWN}
          alt="dropdown"
          width={12}
          height={12}
          className={twMerge(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-dm-8 bg-secondary-800 rounded-lg shadow-lg border border-secondary-600 min-w-[100px] z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={twMerge(
                "w-full px-dm-12 py-dm-10 text-left text-sm font-medium",
                "hover:bg-secondary-700 transition-colors",
                "first:rounded-t-lg last:rounded-b-lg",
                currentLanguage.code === lang.code && "bg-secondary-700 text-primary-500"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

