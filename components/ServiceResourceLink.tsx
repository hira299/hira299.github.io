"use client";

export function ServiceResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
    >
      {label}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
