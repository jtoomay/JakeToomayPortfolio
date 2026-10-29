import { ContactForm } from "@/components/contact-form";
import { services, site } from "@/lib/site";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  founder: {
    "@type": "Person",
    name: "Jake Toomay",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Overland Park",
    addressRegion: "KS",
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />

      <section className="mx-auto w-full max-w-3xl px-6 pb-20 pt-16 sm:px-8 sm:pt-24">
        <h1 className="max-w-xl font-display text-4xl leading-[1.15] tracking-tight text-foreground sm:text-5xl">
          {site.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.subheadline}
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="bg-accent px-5 py-3 text-sm text-link-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
          >
            Contact Toomay LLC
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-link underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link"
          >
            {site.email}
          </a>
        </div>
        <p className="mt-10 text-sm leading-relaxed text-foreground">
          {site.location}
          <br />
          {site.region}
        </p>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-t border-border"
      >
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            About
          </h2>
          <div className="mt-8 flex max-w-xl flex-col gap-5 text-base leading-relaxed text-foreground">
            <p>
              Toomay LLC is a software development company founded by Jake
              Toomay. The company builds applications for clients who need
              software written to a high standard.
            </p>
            <p>
              The work includes mobile applications for iOS and Android, web
              applications, and desktop software. A project covers the product
              from the interface through the systems that keep it reliable.
            </p>
            <p>
              Toomay LLC runs locally from Overland Park, Kansas, in the Kansas
              City area of the United States.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Services
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Toomay LLC develops high-quality applications on each of these
            platforms.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {services.map((service) => (
              <li
                key={service.name}
                className="grid gap-1 py-5 sm:grid-cols-[16rem_1fr] sm:items-baseline sm:gap-8"
              >
                <h3 className="text-base text-foreground">{service.name}</h3>
                <p className="text-base leading-relaxed text-muted">
                  {service.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-border"
      >
        <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight text-foreground">
            Contact
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Email is the direct way to reach Toomay LLC. You can also send a
            message with the form below.
          </p>
          <dl className="mt-8 flex flex-col gap-3 text-base">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
              <dt className="w-40 shrink-0 text-muted">Email</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-link underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
              <dt className="w-40 shrink-0 text-muted">Location</dt>
              <dd className="text-foreground">
                {site.location}, {site.region}
              </dd>
            </div>
          </dl>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
