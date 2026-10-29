import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8">
      <h1 className="font-display text-3xl tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        This address is not part of the Toomay LLC site.
      </p>
      <Link
        href="/#top"
        className="mt-8 inline-block text-sm text-link underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link"
      >
        Back to home
      </Link>
    </section>
  );
}
