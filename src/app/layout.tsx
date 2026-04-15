import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalMotion from "@/components/effects/GlobalMotion";
import ScrollTopButton from "@/components/effects/ScrollTopButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Move The World — Global Citizenship Education in Ghana",
    template: "%s | Move The World",
  },
  description:
    "Move The World is a registered charity empowering young people in Ghana through Global Citizenship Education, leadership development, and community-led solutions.",
  metadataBase: new URL("https://movetheworld.co"),
  openGraph: {
    siteName: "Move The World",
    locale: "en_GB",
    type: "website",
    title: "Move The World — Global Citizenship Education in Ghana",
    description:
      "Move The World is a registered charity empowering young people in Ghana through Global Citizenship Education, leadership development, and community-led solutions.",
    url: "https://movetheworld.co",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Move The World students in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move The World — Global Citizenship Education in Ghana",
    description:
      "Move The World empowers young people in Ghana through SDG-aligned education and community-led impact.",
    images: ["/images/hero.webp"],
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Move The World",
    "Ghana education charity",
    "Global Citizenship Education",
    "SDG education",
    "youth empowerment Ghana",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2E2B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-sans ${jakarta.variable}`}>
      <body className="antialiased">
        <GlobalMotion />
        <Navbar />
        <main>{children}</main>
        <ScrollTopButton />
        <Footer />
      </body>
    </html>
  );
}