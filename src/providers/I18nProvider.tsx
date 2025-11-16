"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "@/src/utils/i18n";
import { getLanguage } from "@/src/utils/localStorage";

interface I18nProviderProps {
  children: React.ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  useEffect(() => {
    // Restore language from localStorage after mount (client-side only)
    // This ensures server and client both start with 'en', avoiding hydration mismatch
    const savedLanguage = getLanguage();
    if (savedLanguage && ['en', 'ja'].includes(savedLanguage) && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};

export default I18nProvider;

