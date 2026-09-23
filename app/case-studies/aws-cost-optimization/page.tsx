import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseStudy } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";

const study = getCaseStudy("aws-cost-optimization");

export const metadata = buildMetadata({
  title: `${study.title} Case Study`,
  description: study.description,
  path: study.href,
});

export default function Page() {
  return <CaseStudyTemplate slug="aws-cost-optimization" />;
}
