import { ServiceTemplate } from "@/components/ServiceTemplate";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

const service = getService("api-testing");

export const metadata = buildMetadata({
  title: service.seoTitle ?? service.title,
  description: service.description,
  path: service.href,
});

export default function Page() {
  return <ServiceTemplate slug="api-testing" />;
}
