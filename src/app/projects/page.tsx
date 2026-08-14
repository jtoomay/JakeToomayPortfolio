import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and work.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Projects</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground">
        Selected Work
      </h1>

      <ul className="mt-12 flex flex-col divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-2 py-6 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-xl font-medium text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
                  {project.category}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted [&:not(:first-child)]:before:mr-2 [&:not(:first-child)]:before:text-border [&:not(:first-child)]:before:content-['/']"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
