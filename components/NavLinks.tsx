"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { navMenus } from "@/data/navigation";

const DESKTOP_QUERY = "(min-width: 821px)";

function activeMenuFor(pathname: string) {
  let best: { id: string; length: number } | null = null;
  for (const menu of navMenus) {
    for (const prefix of menu.match) {
      if (pathname.startsWith(prefix) && (!best || prefix.length > best.length)) {
        best = { id: menu.id, length: prefix.length };
      }
    }
  }
  return best?.id ?? null;
}

export function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPointer = useRef<string | null>(null);

  const closeAll = useCallback(() => {
    setOpen(false);
    setOpenMenu(null);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    if (!open && !openMenu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAll();
    };
    const onPointer = (event: PointerEvent) => {
      const header = listRef.current?.closest("nav");
      if (header && !header.contains(event.target as Node)) closeAll();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, openMenu, closeAll]);

  const isDesktopHover = (event: ReactPointerEvent) =>
    event.pointerType === "mouse" && window.matchMedia(DESKTOP_QUERY).matches;

  const hoverOpen = (id: string) => (event: ReactPointerEvent) => {
    if (!isDesktopHover(event)) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(id);
  };

  const hoverClose = (event: ReactPointerEvent) => {
    if (!isDesktopHover(event)) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };

  const activeMenu = activeMenuFor(pathname);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-links"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        <span className="nav-toggle-bars" aria-hidden="true" />
      </button>
      <ul id="primary-links" ref={listRef} className="nav-links" data-open={open}>
        {navMenus.map((menu) => {
          const expanded = openMenu === menu.id;
          const compact = menu.groups.length === 1;
          return (
            <li
              key={menu.id}
              className={compact ? "nav-item compact" : "nav-item"}
              onPointerEnter={hoverOpen(menu.id)}
              onPointerLeave={hoverClose}
            >
              <button
                type="button"
                className="nav-trigger"
                aria-expanded={expanded}
                aria-controls={`menu-${menu.id}`}
                data-current={activeMenu === menu.id || undefined}
                onPointerDown={(event) => {
                  lastPointer.current = event.pointerType;
                }}
                onClick={() => {
                  const hoverOpened = lastPointer.current === "mouse" && window.matchMedia(DESKTOP_QUERY).matches;
                  lastPointer.current = null;
                  setOpenMenu((value) => (hoverOpened || value !== menu.id ? menu.id : null));
                }}
              >
                {menu.label}
                <span className="nav-chevron" aria-hidden="true" />
              </button>
              <div id={`menu-${menu.id}`} className="mega" data-open={expanded} data-cols={menu.groups.length}>
                <div className="mega-grid">
                  {menu.groups.map((group) => (
                    <div key={group.title} className="mega-group">
                      {compact ? null : (
                        <p className="mega-title">
                          <Link href={group.href} onClick={closeAll}>
                            {group.title}
                          </Link>
                        </p>
                      )}
                      <ul>
                        {group.links.map((link) => (
                          <li key={`${link.href}-${link.label}`}>
                            <Link
                              href={link.href}
                              className="mega-link"
                              aria-current={link.href === pathname ? "page" : undefined}
                              onClick={closeAll}
                            >
                              <span>{link.label}</span>
                              {link.description ? <span className="mega-desc">{link.description}</span> : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {group.topics ? <p className="mega-topics">{group.topics.join(" · ")}</p> : null}
                    </div>
                  ))}
                </div>
                {menu.footer ? (
                  <p className="mega-footer">
                    {menu.footer.map((link) => (
                      <Link key={link.href} href={link.href} onClick={closeAll}>
                        {link.label} →
                      </Link>
                    ))}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
        <li>
          <Link
            href="/contact/"
            className="nav-cta"
            aria-current={pathname === "/contact/" ? "page" : undefined}
            onClick={closeAll}
          >
            Hire Me
          </Link>
        </li>
      </ul>
    </>
  );
}
