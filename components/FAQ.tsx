const faqs = [
  {
    q: "What kind of work do you take on?",
    a: "Production n8n automation, AI agents, API integrations, backend/API testing, and multi-tenant B2B SaaS QA.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. Remote and international projects are the default.",
  },
  {
    q: "Can you share client names?",
    a: "Only when explicitly authorized. Many engagements are described anonymously to protect confidentiality.",
  },
  {
    q: "Do you build demos or production systems?",
    a: "Production systems. Workflows are designed for real data, failures, state, and integrations.",
  },
];

export function FAQ({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <section className="section">
      <h2>FAQ</h2>
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
