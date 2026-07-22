import Link from "next/link";
import { ArrowRight, Clock3, UsersRound } from "lucide-react";
import { ExperienceImage } from "@/components/shared/experience-image";
import type { Room } from "@/data/rooms";
import styles from "@/components/module-two.module.css";

const categoryTone = (category: Room["category"]) => {
  if (["Naturaleza", "Medio ambiente", "Fauna y flora"].includes(category)) {
    return "green";
  }
  if (["Juego de rol", "Historia y cultura"].includes(category)) {
    return "orange";
  }
  if (["Física", "Lectura y arte"].includes(category)) return "yellow";
  return "blue";
};

type RoomCardProps = {
  room: Room;
  preload?: boolean;
};

export function RoomCard({ room, preload = false }: RoomCardProps) {
  return (
    <article className={styles.card} id={room.slug}>
      <div className={styles.cardMedia}>
        <ExperienceImage
          src={room.image}
          alt={room.imageAlt}
          position={room.imagePosition}
          preload={preload}
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag} data-tone={categoryTone(room.category)}>
          {room.category}
        </span>
        <h3 className={styles.cardTitle}>{room.name}</h3>
        <p className={styles.cardDescription}>{room.shortDescription}</p>
        <div className={styles.metaRow} aria-label="Datos de la sala">
          <span className={styles.metaItem}>
            <UsersRound aria-hidden="true" size={16} />
            {room.suggestedAge}
          </span>
          <span className={styles.metaItem}>
            <Clock3 aria-hidden="true" size={16} />
            {room.duration ?? "Consultar"}
          </span>
        </div>
        <Link className={styles.cardLink} href={`/salas/${room.slug}`}>
          Ver más <ArrowRight aria-hidden="true" size={18} />
          <span className="sr-only"> sobre {room.name}</span>
        </Link>
      </div>
    </article>
  );
}
