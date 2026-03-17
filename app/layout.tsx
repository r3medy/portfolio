import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display, JetBrains_Mono } from "next/font/google";
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
  title: "Yousef Adel | Software Engineer",
  description: "Software Engineer & Frontend Developer crafting modern web experiences.",
  keywords: [
    "Yousef Adel",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
  ],
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
      </body>
    </html>
  );
}
