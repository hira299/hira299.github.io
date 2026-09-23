"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/n8n-automation/", label: "n8n" },
  { href: "/ai-agents/", label: "AI Agents" },
  { href: "/qa-testing/", label: "QA" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
];

export function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-links"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        <span className="nav-toggle-bars" aria-hidden="true" />
      </button>
      <ul id="primary-links" className="nav-links" data-open={open}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact/" className="nav-cta" aria-current={pathname === "/contact/" ? "page" : undefined}>
            Hire Me
          </Link>
        </li>
      </ul>
    </>
  );
}
