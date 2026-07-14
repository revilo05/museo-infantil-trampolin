import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "blue" | "green" | "yellow";
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  tone = "blue",
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <Container className="page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
          {actions ? <div className="button-row">{actions}</div> : null}
        </div>
        {aside ? <div className="page-hero__aside">{aside}</div> : null}
      </Container>
    </section>
  );
}
