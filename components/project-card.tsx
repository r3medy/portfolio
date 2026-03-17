import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block py-6 border-b border-mono-800/60 first:border-t hover:border-mono-600/60 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-lg text-mono-50 font-medium group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-mono-300 mt-1 max-w-lg leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-mono-300 bg-mono-800/60 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:mt-1">
          <span className="text-xs text-mono-500">{project.year}</span>
          <svg
            className="w-4 h-4 text-mono-600 group-hover:text-mono-300 group-hover:translate-x-0.5 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
