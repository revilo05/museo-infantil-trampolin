import {
  Accessibility,
  CalendarDays,
  ClipboardList,
  Sparkles,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import styles from "./reservation-hero.module.css";

export function ReservationHero() {
  return (
    <section className={styles.hero} aria-labelledby="reservations-title">
      <Container className={styles.grid}>
        <div>
          <div className={styles.kicker}>
            <Sparkles aria-hidden="true" size={17} />
            Visitas educativas
          </div>
          <h1 id="reservations-title">
            ¡Trae tu escuela a <span>descubrir!</span>
          </h1>
          <p className={styles.description}>
            Planifica una experiencia educativa, segura y emocionante. Envíanos
            los datos del grupo y nuestro equipo revisará la disponibilidad antes
            de confirmar la visita.
          </p>
          <ul className={styles.assurances} aria-label="Características del proceso">
            <li><CalendarDays aria-hidden="true" /> Fecha propuesta</li>
            <li><Users aria-hidden="true" /> Grupos educativos</li>
            <li><Accessibility aria-hidden="true" /> Atención inclusiva</li>
          </ul>
        </div>

        <div className={styles.note}>
          <div className={styles.noteIcon} aria-hidden="true">
            <ClipboardList />
          </div>
          <div>
            <span>Antes de comenzar</span>
            <strong>Ten a mano los datos de tu grupo</strong>
            <p>Completar el formulario toma aproximadamente 4 minutos.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
