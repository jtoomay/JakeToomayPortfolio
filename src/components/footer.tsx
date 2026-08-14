import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {site.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            [email]
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            [github]
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            [linkedin]
          </a>
        </div>
      </div>
    </footer>
  );
}
