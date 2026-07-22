import { slugify } from "@/lib/slugify";
import type { AtlasPosition } from "@/data/rooms";

export type ActivityCategory = "Talleres" | "Ciencia" | "Arte" | "Naturaleza";
export type CapacityStatus =
  | "available"
  | "last-spots"
  | "full"
  | "upcoming"
  | "cancelled";

export type ActivityAge =
  | "3 a 6 años"
  | "5 a 10 años"
  | "7 a 12 años"
  | "Todas las edades";

export interface Activity {
  id: string;
  slug: string;
  title: string;
  category: ActivityCategory;
  shortDescription: string;
  description: string;
  date: string;
  startTime: string | null;
  endTime: string | null;
  capacityStatus: CapacityStatus;
  cost: string | null;
  suggestedAge: ActivityAge;
  roomSlug: string | null;
  location: string | null;
  image: string;
  imageAlt: string;
  imagePosition: AtlasPosition;
  gallery: Array<{
    src: string;
    alt: string;
    position: AtlasPosition;
  }>;
  learningGoals: string[];
  recommendations: string[];
  featured: boolean;
  demonstrative: true;
}

const atlas = "/images/experience-atlas.png";

function activity(input: Omit<Activity, "slug" | "image" | "demonstrative">): Activity {
  return {
    ...input,
    slug: slugify(input.title),
    image: atlas,
    demonstrative: true,
  };
}

