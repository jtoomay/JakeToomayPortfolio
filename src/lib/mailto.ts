import { site } from "./site";

export function contactMailto(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
