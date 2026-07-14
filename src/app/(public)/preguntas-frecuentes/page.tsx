import { HelpCircle, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import { FAQExplorer } from "@/components/faq/faq-explorer";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { faqItems } from "@/data/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Preguntas frecuentes",
  description:
    "Encuentra respuestas sobre horarios, tarifas, visitas, accesibilidad, servicios y contacto del Museo Infantil Trampolín.",
  path: "/preguntas-frecuentes",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Respuestas para planificar mejor"
        title="¿Cómo podemos ayudarte?"
        description="Busca por palabra o explora las categorías. Cuando un dato todavía no está confirmado, lo indicamos claramente en lugar de publicar información provisional."
        tone="blue"
        actions={
          <ButtonLink href="#preguntas" showArrow>
            Explorar preguntas
          </ButtonLink>
        }
        aside={
          <div className="faq-hero-card">
            <MessageCircleQuestion aria-hidden="true" size={46} />
            <strong>Información clara</strong>
            <p>Respuestas breves, categorías útiles y datos responsables.</p>
            <span>
              <ShieldCheck aria-hidden="true" size={16} /> Contenido revisable
            </span>
          </div>
        }
      />

      <Section id="preguntas" className="section--faq" labelledBy="faq-title">
        <div className="sr-only">
          <h2 id="faq-title">Listado de preguntas frecuentes</h2>
        </div>
        <FAQExplorer items={faqItems} />
      </Section>

      <Section className="section--faq-contact" labelledBy="faq-contact-title">
        <div className="faq-contact-card">
          <div className="faq-contact-card__icon" aria-hidden="true">
            <HelpCircle size={38} />
          </div>
          <div>
            <h2 id="faq-contact-title">¿No encontraste lo que buscabas?</h2>
            <p>
              Envíanos tu consulta. Si el canal de correo aún no está disponible,
              te lo diremos sin simular que el mensaje fue enviado.
            </p>
          </div>
          <ButtonLink href="/contacto" variant="secondary" showArrow>
            Ir a Contacto
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
