import Link from "next/link";
import { email } from "@/data/social-links";
import { services } from "@/data/services";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const servicePages = services.filter((service) => service.hasPage);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="brand">Hira Ahmed</p>
          <p>AI Automation & QA Engineer · Karachi, Pakistan · Remote</p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <nav aria-label="Services">
          <ul className="footer-links">
            {servicePages.map((service) => (
              <li key={service.slug}>
                <Link href={service.href}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Hira Ahmed</p>
    </footer>
  );
}
