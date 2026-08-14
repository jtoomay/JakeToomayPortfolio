import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills, and how to work with me.",
};

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">About</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground">
        Background
      </h1>

      <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed text-muted">
        <p>
          Replace this paragraph with a real bio: what you work on, what kind
          of problems you enjoy, and what you&apos;re looking for next.
        </p>
        <p>
          A second paragraph can cover your path so far — roles, notable
          projects, or the throughline in what you build.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Skills
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
