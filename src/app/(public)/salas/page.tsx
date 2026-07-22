import { Atom, Leaf, Orbit } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { RoomFilters } from "@/components/rooms/room-filters";
import { rooms } from "@/data/rooms";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/module-two.module.css";

export const metadata = createPageMetadata({
  title: "Salas y Experiencias",
  description:
    "Explora las salas educativas del Museo Infantil Trampolín y encuentra experiencias de ciencia, naturaleza, cultura, arte y juego.",
  path: "/salas",
  image: "/og.png",
});

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Explora, pregunta y descubre"
        title="Salas y Experiencias"
        description="Embárcate en un recorrido por áreas educativas pensadas para despertar la curiosidad, fomentar el aprendizaje activo y crear momentos inolvidables en familia."
        tone="blue"
        aside={
          <div className={styles.moduleHeroArt} aria-hidden="true">
            <span className={styles.heroOrbit}><Orbit size={54} /></span>
            <Leaf className={styles.heroSpark} />
            <Atom className="sr-only" />
          </div>
        }
      />
      <RoomFilters rooms={rooms} />
    </>
  );
}
