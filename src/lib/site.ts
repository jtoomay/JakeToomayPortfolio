export const site = {
  name: "Jake Toomay",
  role: "Software Engineer",
  tagline: "I build fast, well-crafted software for the web.",
  description:
    "Portfolio of Jake Toomay, a software engineer focused on building fast, well-crafted products for the web.",
  url: "https://toomay.dev",
  email: "jake@toomay.dev",
  location: "United States",
  availability: "Open to opportunities",
  links: {
    github: "https://github.com/jaketoomay",
    linkedin: "https://linkedin.com/in/jaketoomay",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;
