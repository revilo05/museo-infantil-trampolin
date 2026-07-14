import type { LucideIcon } from "lucide-react";
import { Boxes, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";

type IntegrationPlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  owner: string;
  icon: LucideIcon;
  contractItems: string[];
};

export function IntegrationPlaceholder({
  eyebrow,
  title,
  description,
  owner,
  icon: Icon,
  contractItems,
}: IntegrationPlaceholderProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="blue"
        actions={
          <>
            <ButtonLink href="/" showArrow>
              Volver al inicio
            </ButtonLink>
            <ButtonLink href="/contacto" variant="secondary">
              Contactar
            </ButtonLink>
          </>
        }
        aside={
          <div className="integration-hero-card">
            <Icon aria-hidden="true" size={48} />
            <span>Contrato de integración</span>
            <strong>Módulo preparado</strong>
            <p>Esta ruta existe para coordinar el trabajo sin duplicar funcionalidades.</p>
          </div>
        }
      />
      <Section className="section--integration" labelledBy="integration-title">
        <div className="integration-card">
          <div className="integration-card__icon" aria-hidden="true">
            <Boxes />
          </div>
          <div>
            <p className="eyebrow">Límite de alcance</p>
            <h2 id="integration-title">Listo para conectarse al módulo responsable</h2>
            <p>
              Esta entrega implementa el enlace, la ruta y las expectativas de
              datos, pero no el catálogo, calendario ni proceso operativo.
            </p>
            <ul>
              {contractItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <p className="integration-card__owner">
              <strong>Responsable funcional:</strong> {owner}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
