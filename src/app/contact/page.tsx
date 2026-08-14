import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: site.links.github.replace("https://", ""), href: site.links.github },
  {
    label: "LinkedIn",
    value: site.links.linkedin.replace("https://", ""),
    href: site.links.linkedin,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Contact</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground">
        Let&apos;s talk
      </h1>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
        {site.availability}. The fastest way to reach me is email — I try to
        reply within a day or two.
      </p>

      <dl className="mt-12 flex flex-col divide-y divide-border border-y border-border">
        {channels.map((channel) => (
          <div
            key={channel.label}
            className="flex items-center justify-between gap-4 py-4"
          >
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {channel.label}
            </dt>
            <dd>
              <a
                href={channel.href}
                target={channel.label === "Email" ? undefined : "_blank"}
                rel={channel.label === "Email" ? undefined : "noopener noreferrer"}
                className="font-mono text-sm text-foreground transition-colors hover:text-accent"
              >
                {channel.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
