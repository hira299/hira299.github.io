import { ServiceTemplate } from "@/components/ServiceTemplate";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

const service = getService("multitenant-qa");

export const metadata = buildMetadata({
  title: service.seoTitle ?? service.title,
  description: service.description,
  path: service.href,
});

export default function Page() {
  return <ServiceTemplate slug="multitenant-qa" />;
}
