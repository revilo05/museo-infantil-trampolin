import { Clock3 } from "lucide-react";
import { reservationSteps } from "./reservation-steps";
import styles from "./reservation-process.module.css";

export function ReservationProcess() {
  return (
    <section className={styles.card} aria-labelledby="reservation-process-title">
      <header className={styles.heading}>
        <div className={styles.headingIcon} aria-hidden="true">
          <Clock3 />
        </div>
        <div>
          <p className={styles.eyebrow}>Seguimiento claro</p>
          <h2 id="reservation-process-title">Proceso de la solicitud</h2>
        </div>
      </header>

      <ol className={styles.timeline}>
        {reservationSteps.map((step) => {
          const Icon = step.icon;

          return (
            <li key={step.label} className={"active" in step ? styles.active : undefined}>
              <div className={styles.marker} aria-hidden="true">
                <Icon />
              </div>
              <div>
                <strong>{step.label}</strong>
                <p>{step.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
