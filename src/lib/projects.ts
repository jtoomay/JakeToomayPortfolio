export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  year: string;
  links?: {
    repo?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "example-project-one",
    title: "Example Project One",
    category: "Web App",
    summary: "A short, one-line summary of what this project does and why it exists.",
    description:
      "Replace this with a real project. Cover the problem it solved, the approach you took, and any details worth highlighting — architecture decisions, performance work, or interesting constraints.",
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    year: "2026",
    links: {
      repo: "https://github.com/jaketoomay",
    },
  },
  {
    slug: "example-project-two",
    title: "Example Project Two",
    category: "CLI Tool",
    summary: "Another placeholder project — swap in real work when it's ready.",
    description:
      "Replace this with a real project. Cover the problem it solved, the approach you took, and any details worth highlighting — architecture decisions, performance work, or interesting constraints.",
    stack: ["Rust", "WASM"],
    year: "2025",
    links: {
      repo: "https://github.com/jaketoomay",
    },
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
