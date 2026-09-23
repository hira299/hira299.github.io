import Link from "next/link";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            H
          </span>
          Hira Ahmed
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
