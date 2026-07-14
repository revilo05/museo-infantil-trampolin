import {
  AtSign,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { ContactChannel, NavigationItem } from "@/types/content";

export const siteConfig = {
  name: "Museo Infantil Trampolín",
  shortName: "Trampolín",
  description:
    "Una experiencia educativa para descubrir, jugar y aprender en Santo Domingo.",
  location: "Casa Rodrigo de Bastidas, Zona Colonial, Santo Domingo",
  country: "República Dominicana",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Casa+Rodrigo+de+Bastidas+Zona+Colonial+Santo+Domingo",
  contactValidationNote:
    "Los datos de contacto y horarios están siendo validados con el museo.",
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "Inicio", href: "/", exact: true },
  { label: "Conoce", href: "/conoce-el-museo" },
  { label: "Salas", href: "/salas" },
  { label: "Actividades", href: "/actividades" },
  { label: "Inclusión", href: "/trampolin-inclusivo" },
  { label: "FAQ", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Ubicación",
    value: siteConfig.location,
    href: siteConfig.mapUrl,
    status: "verified",
    icon: MapPin,
  },
  {
    label: "Horarios",
    value: "En proceso de validación",
    status: "pending_validation",
    icon: Clock3,
  },
  {
    label: "Teléfono",
    value: "En proceso de validación",
    status: "pending_validation",
    icon: Phone,
  },
  {
    label: "Correo",
    value: "En proceso de validación",
    status: "pending_validation",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Disponible al confirmar el número oficial",
    status: "pending_validation",
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: "Disponible al confirmar la cuenta oficial",
    status: "pending_validation",
    icon: AtSign,
  },
];

export const getBaseUrl = () =>
  new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
