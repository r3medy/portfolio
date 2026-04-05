import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Page Not Found | Yousef Adel",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-8xl font-bold mb-4 text-mono-100">404</h1>
      <h2 className="text-4xl mb-4 text-mono-100">
        Lost in the <span className="font-display italic text-mono-500 font-bold">void</span>
      </h2>
      <p className="text-lg text-mono-300 mb-6 w-1/3 text-center">
        The requested resource could not be found. It might have been removed, renamed, or did not
        exist in the first place.
      </p>

      <Link
        href="/"
        className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-mono-800 bg-mono-900/50 rounded-lg text-mono-200 text-sm font-medium hover:border-mono-400 hover:text-mono-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mono-400 focus-visible:ring-offset-2 focus-visible:ring-offset-mono-950 active:scale-95 transition-all duration-300 w-full sm:w-auto mt-2"
        aria-label="Return to homepage">
        <LuArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Return Home
      </Link>
    </div>
  );
}
