import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Research } from "@/components/Research";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: profile.shortBio,
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <p className="eyebrow">About</p>
        <h1>{profile.name}</h1>
        <p className="lede">{profile.role}</p>
        <p className="prose">{profile.longBio}</p>
        <p className="support">
          Based in {profile.location}. {profile.workPreference}.
        </p>
        <SocialLinks />
      </section>
      <ExperienceTimeline />
      <Research />
    </>
  );
}
