import {
  Accessibility,
  Ear,
  Eye,
  HandHeart,
  HeartHandshake,
  MessageSquareText,
  PersonStanding,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Trampolín Inclusivo",
  description:
    "Conoce el compromiso de Trampolín con una experiencia más accesible y cómo solicitar orientación antes de la visita.",
  path: "/trampolin-inclusivo",
});

const principles = [
  {
    title: "Escuchar antes de la visita",
    description:
      "Cada persona y cada grupo pueden necesitar apoyos distintos. La planificación comienza con una conversación clara.",
    icon: Ear,
  },
  {
    title: "Comunicación comprensible",
    description:
      "La información debe ser directa, legible y adaptable al ritmo de quienes participan.",
    icon: MessageSquareText,
  },
  {
    title: "Acompañamiento humano",
    description:
      "El personal orienta sobre las condiciones disponibles y ayuda a preparar expectativas realistas.",
    icon: HeartHandshake,
  },
  {
    title: "Acceso por confirmar",
    description:
      "Las facilidades físicas concretas se confirman según el recorrido, la fecha y las condiciones del edificio histórico.",
    icon: PersonStanding,
  },
];

export default function InclusionPage() {
  return (
    <>
      <PageHero
        eyebrow="Un museo para todas las personas"
        title="La imaginación no debería encontrar barreras"
        description="Trampolín quiere que cada familia pueda prepararse con confianza. Por eso comunicamos el compromiso con la inclusión sin prometer apoyos que todavía no hayan sido confirmados para una visita específica."
        tone="green"
        actions={
          <>
            <ButtonLink href="/contacto?motivo=apoyo" showArrow>
              Solicitar orientación
            </ButtonLink>
            <ButtonLink href="#como-prepararnos" variant="secondary">
              Cómo prepararnos
            </ButtonLink>
          </>
        }
        aside={
          <div className="inclusion-illustration" aria-hidden="true">
            <div className="inclusion-illustration__center">
              <Accessibility size={64} />
            </div>
            <span className="inclusion-orbit inclusion-orbit--one">
              <Eye />
            </span>
            <span className="inclusion-orbit inclusion-orbit--two">
              <Ear />
            </span>
            <span className="inclusion-orbit inclusion-orbit--three">
              <HandHeart />
            </span>
          </div>
        }
      />

      <Section className="section--inclusion-principles" labelledBy="principles-title">
        <SectionHeader
          id="principles-title"
          eyebrow="Nuestro compromiso"
          title="Una visita se vuelve más accesible cuando se planifica contigo"
          description="Estos principios orientan la experiencia; los recursos específicos deben confirmarse con el museo."
          align="center"
        />
        <div className="inclusion-principles-grid">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title} className="inclusion-principle-card">
                <Icon aria-hidden="true" />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="como-prepararnos" className="section--support-plan" labelledBy="support-title">
        <div className="support-plan-grid">
          <div>
            <p className="eyebrow">Antes de venir</p>
            <h2 id="support-title">Cuéntanos qué haría la visita más cómoda</h2>
            <p className="support-plan-grid__lead">
              No necesitas conocer términos técnicos. Describe cómo participa la
              persona, qué situaciones le resultan difíciles y qué estrategias
              suelen ayudarle.
            </p>
            <div className="responsible-note">
              <ShieldCheck aria-hidden="true" />
              <p>
                <strong>Confirmación responsable.</strong> El museo responderá
                qué puede ofrecer para esa fecha. En esta web no damos por
                disponibles lengua de señas, ascensores, kits sensoriales u
                otros recursos sin validación institucional.
              </p>
            </div>
          </div>
          <ol className="support-steps">
            <li>
              <span>1</span>
              <div>
                <strong>Describe la necesidad</strong>
                <p>Movilidad, comunicación, sensibilidad, acompañamiento u otra condición relevante.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Indica la visita estimada</strong>
                <p>Fecha aproximada, tamaño del grupo y edades de quienes participan.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Espera la orientación</strong>
                <p>El equipo confirmará condiciones, límites y alternativas antes de tu llegada.</p>
              </div>
            </li>
          </ol>
        </div>
      </Section>

      <Section className="section--accessible-by-design" labelledBy="accessible-title">
        <div className="accessible-by-design">
          <div className="accessible-by-design__icon" aria-hidden="true">
            <Accessibility size={44} />
          </div>
          <div>
            <p className="eyebrow">Accesible desde la pantalla</p>
            <h2 id="accessible-title">Esta página también practica lo que comunica</h2>
            <p>
              Contraste claro, estructura semántica, foco visible, controles
              grandes y movimiento reducido cuando el dispositivo lo solicita.
            </p>
          </div>
          <ul>
            <li>Navegación por teclado</li>
            <li>Lectura estructurada</li>
            <li>Movimiento opcional</li>
          </ul>
        </div>
      </Section>

      <Section className="section--final-cta" labelledBy="inclusion-cta-title">
        <div className="final-cta final-cta--green">
          <div>
            <p className="eyebrow">Estamos para orientarte</p>
            <h2 id="inclusion-cta-title">Hablemos antes de la visita</h2>
            <p>Comparte las necesidades de tu familia o grupo mediante el canal disponible.</p>
          </div>
          <ButtonLink href="/contacto?motivo=apoyo" showArrow>
            Solicitar orientación
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
