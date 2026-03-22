import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <div className="space-y-4">
      {certifications.map((cert) => (
        <div
          key={cert.title}
          className="group relative flex items-start gap-5 px-5 py-5 bg-mono-800/40 border border-mono-800/60 rounded-xl">
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <span className="text-xs font-medium tracking-widest uppercase text-mono-500">
                {cert.organization}
              </span>
              {cert.status === "present" && (
                <span className="text-[10px] font-medium uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded">
                  Present
                </span>
              )}
            </div>
            <h3 className="text-sm font-medium text-mono-100 mb-1.5">{cert.title}</h3>
            <p className="text-sm text-mono-400 leading-relaxed">{cert.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
