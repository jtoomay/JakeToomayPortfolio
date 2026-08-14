import Link from "next/link";
import { TitleBlock } from "@/components/title-block";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-blueprint-grid">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background"
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-32">
        <div className="flex max-w-xl flex-col gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {site.role}
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            {site.name}
          </h1>
          <p className="text-lg leading-relaxed text-muted">{site.tagline}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <TitleBlock />
      </div>
    </section>
  );
}
