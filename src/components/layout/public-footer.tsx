import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { navigationItems, siteConfig } from "@/data/site";

export function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__intro">
          <BrandMark />
          <p>
            Un lugar para convertir la curiosidad en una aventura compartida.
          </p>
          <a
            className="site-footer__location"
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" size={18} />
            <span>{siteConfig.location}</span>
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>

        <div>
          <h2>Explora</h2>
          <ul className="site-footer__links">
            {navigationItems.slice(0, 4).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Prepara tu visita</h2>
          <ul className="site-footer__links">
            {navigationItems.slice(4).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/reservaciones">Reservaciones</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__notice">
          <h2>Información responsable</h2>
          <p>{siteConfig.contactValidationNote}</p>
          <Link href="/contacto">Ver canales disponibles</Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Museo Infantil Trampolín.</p>
        <p>Descubre · Juega · Aprende</p>
      </div>
    </footer>
  );
}
