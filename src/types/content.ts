import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
  exact?: boolean;
};

export type FeaturedRoom = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: "blue" | "green" | "orange";
};

export type FeaturedActivity = {
  title: string;
  category: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type FAQCategory =
  | "Horarios"
  | "Tarifas"
  | "Visitas"
  | "Accesibilidad"
  | "Servicios"
  | "Contacto";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
};

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
  status: "verified" | "pending_validation";
  icon: LucideIcon;
};
