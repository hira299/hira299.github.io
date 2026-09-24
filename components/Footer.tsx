import { email } from "@/data/social-links";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="brand">Hira Ahmed</p>
          <p>AI Engineer · AI Automation & QA · Karachi, Pakistan · Remote</p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <SocialLinks />
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Hira Ahmed</p>
    </footer>
  );
}
