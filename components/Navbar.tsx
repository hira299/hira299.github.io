import Link from "next/link";

const links = [
  { href: "/n8n-automation/", label: "n8n" },
  { href: "/ai-agents/", label: "AI Agents" },
  { href: "/qa-testing/", label: "QA" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" className="brand">
          Hira Ahmed
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contact/" className="nav-cta">
              Hire Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
