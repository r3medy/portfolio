export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yousef Adel",
    jobTitle: "Software Engineer",
    url: "https://www.yousefworks.online",
    sameAs: [
      "https://github.com/r3medy",
      "https://www.linkedin.com/in/yousef-adel00/",
      "https://x.com/Remedy355",
    ],
    description:
      "Software Engineer & Frontend Developer crafting modern web experiences.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yousef Adel - Portfolio",
    url: "https://www.yousefworks.online",
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
    </>
  );
}
