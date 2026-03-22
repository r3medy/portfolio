export interface Certification {
  title: string;
  organization: string;
  description: string;
  status: "present" | "completed";
}

export const certifications: Certification[] = [
  {
    title: "React Frontend Engineer Trainee",
    organization: "DEPI",
    description: "Developing real-world React applications.",
    status: "present",
  },
  {
    title: "UI/UX Summer Camp",
    organization: "ITI",
    description:
      "Conducted user research, created wireframes, and delivered interface designs.",
    status: "completed",
  },
];
