import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yousefworks.online"),
  title: "Yousef Adel | Software Engineer",
  description:
    "Software Engineer & Frontend Developer crafting modern web experiences.",
  keywords: [
    "Yousef Adel",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yousef Adel | Software Engineer",
    description:
      "Software Engineer & Frontend Developer crafting modern web experiences.",
    url: "https://www.yousefworks.online",
    siteName: "Yousef Adel - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yousef Adel - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yousef Adel | Software Engineer",
    description:
      "Software Engineer & Frontend Developer crafting modern web experiences.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navbar />
        <main className="relative">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
