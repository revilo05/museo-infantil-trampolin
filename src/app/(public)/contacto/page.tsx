import { Suspense } from "react";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { contactChannels, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Consulta la ubicación del Museo Infantil Trampolín y utiliza el formulario para solicitar orientación.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Tu visita empieza con información clara"
        description="Encuentra la ubicación validada y consulta el estado de cada canal. Los datos pendientes se muestran como tales para evitar mensajes o llamadas a contactos incorrectos."
        tone="yellow"
        actions={
          <>
            <ButtonLink href="#formulario" showArrow>
              Enviar una consulta
            </ButtonLink>
            <ButtonLink href={siteConfig.mapUrl} variant="secondary" external>
              Abrir Google Maps
            </ButtonLink>
          </>
        }
        aside={
          <div className="contact-hero-card">
            <MapPin aria-hidden="true" size={46} />
            <span>Ubicación confirmada</span>
            <strong>Casa Rodrigo de Bastidas</strong>
            <p>Zona Colonial, Santo Domingo</p>
          </div>
        }
      />

      <Section className="section--contact-channels" labelledBy="channels-title">
        <div className="contact-section-heading">
          <div>
            <p className="eyebrow">Canales de contacto</p>
            <h2 id="channels-title">Sabemos qué está listo y qué falta confirmar</h2>
          </div>
          <div className="validation-legend">
            <ShieldCheck aria-hidden="true" />
            <span>Validación institucional en progreso</span>
          </div>
        </div>
        <div className="contact-channel-grid">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <>
                <div className="contact-channel__icon" aria-hidden="true">
                  <Icon />
                </div>
                <div>
                  <span>{channel.label}</span>
                  <strong>{channel.value}</strong>
                  <small>
                    {channel.status === "verified" ? "Dato validado" : "Pendiente de validación"}
                  </small>
                </div>
                {channel.href ? <ArrowUpRight aria-hidden="true" size={18} /> : null}
              </>
            );

            return channel.href ? (
              <a
                key={channel.label}
                className="contact-channel contact-channel--link"
                href={channel.href}
                target="_blank"
                rel="noreferrer"
              >
                {content}
                <span className="sr-only"> (abre en una pestaña nueva)</span>
              </a>
            ) : (
              <div key={channel.label} className="contact-channel contact-channel--pending">
                {content}
              </div>
            );
          })}
        </div>
      </Section>

      <Section id="formulario" className="section--contact-form" labelledBy="form-title">
        <div className="contact-form-layout">
          <div className="contact-form-copy">
            <p className="eyebrow">Formulario de contacto</p>
            <h2 id="form-title">Cuéntanos cómo podemos orientarte</h2>
            <p>
              La validación funciona desde ahora. El envío real quedará activado
              cuando el proyecto seleccione y configure un proveedor transaccional.
            </p>
            <ul>
              <li>Validación de campos en cliente y servidor</li>
              <li>Mensajes asociados a cada entrada</li>
              <li>Estado explícito cuando el canal no está configurado</li>
            </ul>
          </div>
          <Suspense fallback={<div className="form-skeleton" aria-label="Cargando formulario" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Section>

      <Section className="section--map" labelledBy="map-title">
        <div className="map-section-heading">
          <div>
            <p className="eyebrow">Ubicación</p>
            <h2 id="map-title">Encuéntranos en la Zona Colonial</h2>
            <p>{siteConfig.location}</p>
          </div>
          <ButtonLink href={siteConfig.mapUrl} external variant="secondary" showArrow>
            Ver indicaciones
          </ButtonLink>
        </div>
        <div className="map-embed">
          <iframe
            title="Mapa de Casa Rodrigo de Bastidas en Santo Domingo"
            src="https://www.google.com/maps?q=Casa%20Rodrigo%20de%20Bastidas%20Santo%20Domingo&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Section>
    </>
  );
}
