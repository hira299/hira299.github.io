import { socialLinks } from "@/data/social-links";

export function SocialLinks() {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
