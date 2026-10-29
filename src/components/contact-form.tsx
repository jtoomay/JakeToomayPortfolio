"use client";

import { useState, type FormEvent } from "react";
import { contactMailto } from "@/lib/mailto";
import { site } from "@/lib/site";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const mailto = contactMailto(name, email, message);
    const link = document.createElement("a");
    link.href = mailto;
    link.hidden = true;
    document.body.appendChild(link);
    setOpened(true);
    link.click();
    link.remove();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-lg flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="border border-border bg-surface px-3 py-2 text-base text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="border border-border bg-surface px-3 py-2 text-base text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          className="border border-border bg-surface px-3 py-2 text-base text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-accent px-5 py-3 text-sm text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          Send email
        </button>
      </div>
      <p id="contact-note" className="text-sm leading-relaxed text-muted">
        Sending opens your email app with the message addressed to {site.email}.
        Toomay LLC does not store messages on this website.
      </p>
      {opened ? (
        <p role="status" className="text-sm text-foreground">
          Your email app should open with this message addressed to {site.email}.
        </p>
      ) : null}
    </form>
  );
}
