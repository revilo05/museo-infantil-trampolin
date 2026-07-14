import {
  Atom,
  BookOpenText,
  CalendarDays,
  FlaskConical,
  Leaf,
  Orbit,
  Palette,
  Sparkles,
} from "lucide-react";
import type { FeaturedActivity, FeaturedRoom } from "@/types/content";

export const featuredRooms: FeaturedRoom[] = [
  {
    title: "Universo",
    eyebrow: "Ciencia y exploración",
    description:
      "Una invitación a mirar más lejos y convertir cada pregunta en un nuevo descubrimiento.",
    href: "/salas#universo",
    icon: Orbit,
    accent: "blue",
  },
  {
    title: "Biodiversidad",
    eyebrow: "Naturaleza dominicana",
    description:
      "Un espacio para reconocer la riqueza de la vida y aprender a cuidar nuestro entorno.",
    href: "/salas#biodiversidad",
    icon: Leaf,
    accent: "green",
  },
  {
    title: "Energía",
    eyebrow: "Experimentación",
    description:
      "Movimiento, luz y curiosidad se encuentran en experiencias para aprender haciendo.",
    href: "/salas#energia",
    icon: Atom,
    accent: "orange",
  },
];

export const featuredActivities: FeaturedActivity[] = [
  {
    title: "Ciencia que sorprende",
    category: "Experimento",
    description:
      "Actividades guiadas para observar, probar ideas y compartir hallazgos en familia.",
    href: "/actividades",
    icon: FlaskConical,
  },
  {
    title: "Crear con las manos",
    category: "Arte",
    description:
      "Propuestas que combinan imaginación, materiales cotidianos y expresión personal.",
    href: "/actividades",
    icon: Palette,
  },
  {
    title: "Historias para explorar",
    category: "Lectura",
    description:
      "Encuentros para escuchar, conversar y descubrir nuevas formas de ver el mundo.",
    href: "/actividades",
    icon: BookOpenText,
  },
];

export const mainServices = [
  {
    title: "Explora antes de venir",
    description: "Conoce la propuesta educativa y prepara la visita en familia.",
    icon: Sparkles,
  },
  {
    title: "Agenda una visita educativa",
    description:
      "El módulo de solicitudes para centros educativos se integrará en /reservaciones.",
    icon: CalendarDays,
  },
  {
    title: "Encuentra apoyo",
    description:
      "Cuéntanos las necesidades de tu grupo para orientar una visita más cómoda.",
    icon: Leaf,
  },
];