export const activities: Activity[] = [
  activity({
    id: "activity-bubbles",
    title: "Laboratorio de Burbujas Gigantes",
    category: "Ciencia",
    shortDescription:
      "Experimenta con mezclas, formas y superficies mientras creas burbujas sorprendentes.",
    description:
      "Un taller demostrativo para observar cómo se forman las burbujas, probar distintas herramientas y formular hipótesis sencillas sobre el aire y las superficies.",
    date: "2026-08-08",
    startTime: "10:00",
    endTime: "11:30",
    capacityStatus: "available",
    cost: null,
    suggestedAge: "5 a 10 años",
    roomSlug: "energia",
    location: "Ubicación por confirmar",
    imageAlt: "Niños crean una burbuja gigante en un laboratorio ilustrado",
    imagePosition: { column: 1, row: 2 },
    gallery: [
      {
        src: atlas,
        alt: "Taller ilustrado de burbujas gigantes",
        position: { column: 1, row: 2 },
      },
      {
        src: atlas,
        alt: "Estación ilustrada de energía y experimentación",
        position: { column: 2, row: 0 },
      },
      {
        src: atlas,
        alt: "Experimento ilustrado con agua",
        position: { column: 2, row: 3 },
      },
    ],
    learningGoals: [
      "Observar cómo una película líquida encierra aire.",
      "Comparar resultados al cambiar una variable.",
      "Comunicar predicciones y hallazgos.",
    ],
    recommendations: [
      "Usar ropa cómoda que pueda mojarse ligeramente.",
      "Llegar con anticipación una vez el horario sea confirmado.",
      "La participación de menores requiere acompañamiento responsable.",
    ],
    featured: true,
  }),
  activity({
    id: "activity-fossils",
    title: "Taller: Pintando el Pasado",
    category: "Arte",
    shortDescription:
      "Combina paleontología y arte al observar y pintar réplicas de fósiles.",
    description:
      "Una actividad demostrativa para mirar con atención formas inspiradas en fósiles, conversar sobre el pasado de la Tierra y crear una interpretación llena de color.",
    date: "2026-08-08",
    startTime: "14:00",
    endTime: "15:00",
    capacityStatus: "last-spots",
    cost: null,
    suggestedAge: "7 a 12 años",
    roomSlug: "planeta-tierra",
    location: "Ubicación por confirmar",
    imageAlt: "Niños pintan réplicas de fósiles en un taller ilustrado",
    imagePosition: { column: 2, row: 2 },
    gallery: [
      {
        src: atlas,
        alt: "Taller ilustrado de pintura sobre réplicas de fósiles",
        position: { column: 2, row: 2 },
      },
      {
        src: atlas,
        alt: "Modelo ilustrado de las capas de la Tierra",
        position: { column: 1, row: 0 },
      },
      {
        src: atlas,
        alt: "Espacio artístico ilustrado con formas y colores",
        position: { column: 3, row: 3 },
      },
    ],
    learningGoals: [
      "Observar formas y texturas con atención.",
      "Relacionar evidencia material con el pasado.",
      "Expresar una interpretación mediante el color.",
    ],
    recommendations: [
      "Usar ropa apta para actividades con pintura.",
      "Consultar disponibilidad antes de trasladarse.",
      "Los materiales se confirmarán con la programación oficial.",
    ],
    featured: true,
  }),
  activity({
    id: "activity-garden",
    title: "Exploradores del Huerto",
    category: "Naturaleza",
    shortDescription:
      "Descubre qué necesita una planta mientras cuidas un pequeño huerto educativo.",
    description:
      "Una experiencia demostrativa de observación, siembra y cuidado para reconocer las necesidades básicas de las plantas y valorar los ciclos naturales.",
    date: "2026-08-15",
    startTime: "09:30",
    endTime: "11:00",
    capacityStatus: "full",
    cost: null,
    suggestedAge: "5 a 10 años",
    roomSlug: "biodiversidad",
    location: "Ubicación por confirmar",
    imageAlt: "Niños siembran plantas en un huerto educativo ilustrado",
    imagePosition: { column: 3, row: 2 },
    gallery: [
      {
        src: atlas,
        alt: "Niños ilustrados sembrando en un huerto educativo",
        position: { column: 3, row: 2 },
      },
      {
        src: atlas,
        alt: "Bosque tropical ilustrado con flora y fauna",
        position: { column: 0, row: 1 },
      },
      {
        src: atlas,
        alt: "Experimento ilustrado sobre el cuidado del agua",
        position: { column: 2, row: 3 },
      },
    ],
    learningGoals: [
      "Reconocer qué necesitan las plantas para crecer.",
      "Practicar observación y cuidado responsable.",
      "Relacionar huertos y alimentación.",
    ],
    recommendations: [
      "La actividad puede incluir contacto con tierra y agua.",
      "Usar calzado cerrado y cómodo.",
      "Esta fecha demostrativa figura sin cupos; consulta otras actividades.",
    ],
    featured: true,
  }),
  activity({
    id: "activity-shadows",
    title: "Teatro de Luces y Sombras",
    category: "Talleres",
    shortDescription:
      "Crea personajes y relatos mientras investigas cómo viaja la luz.",
    description:
      "Una propuesta demostrativa que combina narración, formas y experimentación para descubrir qué ocurre cuando un objeto interrumpe el paso de la luz.",
    date: "2026-08-22",
    startTime: null,
    endTime: null,
    capacityStatus: "upcoming",
    cost: null,
    suggestedAge: "5 a 10 años",
    roomSlug: "biblioteca",
    location: null,
    imageAlt: "Niño crea figuras con luz y sombras en una ilustración",
    imagePosition: { column: 0, row: 3 },
    gallery: [
      {
        src: atlas,
        alt: "Escenario ilustrado de luz y sombras",
        position: { column: 0, row: 3 },
      },
      {
        src: atlas,
        alt: "Círculo ilustrado de narración infantil",
        position: { column: 1, row: 3 },
      },
      {
        src: atlas,
        alt: "Biblioteca infantil ilustrada",
        position: { column: 3, row: 1 },
      },
    ],
    learningGoals: [
      "Explorar la relación entre luz, objetos y sombras.",
      "Crear personajes con formas sencillas.",
      "Construir un relato de manera colaborativa.",
    ],
    recommendations: [
      "Horario e inscripción próximamente.",
      "La actividad final se confirmará en la agenda oficial.",
      "Se recomienda acompañamiento adulto para participantes menores.",
    ],
    featured: false,
  }),
  activity({
    id: "activity-stories",
    title: "Historias Bajo las Estrellas",
    category: "Arte",
    shortDescription:
      "Un encuentro de lectura e imaginación inspirado en el cielo nocturno.",
    description:
      "Una sesión demostrativa de lectura compartida para escuchar, imaginar y crear nuevas historias conectadas con las estrellas.",
    date: "2026-09-05",
    startTime: "16:00",
    endTime: "17:00",
    capacityStatus: "cancelled",
    cost: null,
    suggestedAge: "Todas las edades",
    roomSlug: "biblioteca",
    location: "Ubicación por confirmar",
    imageAlt: "Grupo infantil escucha cuentos en un círculo de lectura ilustrado",
    imagePosition: { column: 1, row: 3 },
    gallery: [
      {
        src: atlas,
        alt: "Círculo ilustrado de lectura y narración",
        position: { column: 1, row: 3 },
      },
      {
        src: atlas,
        alt: "Biblioteca infantil ilustrada con libros y asientos",
        position: { column: 3, row: 1 },
      },
      {
        src: atlas,
        alt: "Exhibición ilustrada del universo",
        position: { column: 0, row: 0 },
      },
    ],
    learningGoals: [
      "Escuchar e interpretar un relato.",
      "Relacionar imágenes con ideas propias.",
      "Participar respetando turnos de conversación.",
    ],
    recommendations: [
      "Esta fecha demostrativa aparece cancelada.",
      "Consulta la agenda para encontrar otra sesión.",
      "No se requiere realizar ninguna inscripción para esta fecha.",
    ],
    featured: false,
  }),
  activity({
    id: "activity-water",
    title: "Guardianes del Agua",
    category: "Ciencia",
    shortDescription:
      "Investiga cómo se filtra el agua y descubre maneras sencillas de cuidarla.",
    description:
      "Un experimento demostrativo para comparar materiales, observar un proceso de filtración y conversar sobre el valor del agua limpia.",
    date: "2026-09-12",
    startTime: "10:00",
    endTime: "11:15",
    capacityStatus: "available",
    cost: null,
    suggestedAge: "7 a 12 años",
    roomSlug: "ecologia",
    location: "Ubicación por confirmar",
    imageAlt: "Niños realizan un experimento ilustrado de filtración de agua",
    imagePosition: { column: 2, row: 3 },
    gallery: [
      {
        src: atlas,
        alt: "Experimento ilustrado de filtración de agua",
        position: { column: 2, row: 3 },
      },
      {
        src: atlas,
        alt: "Estación ilustrada de reciclaje y cuidado ambiental",
        position: { column: 3, row: 0 },
      },
      {
        src: atlas,
        alt: "Modelo ilustrado del planeta Tierra",
        position: { column: 1, row: 0 },
      },
    ],
    learningGoals: [
      "Observar una filtración sencilla.",
      "Comparar las propiedades de distintos materiales.",
      "Identificar hábitos responsables de uso del agua.",
    ],
    recommendations: [
      "Esta actividad utiliza datos y fechas demostrativas.",
      "Consultar la programación oficial antes de asistir.",
      "Usar ropa cómoda para experimentar con agua.",
    ],
    featured: true,
  }),
  activity({
    id: "activity-discovery",
    title: "Reto: Museo en Movimiento",
    category: "Talleres",
    shortDescription:
      "Resuelve desafíos de formas, equilibrio y recorrido en equipo.",
    description:
      "Una experiencia demostrativa de exploración corporal y espacial con retos sencillos que invitan a observar, colaborar y probar nuevas soluciones.",
    date: "2026-09-19",
    startTime: null,
    endTime: null,
    capacityStatus: "upcoming",
    cost: null,
    suggestedAge: "3 a 6 años",
    roomSlug: null,
    location: null,
    imageAlt: "Niñas exploran una instalación de formas coloridas en una ilustración",
    imagePosition: { column: 3, row: 3 },
    gallery: [
      {
        src: atlas,
        alt: "Instalación educativa ilustrada de formas y movimiento",
        position: { column: 3, row: 3 },
      },
      {
        src: atlas,
        alt: "Taller ilustrado de luz y sombras",
        position: { column: 0, row: 3 },
      },
      {
        src: atlas,
        alt: "Estación ilustrada de energía y circuitos",
        position: { column: 2, row: 0 },
      },
    ],
    learningGoals: [
      "Explorar equilibrio, espacio y movimiento.",
      "Probar distintas soluciones a un reto.",
      "Colaborar y comunicar decisiones.",
    ],
    recommendations: [
      "Horario e inscripción próximamente.",
      "Usar ropa y calzado cómodos.",
      "La configuración final se confirmará con el museo.",
    ],
    featured: false,
  }),
];

export const activityDataNotice =
  "Fechas, horarios, ubicaciones, costos y cupos son datos demostrativos pendientes de validación institucional.";

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((item) => item.slug === slug);
}
