import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
      <Link
        href="/projects"
        className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
      >
        ← All Projects
      </Link>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h1 className="font-display text-4xl font-medium tracking-tight text-foreground">
          {project.title}
        </h1>
        <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
          {project.year}
        </span>
      </div>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
        {project.category}
      </p>

      <p className="mt-8 text-base leading-relaxed text-muted">{project.description}</p>

      <div className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {project.links && (project.links.repo || project.links.demo) && (
        <div className="mt-10 flex flex-wrap gap-4">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View Repo
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </section>
  );
}
