import { Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ReservationForm } from "./reservation-form";
import { ReservationHero } from "./reservation-hero";
import { ReservationLookup } from "./reservation-lookup";
import { ReservationProcess } from "./reservation-process";
import styles from "./reservation-experience.module.css";

export function ReservationExperience() {
  return (
    <div className={styles.page}>
      <ReservationHero />

      <section
        className={styles.workspace}
        aria-labelledby="reservation-form-title"
      >
        <Container className={styles.layout}>
          <ReservationForm />

          <aside
            className={styles.sidebar}
            aria-label="Información del proceso de reservación"
          >
            <ReservationProcess />
            <ReservationLookup />
            <div className={styles.supportCard}>
              <div className={styles.supportIcon} aria-hidden="true">
                <Send />
              </div>
              <p>
                <strong>Te mantendremos informado</strong> cuando el servicio de
                correo esté configurado.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </div>
  );
}
