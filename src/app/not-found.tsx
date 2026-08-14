import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
      <h1 className="font-display text-3xl font-medium tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-4 rounded border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Back Home
      </Link>
    </section>
  );
}
