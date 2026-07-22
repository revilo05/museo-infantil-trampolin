import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import styles from "@/components/module-two.module.css";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Migas de pan">
      <Container>
        <ol>
          {items.map((item, index) => {
            const current = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`}>
                {index > 0 ? <ChevronRight aria-hidden="true" size={15} /> : null}
                {item.href && !current ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span aria-current={current ? "page" : undefined}>{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
