"use client";

import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}>
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-mono-500 hover:text-mono-200 transition-colors mb-12">
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          Back to projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs text-mono-500">{project.year}</span>
          <span className="w-1 h-1 rounded-full bg-mono-600" />
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-mono-300 bg-mono-800/60 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-mono-50 mb-4">
          {project.title}
        </h1>
        <p className="text-mono-300 text-base sm:text-lg max-w-xl mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* External Links */}
        <div className="flex gap-3 mb-12">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-mono-200 bg-mono-800/40 border border-mono-700/60 rounded-lg hover:bg-mono-700/40 hover:border-mono-600/60 transition-all duration-300">
              Live site
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-mono-200 bg-mono-800/40 border border-mono-700/60 rounded-lg hover:bg-mono-700/40 hover:border-mono-600/60 transition-all duration-300">
              Source code
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>

      {/* Project Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mb-12">
        <div className="w-full aspect-video bg-mono-800/30 border border-mono-800/60 rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={`/${project.slug}.png`}
            alt={`${project.title} Preview`}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-mono-800/50 mb-12" />

      {/* Markdown Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}>
        <div className="prose-dark">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
        </div>
      </motion.div>

      {/* Bottom nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 pt-8 border-t border-mono-800/50">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-mono-500 hover:text-mono-200 transition-colors">
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          All projects
        </Link>
      </motion.div>
    </div>
  );
}
