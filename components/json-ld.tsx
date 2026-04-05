export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yousef Adel",
    jobTitle: "Software Engineer",
    url: "https://www.yousefworks.online",
    image: "https://www.yousefworks.online/og-image.png",
    sameAs: [
      "https://github.com/r3medy",
      "https://www.linkedin.com/in/yousef-adel00/",
      "https://x.com/Remedy355",
    ],
    description:
      "Yousef Adel is a Software Engineer and Frontend Developer specializing in React, Next.js, and TypeScript.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yousef Adel - Portfolio",
    url: "https://www.yousefworks.online",
    description:
      "Personal portfolio of Yousef Adel, a Software Engineer specializing in React, Next.js, and modern web technologies.",
    author: {
      "@type": "Person",
      name: "Yousef Adel",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Yousef Adel",
      jobTitle: "Software Engineer",
      url: "https://www.yousefworks.online",
    },
    name: "Yousef Adel | Software Engineer",
    url: "https://www.yousefworks.online",
    description:
      "Yousef Adel is a Software Engineer and Frontend Developer specializing in React, Next.js, and TypeScript.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}
