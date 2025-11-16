import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/layout";
import QueryProvider from "@/src/providers/QueryProvider";
import I18nProvider from "@/src/providers/I18nProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xiaomi Landing",
  description: "Xiaomi Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <I18nProvider>
          <QueryProvider>
            <Header />
            {children}
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
