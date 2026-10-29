import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";

export function Nav() {
  return (
    <header id="top" className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/#top"
          className="inline-flex w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link"
        >
          <Image
            src="/logo.png"
            alt="Toomay LLC"
            width={298}
            height={112}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
