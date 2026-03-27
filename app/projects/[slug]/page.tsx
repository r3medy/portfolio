import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetailContent } from "./project-detail-content";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Yousef Adel`,
    description: project.description,
    keywords: [
      ...project.tags,
      "Yousef Adel",
      "Portfolio",
      "Project",
      project.title,
    ],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Yousef Adel`,
      description: project.description,
      url: `https://www.yousefworks.online/projects/${project.slug}`,
      siteName: "Yousef Adel - Portfolio",
      images: [
        {
          url: `/${project.slug}.png`,
          width: 1200,
          height: 675,
          alt: `${project.title} Preview`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Yousef Adel`,
      description: project.description,
      images: [`/${project.slug}.png`],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
