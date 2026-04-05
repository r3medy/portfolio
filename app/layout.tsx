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
    "Yousef Adel is a Software Engineer and Frontend Developer specializing in React, Next.js, and TypeScript. Explore projects, case studies, and technical expertise.",
  keywords: [
    "Yousef Adel",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Full Stack Developer",
  ],
  authors: [{ name: "Yousef Adel", url: "https://www.yousefworks.online" }],
  creator: "Yousef Adel",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yousef Adel | Software Engineer",
    description:
      "Yousef Adel is a Software Engineer and Frontend Developer specializing in React, Next.js, and TypeScript. Explore projects, case studies, and technical expertise.",
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
      "Yousef Adel is a Software Engineer and Frontend Developer specializing in React, Next.js, and TypeScript. Explore projects, case studies, and technical expertise.",
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
