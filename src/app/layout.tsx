import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Providers } from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";
import ScrollTop from "@/components/ScrollTop";
import metaHome from "@/data/metadata/metaHome";
import "./globals.css";
import Script from "next/script";
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = metaHome;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      </head>
      <body
        className={`${rubik.className} bg-white text-gray-text text-base`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <Header />
          {children}
          <FloatButtons />
          <ScrollTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
