import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const contentRoot = path.join(process.cwd(), "content");

function readContentFile(...segments: string[]) {
  return fs.readFileSync(path.join(contentRoot, ...segments), "utf8");
}

export async function renderMdx(section: "case-studies" | "services", slug: string) {
  const source = readContentFile(section, `${slug}.mdx`);
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });
  return content;
}

export type FaqItem = { q: string; a: string };

export function getFaqItems(): FaqItem[] {
  const { data } = matter(readContentFile("faq", "faq.mdx"));
  return data.items as FaqItem[];
}
