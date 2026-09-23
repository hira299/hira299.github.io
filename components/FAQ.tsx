import type { FaqItem } from "@/lib/content";

export function FAQ({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="section" aria-labelledby="faq-title">
      <h2 id="faq-title">{title}</h2>
      <dl className="faq-list">
        {items.map((item) => (
          <div key={item.q}>
            <dt>{item.q}</dt>
            <dd>{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
