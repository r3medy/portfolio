import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { TechStackSection } from "@/components/tech-stack";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedSection } from "@/components/animated-section";
import { JsonLd } from "@/components/json-ld";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* Hero */}
      <HeroSection />

      {/* Container for content sections */}
      <div className="max-w-3xl mx-auto px-6">
        {/* Selected Projects */}
        <AnimatedSection>
          <section id="projects" className="py-16 scroll-mt-20">
            <SectionHeading label="Selected Works" title="Projects" />
            <div>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.1}>
          <section id="stack" className="py-16 scroll-mt-20">
            <SectionHeading label="Technologies" title="Tech Stack" />
            <p className="text-mono-300 text-base mb-6 max-w-md">
              The tools and technologies I use to build products.
            </p>
            <TechStackSection />
          </section>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={0.1}>
          <section id="certifications" className="py-16 scroll-mt-20">
            <SectionHeading label="Education & Training" title="Certifications" />
            <CertificationsSection />
          </section>
        </AnimatedSection>

        {/* Contact */}
        <AnimatedSection delay={0.1}>
          <section id="contact" className="py-16 scroll-mt-20">
            <SectionHeading label="Contact" title="Let's talk" />
            <ContactSection />
          </section>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
