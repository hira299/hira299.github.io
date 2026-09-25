import { siteConfig } from "./site-config";
import { profile } from "@/data/profile";
import { email, socialLinks } from "@/data/social-links";
import { services } from "@/data/services";
import { research } from "@/data/research";
import type { CaseStudy } from "@/data/case-studies";
import type { Service } from "@/data/services";
import type { FaqItem } from "./content";

type Node = Record<string, unknown>;

const base = siteConfig.url;
export const ids = {
  person: `${base}/#person`,
  website: `${base}/#website`,
};

const personRef = { "@id": ids.person };
const pageServices = services.filter((service) => service.hasPage);

function serviceId(service: Service) {
  return `${base}${service.href}#service`;
}

export function graph(...nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function personNode(): Node {
  return {
    "@type": "Person",
    "@id": ids.person,
    name: profile.name,
    url: `${base}/`,
    image: `${base}/og-image.png`,
    email: `mailto:${email}`,
    jobTitle: [profile.careerRole, profile.role],
    description: profile.identity,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
    worksFor: { "@type": "Organization", name: "TechPotion.ai" },
    knowsLanguage: profile.languages,
    knowsAbout: profile.knowsAbout,
    sameAs: socialLinks.map((link) => link.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freelance services",
      itemListElement: pageServices.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@id": serviceId(service) },
      })),
    },
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: `${base}/`,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: personRef,
  };
}

export function serviceNode(service: Service): Node {
  return {
    "@type": "Service",
    "@id": serviceId(service),
    name: service.seoTitle ?? service.title,
    serviceType: service.title,
    description: service.description,
    url: `${base}${service.href}`,
    provider: personRef,
    areaServed: "Worldwide",
  };
}

function webPageNode(type: string, path: string, name: string, description: string, extra: Node = {}): Node {
  return {
    "@type": type,
    "@id": `${base}${path}#webpage`,
    url: `${base}${path}`,
    name,
    description,
    isPartOf: { "@id": ids.website },
    inLanguage: "en",
    ...extra,
  };
}

function breadcrumbNode(path: string, trail: { name: string; path: string }[]): Node {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@type": "BreadcrumbList",
    "@id": `${base}${path}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

function researchNodes(): Node[] {
  const [sentinel, bench] = research;
  return [
    {
      "@type": "ScholarlyArticle",
      "@id": `${base}/#sentinel-mesh`,
      headline: sentinel.title,
      name: sentinel.title,
      url: `${base}/case-studies/sentinel-mesh/`,
      identifier: "https://doi.org/10.21203/rs.3.rs-10674271/v1",
      author: personRef,
      creativeWorkStatus: "Preprint, manuscript under review",
      sameAs: sentinel.links.filter((link) => link.label !== "Code").map((link) => link.href),
    },
    {
      "@type": "Dataset",
      "@id": `${base}/#cloudfix-bench`,
      name: bench.title,
      description: bench.summary,
      creator: personRef,
      identifier: "https://doi.org/10.5281/zenodo.20975067",
      url: "https://doi.org/10.5281/zenodo.20975067",
    },
  ];
}

export function siteJsonLd() {
  return graph(personNode(), websiteNode(), ...pageServices.map(serviceNode));
}

export function homeJsonLd() {
  return graph(
    webPageNode("ProfilePage", "/", siteConfig.title, siteConfig.description, {
      mainEntity: personRef,
      about: personRef,
    }),
    ...researchNodes(),
  );
}

export function aboutJsonLd(description: string) {
  return graph(
    webPageNode("AboutPage", "/about/", `About ${profile.name}`, description, {
      mainEntity: personRef,
      breadcrumb: { "@id": `${base}/about/#breadcrumb` },
    }),
    breadcrumbNode("/about/", [{ name: "About", path: "/about/" }]),
  );
}

export function servicePageJsonLd(service: Service) {
  return graph(
    webPageNode("WebPage", service.href, service.seoTitle ?? service.title, service.description, {
      about: { "@id": serviceId(service) },
      breadcrumb: { "@id": `${base}${service.href}#breadcrumb` },
    }),
    breadcrumbNode(service.href, [{ name: service.title, path: service.href }]),
  );
}

export function caseStudyJsonLd(study: CaseStudy, related: Service[]) {
  return graph(
    {
      "@type": "TechArticle",
      "@id": `${base}${study.href}#article`,
      headline: `${study.title} Case Study`,
      description: study.description,
      url: `${base}${study.href}`,
      author: personRef,
      publisher: personRef,
      isPartOf: { "@id": ids.website },
      inLanguage: "en",
      keywords: study.stack.join(", "),
      about:
        study.kind === "research"
          ? [{ "@id": `${base}/#sentinel-mesh` }, { "@id": `${base}/#cloudfix-bench` }]
          : related.filter((service) => service.hasPage).map((service) => ({ "@id": serviceId(service) })),
    },
    ...(study.kind === "research" ? researchNodes() : []),
    breadcrumbNode(study.href, [
      { name: "Case Studies", path: "/case-studies/" },
      { name: study.title, path: study.href },
    ]),
  );
}

export function researchJsonLd(description: string) {
  return graph(
    webPageNode("CollectionPage", "/research/", "Research", description, {
      about: [{ "@id": `${base}/#sentinel-mesh` }, { "@id": `${base}/#cloudfix-bench` }],
      breadcrumb: { "@id": `${base}/research/#breadcrumb` },
    }),
    ...researchNodes(),
    breadcrumbNode("/research/", [{ name: "Research", path: "/research/" }]),
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return graph(
    webPageNode("FAQPage", "/faq/", "FAQ", "Questions about n8n, AI agents, and SaaS QA.", {
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    }),
  );
}

export function collectionJsonLd(path: string, name: string, description: string, items: { name: string; url: string }[]) {
  return graph(
    webPageNode("CollectionPage", path, name, description, {
      breadcrumb: { "@id": `${base}${path}#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: item.url.startsWith("http") ? item.url : `${base}${item.url}`,
        })),
      },
    }),
    breadcrumbNode(path, [{ name, path }]),
  );
}
