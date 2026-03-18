import { techStack } from "@/data/tech-stack";
import * as React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";

function TechIcon({ icon }: { icon: string }) {
  const className = "w-5 h-5 shrink-0";
  const icons: Record<string, React.JSX.Element> = {
    react: <SiReact className={className} />,
    nextjs: <SiNextdotjs className={className} />,
    typescript: <SiTypescript className={className} />,
    javascript: <SiJavascript className={className} />,
    html: <SiHtml5 className={className} />,
    css: <SiCss className={className} />,
    git: <SiGit className={className} />,
    github: <SiGithub className={className} />,
    mysql: <SiMysql className={className} />,
    postgresql: <SiPostgresql className={className} />,
    tailwind: <SiTailwindcss className={className} />,
    nodejs: <SiNodedotjs className={className} />,
    express: <SiExpress className={className} />,
    mongodb: <SiMongodb className={className} />,
    bootstrap: <SiBootstrap className={className} />,
  };

  return icons[icon] || <span className="text-xs font-mono">{icon}</span>;
}

export function TechStackSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {techStack.map((item) => (
        <div
          key={item.name}
          className="group flex items-center gap-3 px-4 py-3 bg-mono-800/40 border border-mono-800/60 rounded-lg">
          <span className="text-mono-300">
            <TechIcon icon={item.icon} />
          </span>
          <span className="text-sm text-mono-300">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
