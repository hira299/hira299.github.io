import { socialLinks, type SocialLink } from "@/data/social-links";

export function SocialLinks({ kinds }: { kinds?: SocialLink["kind"][] }) {
  const links = kinds ? socialLinks.filter((link) => kinds.includes(link.kind)) : socialLinks;

  return (
    <ul className="social-links">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
