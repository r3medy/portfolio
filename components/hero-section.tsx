import { AsciiArt } from "@/components/ascii-art";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 overflow-hidden">
      {/* ASCII Art Background */}
      <div className="mb-8 md:mb-12">
        <AsciiArt />
      </div>

      {/* Title & Name */}
      <div className="text-center z-10 px-4 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-mono-50 mb-4 tracking-tight">
          Yousef Adel
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-mono-300 mb-2">
          I&apos;m a <span className="font-display italic text-mono-100">Software Engineer</span>
        </p>
        <p className="text-sm sm:text-base text-mono-300 max-w-md mx-auto mb-10">
          Building modern web experiences with clean code and thoughtful design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/Yousef Adel's CV.pdf"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-mono-800 bg-mono-900/50 rounded-lg text-mono-300 text-sm hover:bg-mono-800 hover:text-mono-100 transition-all duration-300 w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer">
            View my CV
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
          <Link
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-mono-600 rounded-lg text-mono-200 text-sm hover:border-mono-400 hover:text-mono-50 transition-all duration-300 w-full sm:w-auto">
            View my work
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
