import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "FIBX — Premium Software Agency",
  description:
    "We design and build exceptional software products. Web applications, business systems, and AI solutions crafted with precision and purpose.",
  keywords: [
    "software agency",
    "web development",
    "AI solutions",
    "business software",
    "custom software",
  ],
  openGraph: {
    title: "FIBX — Premium Software Agency",
    description:
      "We design and build exceptional software products. Web applications, business systems, and AI solutions crafted with precision and purpose.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${plusJakarta.variable}`}>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
