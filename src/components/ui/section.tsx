import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
};

export function Section({
  children,
  className = "",
  id,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section ${className}`.trim()}
    >
      <Container>{children}</Container>
    </section>
  );
}
