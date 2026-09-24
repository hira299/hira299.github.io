import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseStudy } from "@/data/case-studies";
import { buildMetadata } from "@/lib/metadata";

const study = getCaseStudy("sentinel-mesh");

export const metadata = buildMetadata({
  title: "Sentinel-Mesh Research Case Study: Verified Cloud Remediation",
  description: study.description,
  path: study.href,
});

export default function Page() {
  return <CaseStudyTemplate slug="sentinel-mesh" />;
}
