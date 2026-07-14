import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  showArrow = false,
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `button button--${variant} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {content}
        <span className="sr-only"> (abre en una pestaña nueva)</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
