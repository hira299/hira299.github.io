import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about/",
    "/projects/",
    "/case-studies/",
    "/research/",
    "/faq/",
    "/contact/",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path || "/"}`,
    })),
    ...services.filter((service) => service.hasPage).map((service) => ({
      url: `${siteConfig.url}${service.href}`,
    })),
    ...caseStudies.map((study) => ({
      url: `${siteConfig.url}${study.href}`,
    })),
  ];
}
