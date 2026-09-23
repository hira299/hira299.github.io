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
    "/faq/",
    "/contact/",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}${service.href}`,
      lastModified: new Date(),
    })),
    ...caseStudies.map((study) => ({
      url: `${siteConfig.url}${study.href}`,
      lastModified: new Date(),
    })),
  ];
}
