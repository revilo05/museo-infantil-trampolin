"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navigationItems } from "@/data/site";

function isActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PublicHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-header__brand" href="/">
          <BrandMark />
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              className="desktop-nav__link"
              href={item.href}
              aria-current={
                isActive(pathname, item.href, item.exact) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button--primary site-header__cta" href="/reservaciones">
          Reservar visita
        </Link>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="mobile-navigation-shell">
          <button
            className="mobile-navigation-backdrop"
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpenPath(null)}
          />
          <aside
            ref={drawerRef}
            id="mobile-navigation"
            className="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
          >
            <div className="mobile-navigation__header">
              <BrandMark compact />
              <button
                className="icon-button"
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpenPath(null)}
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Navegación móvil">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  className="mobile-navigation__link"
                  href={item.href}
                  onClick={() => setOpenPath(null)}
                  aria-current={
                    isActive(pathname, item.href, item.exact)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="button button--primary button--full"
                href="/reservaciones"
                onClick={() => setOpenPath(null)}
              >
                Reservar visita
              </Link>
            </nav>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
