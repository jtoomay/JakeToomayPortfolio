"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-foreground"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-1 gap-y-1">
          {nav.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded px-2 py-2 font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-3 ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
