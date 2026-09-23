import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseStudy } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";

const study = getCaseStudy("n8n-email-agent");

export const metadata = buildMetadata({
  title: `${study.title} Case Study`,
  description: study.description,
  path: study.href,
});

export default function Page() {
  return <CaseStudyTemplate slug="n8n-email-agent" />;
}
