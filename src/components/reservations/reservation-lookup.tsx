"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import styles from "./reservation-lookup.module.css";

export function ReservationLookup() {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <section className={styles.card} aria-labelledby="reservation-lookup-title">
      <header className={styles.heading}>
        <div className={styles.headingIcon} aria-hidden="true">
          <Search />
        </div>
        <div>
          <p className={styles.eyebrow}>¿Ya enviaste tu solicitud?</p>
          <h2 id="reservation-lookup-title">Consulta el estado</h2>
        </div>
      </header>

      <p className={styles.description}>
        Usa el número de referencia recibido en la confirmación de envío.
      </p>

      <label className={styles.field} htmlFor="reservation-reference">
        <span>Número de referencia</span>
        <div className={styles.control}>
          <input
            id="reservation-reference"
            name="reference"
            type="text"
            placeholder="MIT-2026-0001"
          />
          <button
            type="button"
            aria-label="Consultar estado de la solicitud"
            onClick={() => setShowNotice(true)}
          >
            <Search aria-hidden="true" />
          </button>
        </div>
      </label>

      {showNotice ? (
        <p className={styles.notice} role="status">
          La consulta se habilitará al conectar la base de datos en la etapa funcional.
        </p>
      ) : (
        <p className={styles.help}>
          Tu referencia será única y no incluirá datos personales.
        </p>
      )}
    </section>
  );
}
