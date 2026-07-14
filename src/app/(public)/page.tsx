import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  CheckCircle2,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MuseumScene } from "@/components/museum-scene";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import {
  featuredActivities,
  featuredRooms,
  mainServices,
} from "@/data/home";
import { getBaseUrl, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Descubrir es divertido",
  description:
    "Explora la propuesta educativa del Museo Infantil Trampolín y prepara una visita llena de ciencia, naturaleza, cultura y creatividad.",
  path: "/",
});

export default function HomePage() {
  const museumJsonLd = {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: siteConfig.name,
    description: siteConfig.description,
    url: getBaseUrl().toString(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santo Domingo",
      addressCountry: "DO",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(museumJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <div className="hero-kicker">
              <Sparkles aria-hidden="true" size={18} />
              <span>Aprender también puede sentirse como una aventura</span>
            </div>
            <h1>
              Un salto hacia el <em>conocimiento</em> y la diversión
            </h1>
            <p>
              Un espacio donde niñas, niños y familias exploran la ciencia, la
              naturaleza, la cultura y su propia creatividad jugando juntos.
            </p>
            <div className="button-row">
              <ButtonLink href="/reservaciones" showArrow>
                Reservar visita
              </ButtonLink>
              <ButtonLink href="/salas" variant="secondary">
                Explorar salas
              </ButtonLink>
              <ButtonLink href="/actividades" variant="ghost">
                Ver actividades
              </ButtonLink>
            </div>
            <ul className="hero-assurances" aria-label="Características de la experiencia">
              <li>
                <CheckCircle2 aria-hidden="true" /> Experiencia educativa
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Pensada para familias
              </li>
            </ul>
          </div>
          <div className="home-hero__visual">
            <MuseumScene />
            <div className="floating-note floating-note--science">
              <span aria-hidden="true">✦</span>
              <strong>Pregunta</strong>
              <small>Todo empieza con curiosidad</small>
            </div>
            <div className="floating-note floating-note--nature">
              <span aria-hidden="true">●</span>
              <strong>Explora</strong>
              <small>Aprende con tus sentidos</small>
            </div>
          </div>
        </div>
      </section>

      <Section className="section--rooms" labelledBy="rooms-title">
        <div className="section-heading-row">
          <SectionHeader
            id="rooms-title"
            eyebrow="Salas destacadas"
            title="Muchos mundos, un mismo lugar"
            description="Estas tarjetas están listas para conectarse al catálogo y a las páginas de detalle del módulo de Salas."
          />
          <ButtonLink href="/salas" variant="ghost" showArrow>
            Ver todas las salas
          </ButtonLink>
        </div>
        <div className="room-grid">
          {featuredRooms.map((room) => {
            const Icon = room.icon;
            return (
              <article
                key={room.title}
                className={`room-card room-card--${room.accent}`}
              >
                <div className="room-card__icon" aria-hidden="true">
                  <Icon />
                </div>
                <p className="room-card__eyebrow">{room.eyebrow}</p>
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <Link href={room.href}>
                  Explorar sala <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="section--activities" labelledBy="activities-title">
        <div className="activities-layout">
          <div>
            <SectionHeader
              id="activities-title"
              eyebrow="Actividades"
              title="Siempre hay algo por descubrir"
              description="Una muestra editorial preparada para recibir fechas, cupos y contenidos cuando el módulo de Actividades esté disponible."
            />
            <div className="preview-notice">
              <ShieldCheck aria-hidden="true" />
              <p>
                <strong>Contenido de muestra.</strong> No publicamos fechas ni
                cupos hasta recibir información oficial.
              </p>
            </div>
            <ButtonLink href="/actividades" variant="secondary" showArrow>
              Ir al calendario
            </ButtonLink>
          </div>
          <div className="activity-stack">
            {featuredActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <article key={activity.title} className="activity-card">
                  <div className="activity-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <div>
                    <span>{activity.category}</span>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                  </div>
                  <Link href={activity.href} aria-label={`Ver ${activity.title}`}>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="section--services" labelledBy="services-title">
        <SectionHeader
          id="services-title"
          eyebrow="Planifica con calma"
          title="Una experiencia clara desde el primer clic"
          description="La plataforma organiza la información esencial y mantiene visibles los datos que aún requieren confirmación."
          align="center"
        />
        <div className="service-grid">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card">
                <Icon aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="section--inclusion" labelledBy="inclusion-title">
        <div className="inclusion-banner">
          <div className="inclusion-banner__icon" aria-hidden="true">
            <Accessibility size={48} />
          </div>
          <div>
            <p className="eyebrow">Trampolín Inclusivo</p>
            <h2 id="inclusion-title">Cada visita comienza escuchando</h2>
            <p>
              Comparte las necesidades de tu familia o grupo. El museo podrá
              orientarte sobre los apoyos disponibles antes de la visita.
            </p>
          </div>
          <ButtonLink href="/trampolin-inclusivo" variant="secondary" showArrow>
            Conocer el compromiso
          </ButtonLink>
        </div>
      </Section>

      <Section className="section--visit" labelledBy="visit-title">
        <div className="visit-grid">
          <div>
            <p className="eyebrow">Visítanos</p>
            <h2 id="visit-title">En el corazón de la Zona Colonial</h2>
            <p className="visit-grid__lead">
              El museo desarrolla sus actividades dentro de Casa Rodrigo de
              Bastidas, un entorno histórico de Santo Domingo.
            </p>
            <div className="validation-box">
              <ShieldCheck aria-hidden="true" />
              <div>
                <strong>Horarios y contacto en validación</strong>
                <p>
                  Confirma la información antes de trasladarte. No mostramos
                  datos contradictorios de los bocetos como si fueran oficiales.
                </p>
              </div>
            </div>
            <div className="button-row">
              <ButtonLink href={siteConfig.mapUrl} external showArrow>
                Abrir Google Maps
              </ButtonLink>
              <ButtonLink href="/contacto" variant="secondary">
                Contactar
              </ButtonLink>
            </div>
          </div>
          <a
            className="map-preview"
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir ubicación del museo en Google Maps"
          >
            <span className="map-preview__grid" aria-hidden="true" />
            <MapPinned aria-hidden="true" size={56} />
            <strong>Casa Rodrigo de Bastidas</strong>
            <span>Zona Colonial · Santo Domingo</span>
          </a>
        </div>
      </Section>

      <Section className="section--final-cta" labelledBy="final-cta-title">
        <div className="final-cta">
          <div>
            <p className="eyebrow">Tu próxima aventura</p>
            <h2 id="final-cta-title">La curiosidad ya dio el primer salto</h2>
            <p>
              Explora el museo, resuelve tus dudas y prepara una experiencia
              educativa con información clara.
            </p>
          </div>
          <div className="button-row">
            <ButtonLink href="/conoce-el-museo" variant="secondary" showArrow>
              Conoce el museo
            </ButtonLink>
            <ButtonLink href="/reservaciones" showArrow>
              Reservar visita
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
