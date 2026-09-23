import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Hira Ahmed. AI Automation & QA Engineer.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
