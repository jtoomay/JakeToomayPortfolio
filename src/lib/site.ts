export const site = {
  name: "Toomay LLC",
  headline: "Custom software development.",
  subheadline:
    "Toomay LLC builds high-quality applications for iOS, Android, web, and desktop.",
  description:
    "Toomay LLC is a software development company in Overland Park, Kansas. We build high-quality applications for iOS, Android, web, and desktop.",
  url: "https://toomay.dev",
  email: "jake@toomay.dev",
  location: "Overland Park, Kansas",
  region: "Kansas City area, United States",
} as const;

export const nav = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const services = [
  {
    name: "iOS app development",
    detail: "Native applications for iPhone and iPad.",
  },
  {
    name: "Android app development",
    detail: "Applications for Android phones and tablets.",
  },
  {
    name: "Web applications",
    detail: "Software that runs in the browser, built for daily use.",
  },
  {
    name: "Desktop software",
    detail: "Applications for macOS, Windows, and Linux.",
  },
  {
    name: "Custom software",
    detail: "Applications designed around a specific product or workflow.",
  },
] as const;
