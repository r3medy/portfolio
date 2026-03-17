interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <span className="text-xs text-mono-500 uppercase tracking-[0.2em] mb-2 block">✦ {label}</span>
      <h2 className="text-2xl sm:text-3xl font-display italic text-mono-50">{title}</h2>
    </div>
  );
}
