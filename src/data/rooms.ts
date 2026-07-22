import { slugify } from "@/lib/slugify";

export type AtlasPosition = {
  column: 0 | 1 | 2 | 3;
  row: 0 | 1 | 2 | 3;
};

export type ExperienceImage = {
  src: string;
  alt: string;
  position: AtlasPosition;
};

export type RoomCategory =
  | "Ciencia"
  | "Naturaleza"
  | "Física"
  | "Medio ambiente"
  | "Fauna y flora"
  | "Historia y cultura"
  | "Juego de rol"
  | "Lectura y arte"
  | "Biología";

export type RoomAge =
  | "3 a 6 años"
  | "5 a 9 años"
  | "6 a 12 años"
  | "Todas las edades";

export interface Room {
  id: string;
  slug: string;
  name: string;
  category: RoomCategory;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: AtlasPosition;
  suggestedAge: RoomAge;
  duration: string | null;
  featured: boolean;
  gallery: ExperienceImage[];
  learningGoals: string[];
  facts: string[];
}

const atlas = "/images/experience-atlas.png";

function room(input: Omit<Room, "slug" | "image">): Room {
  return { ...input, slug: slugify(input.name), image: atlas };
}

export const rooms: Room[] = [
  room({
    id: "room-universe",
    name: "Universo",
    category: "Ciencia",
    shortDescription:
      "Explora los misterios del cosmos, las constelaciones y nuestro sistema solar.",
    description:
      "Una experiencia para mirar más allá de nuestro planeta, formular preguntas sobre el espacio y reconocer los cuerpos que componen el sistema solar.",
    imageAlt:
      "Niñas y niños observan planetas en una exhibición ilustrada del universo",
    imagePosition: { column: 0, row: 0 },
    suggestedAge: "6 a 12 años",
    duration: "Consultar",
    featured: true,
    gallery: [
      {
        src: atlas,
        alt: "Recorrido ilustrado por una exhibición de planetas",
        position: { column: 0, row: 0 },
      },
      {
        src: atlas,
        alt: "Estación educativa ilustrada sobre energía",
        position: { column: 2, row: 0 },
      },
      {
        src: atlas,
        alt: "Instalación artística ilustrada para explorar formas y órbitas",
        position: { column: 3, row: 3 },
      },
    ],
    learningGoals: [
      "Reconocer planetas y otros cuerpos celestes.",
      "Relacionar la observación con preguntas científicas.",
      "Comprender que la Tierra forma parte de un sistema mayor.",
    ],
    facts: [
      "La luz del Sol tarda cerca de ocho minutos en llegar a la Tierra.",
      "Saturno no es el único planeta que tiene anillos.",
      "Una constelación es una forma imaginada al unir estrellas desde nuestra perspectiva.",
    ],
  }),
  room({
    id: "room-earth",
    name: "Planeta Tierra",
    category: "Naturaleza",
    shortDescription:
      "Descubre ecosistemas y fenómenos naturales que hacen único a nuestro planeta.",
    description:
      "Un recorrido por las capas de la Tierra, el agua, el clima y los procesos naturales que transforman continuamente nuestro hogar.",
    imageAlt:
      "Niñas y niños exploran un modelo ilustrado de las capas de la Tierra",
    imagePosition: { column: 1, row: 0 },
    suggestedAge: "5 a 9 años",
    duration: "Consultar",
    featured: true,
    gallery: [
      {
        src: atlas,
        alt: "Modelo ilustrado de las capas del planeta Tierra",
        position: { column: 1, row: 0 },
      },
      {
        src: atlas,
        alt: "Actividad ilustrada sobre el cuidado del agua",
        position: { column: 2, row: 3 },
      },
      {
        src: atlas,
        alt: "Niños ilustrados aprendiendo sobre reciclaje",
        position: { column: 3, row: 0 },
      },
    ],
    learningGoals: [
      "Identificar las principales capas de la Tierra.",
      "Observar cómo el agua y el clima modelan el paisaje.",
      "Relacionar los recursos naturales con acciones de cuidado.",
    ],
    facts: [
      "La mayor parte de la superficie terrestre está cubierta por agua.",
      "Las rocas guardan pistas sobre la historia del planeta.",
      "El agua cambia de estado y circula continuamente.",
    ],
  }),
  room({
    id: "room-energy",
    name: "Energía",
    category: "Física",
    shortDescription:
      "Interactúa con fuentes de energía y comprende cómo ponen el mundo en movimiento.",
    description:
      "Una sala para experimentar con luz, electricidad y movimiento mediante retos sencillos que conectan la física con la vida diaria.",
    imageAlt:
      "Niños experimentan con circuitos y energías renovables en una ilustración",
    imagePosition: { column: 2, row: 0 },
    suggestedAge: "6 a 12 años",
    duration: "Consultar",
    featured: true,
    gallery: [
      {
        src: atlas,
        alt: "Estación ilustrada de circuitos y energía renovable",
        position: { column: 2, row: 0 },
      },
      {
        src: atlas,
        alt: "Experimento ilustrado de luz y sombras",
        position: { column: 0, row: 3 },
      },
      {
        src: atlas,
        alt: "Taller científico ilustrado con burbujas gigantes",
        position: { column: 1, row: 2 },
      },
    ],
    learningGoals: [
      "Distinguir algunas formas de energía.",
      "Explorar relaciones sencillas entre causa y efecto.",
      "Reconocer usos responsables de la electricidad.",
    ],
    facts: [
      "La energía puede transformarse de una forma a otra.",
      "El Sol es una fuente de luz y calor.",
      "Un circuito necesita un recorrido cerrado para funcionar.",
    ],
  }),
  room({
    id: "room-ecology",
    name: "Ecología",
    category: "Medio ambiente",
    shortDescription:
      "Aprende por qué reciclar y cuidar los recursos ayuda a nuestro entorno.",
    description:
      "Un espacio para observar cómo nuestras decisiones cotidianas se conectan con el ambiente y descubrir acciones sencillas para reducir residuos.",
    imageAlt:
      "Niños separan residuos en contenedores de reciclaje ilustrados",
    imagePosition: { column: 3, row: 0 },
    suggestedAge: "5 a 9 años",
    duration: "Consultar",
    featured: false,
    gallery: [
      {
        src: atlas,
        alt: "Estación ilustrada para clasificar residuos",
        position: { column: 3, row: 0 },
      },
      {
        src: atlas,
        alt: "Actividad ilustrada de conservación del agua",
        position: { column: 2, row: 3 },
      },
      {
        src: atlas,
        alt: "Huerto educativo ilustrado con niños plantando",
        position: { column: 3, row: 2 },
      },
    ],
    learningGoals: [
      "Clasificar materiales reutilizables y reciclables.",
      "Relacionar hábitos diarios con su impacto ambiental.",
      "Proponer pequeñas acciones de cuidado colectivo.",
    ],
    facts: [
      "Reutilizar alarga la vida útil de muchos objetos.",
      "Separar correctamente ayuda a recuperar materiales.",
      "Reducir el consumo suele generar menos residuos que reciclarlos después.",
    ],
  }),
  room({
    id: "room-biodiversity",
    name: "Biodiversidad",
    category: "Fauna y flora",
    shortDescription:
      "Sumérgete en la riqueza de especies animales y vegetales que comparten el planeta.",
    description:
      "Una experiencia para reconocer la variedad de la vida, sus relaciones y la importancia de proteger los ecosistemas del Caribe y del mundo.",
    imageAlt:
      "Niña observa animales y plantas en un bosque tropical ilustrado",
    imagePosition: { column: 0, row: 1 },
    suggestedAge: "Todas las edades",
    duration: "Consultar",
    featured: true,
    gallery: [
      {
        src: atlas,
        alt: "Bosque tropical ilustrado con diversidad de plantas y animales",
        position: { column: 0, row: 1 },
      },
      {
        src: atlas,
        alt: "Niños ilustrados cuidando un huerto educativo",
        position: { column: 3, row: 2 },
      },
      {
        src: atlas,
        alt: "Estación ilustrada sobre el cuidado del planeta",
        position: { column: 3, row: 0 },
      },
    ],
    learningGoals: [
      "Reconocer que los seres vivos se relacionan entre sí.",
      "Valorar especies y ambientes del Caribe.",
      "Comprender por qué proteger un hábitat protege muchas formas de vida.",
    ],
    facts: [
      "La biodiversidad incluye animales, plantas, hongos y microorganismos.",
      "Una misma especie puede depender de muchas otras para sobrevivir.",
      "Las islas suelen albergar especies que no existen en ningún otro lugar.",
    ],
  }),
  room({
    id: "room-society",
    name: "Sociedad",
    category: "Historia y cultura",
    shortDescription:
      "Conoce distintas expresiones culturales, nuestras raíces y cómo construimos comunidad.",
    description:
      "Un encuentro respetuoso con las historias, músicas, tradiciones y formas de colaboración que enriquecen la identidad dominicana.",
    imageAlt:
      "Niñas y niños celebran música y danza dominicana en una ilustración",
    imagePosition: { column: 1, row: 1 },
    suggestedAge: "Todas las edades",
    duration: "Consultar",
    featured: false,
    gallery: [
      {
        src: atlas,
        alt: "Escena ilustrada de música y danza dominicana",
        position: { column: 1, row: 1 },
      },
      {
        src: atlas,
        alt: "Círculo de lectura ilustrado para compartir historias",
        position: { column: 1, row: 3 },
      },
      {
        src: atlas,
        alt: "Espacio de exploración artística ilustrado",
        position: { column: 3, row: 3 },
      },
    ],
    learningGoals: [
      "Reconocer expresiones de la cultura dominicana.",
      "Escuchar historias desde distintas perspectivas.",
      "Valorar la cooperación como base de la comunidad.",
    ],
    facts: [
      "La música transmite historias y memorias entre generaciones.",
      "Las comunidades cambian y crean nuevas tradiciones.",
      "Conocer otras perspectivas fortalece la convivencia.",
    ],
  }),
  room({
    id: "room-kitchen",
    name: "Cocinita",
    category: "Juego de rol",
    shortDescription:
      "Despierta tu lado chef mientras exploras alimentos y hábitos saludables jugando.",
    description:
      "Una experiencia de juego simbólico para combinar, servir, ordenar y conversar sobre alimentos de forma segura y creativa.",
    imageAlt:
      "Niños cocinan juntos en una cocina infantil ilustrada",
    imagePosition: { column: 2, row: 1 },
    suggestedAge: "3 a 6 años",
    duration: "Consultar",
    featured: false,
    gallery: [
      {
        src: atlas,
        alt: "Cocina de juego ilustrada con dos niños preparando alimentos",
        position: { column: 2, row: 1 },
      },
      {
        src: atlas,
        alt: "Huerto educativo ilustrado con alimentos en crecimiento",
        position: { column: 3, row: 2 },
      },
      {
        src: atlas,
        alt: "Círculo educativo ilustrado para compartir aprendizajes",
        position: { column: 1, row: 3 },
      },
    ],
    learningGoals: [
      "Practicar turnos y colaboración mediante el juego.",
      "Reconocer alimentos variados.",
      "Expresar ideas a través del juego de roles.",
    ],
    facts: [
      "El juego simbólico ayuda a practicar situaciones cotidianas.",
      "Los colores de frutas y vegetales provienen de distintos pigmentos.",
      "Cocinar también implica medir, observar y comparar.",
    ],
  }),
  room({
    id: "room-library",
    name: "Biblioteca",
    category: "Lectura y arte",
    shortDescription:
      "Un rincón tranquilo lleno de historias, colores e inspiración para imaginar.",
    description:
      "Un espacio acogedor para leer, escuchar relatos, conversar y descubrir que cada libro puede abrir una puerta diferente.",
    imageAlt:
      "Niñas y niños leen en una biblioteca infantil ilustrada",
    imagePosition: { column: 3, row: 1 },
    suggestedAge: "Todas las edades",
    duration: "Consultar",
    featured: false,
    gallery: [
      {
        src: atlas,
        alt: "Biblioteca infantil ilustrada con asientos cómodos y libros",
        position: { column: 3, row: 1 },
      },
      {
        src: atlas,
        alt: "Sesión de cuentacuentos ilustrada",
        position: { column: 1, row: 3 },
      },
      {
        src: atlas,
        alt: "Taller ilustrado de luz y sombras narrativas",
        position: { column: 0, row: 3 },
      },
    ],
    learningGoals: [
      "Disfrutar la lectura como experiencia compartida.",
      "Interpretar imágenes y relatos.",
      "Crear nuevas historias a partir de ideas propias.",
    ],
    facts: [
      "Leer en voz alta ayuda a descubrir ritmos y sonidos del lenguaje.",
      "Las ilustraciones también cuentan partes de una historia.",
      "Una misma historia puede tener muchas interpretaciones.",
    ],
  }),
  room({
    id: "room-human",
    name: "Ser Humano",
    category: "Biología",
    shortDescription:
      "Descubre cómo funciona tu cuerpo y por qué cada persona es extraordinaria.",
    description:
      "Una aproximación amable a los sistemas del cuerpo, los sentidos y los hábitos que contribuyen al bienestar.",
    imageAlt:
      "Niños exploran un modelo anatómico educativo en una ilustración",
    imagePosition: { column: 0, row: 2 },
    suggestedAge: "6 a 12 años",
    duration: "Consultar",
    featured: true,
    gallery: [
      {
        src: atlas,
        alt: "Modelo anatómico educativo ilustrado",
        position: { column: 0, row: 2 },
      },
      {
        src: atlas,
        alt: "Taller científico ilustrado de observación y registro",
        position: { column: 1, row: 2 },
      },
      {
        src: atlas,
        alt: "Actividad ilustrada sobre formas saludables de alimentarse",
        position: { column: 2, row: 1 },
      },
    ],
    learningGoals: [
      "Identificar algunos sistemas del cuerpo humano.",
      "Relacionar los sentidos con la exploración del entorno.",
      "Reconocer hábitos cotidianos de autocuidado.",
    ],
    facts: [
      "La piel es el órgano más grande del cuerpo humano.",
      "El corazón impulsa sangre a todo el cuerpo.",
      "El cerebro integra información de nuestros sentidos.",
    ],
  }),
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((item) => item.slug === slug);
}
