"use client";

import {
  Accessibility,
  ArrowRight,
  Building2,
  Check,
  Info,
} from "lucide-react";
import { FormEvent, useState } from "react";
import type { ReservationErrors, ReservationField } from "./reservation-types";
import { validateReservationForm } from "./reservation-validation";
import styles from "./reservation-form.module.css";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <small id={id} className={styles.fieldError}>
      {message}
    </small>
  );
}

export function ReservationForm() {
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [requiresAccessibility, setRequiresAccessibility] = useState(false);
  const [formNotice, setFormNotice] = useState(false);

  function clearError(field: ReservationField) {
    if (!errors[field]) return;
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormNotice(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateReservationForm(event.currentTarget);
    const firstFieldName = Object.keys(nextErrors)[0] as ReservationField | undefined;

    setErrors(nextErrors);
    setFormNotice(!firstFieldName);

    if (firstFieldName) {
      const firstInvalid = event.currentTarget.elements.namedItem(
        firstFieldName,
      ) as HTMLElement | null;
      requestAnimationFrame(() => firstInvalid?.focus());
    }
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit} noValidate>
      <header className={styles.heading}>
        <div className={styles.headingIcon} aria-hidden="true">
          <Building2 />
        </div>
        <div>
          <p className={styles.eyebrow}>Solicitud educativa</p>
          <h2 id="reservation-form-title">Cuéntanos sobre tu visita</h2>
          <p>Los campos marcados con * son obligatorios.</p>
        </div>
      </header>

      <fieldset className={styles.fieldset}>
        <legend>Información de la institución</legend>
        <div className={styles.grid}>
          <label className={`${styles.field} ${styles.wide}`} htmlFor="reservation-institution">
            <span>Nombre de la institución *</span>
            <input
              id="reservation-institution"
              name="institution"
              type="text"
              autoComplete="organization"
              placeholder="Ej. Colegio San Juan"
              aria-invalid={Boolean(errors.institution)}
              aria-describedby={errors.institution ? "reservation-institution-error" : undefined}
              onChange={() => clearError("institution")}
              required
            />
            <FieldError id="reservation-institution-error" message={errors.institution} />
          </label>

          <label className={styles.field} htmlFor="reservation-type">
            <span>Tipo de institución *</span>
            <select
              id="reservation-type"
              name="institutionType"
              defaultValue=""
              aria-invalid={Boolean(errors.institutionType)}
              aria-describedby={errors.institutionType ? "reservation-type-error" : undefined}
              onChange={() => clearError("institutionType")}
              required
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="colegio-privado">Colegio privado</option>
              <option value="centro-publico">Centro educativo público</option>
              <option value="fundacion">Fundación u organización</option>
              <option value="universidad">Universidad o instituto técnico</option>
              <option value="otro">Otra institución</option>
            </select>
            <FieldError id="reservation-type-error" message={errors.institutionType} />
          </label>

          <label className={styles.field} htmlFor="reservation-contact">
            <span>Persona de contacto *</span>
            <input
              id="reservation-contact"
              name="contact"
              type="text"
              autoComplete="name"
              placeholder="Nombre completo"
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={errors.contact ? "reservation-contact-error" : undefined}
              onChange={() => clearError("contact")}
              required
            />
            <FieldError id="reservation-contact-error" message={errors.contact} />
          </label>

          <label className={styles.field} htmlFor="reservation-email">
            <span>Correo electrónico *</span>
            <input
              id="reservation-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="correo@institucion.edu"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "reservation-email-error" : undefined}
              onChange={() => clearError("email")}
              required
            />
            <FieldError id="reservation-email-error" message={errors.email} />
          </label>

          <label className={styles.field} htmlFor="reservation-phone">
            <span>Teléfono *</span>
            <input
              id="reservation-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(809) 000-0000"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "reservation-phone-error" : undefined}
              onChange={() => clearError("phone")}
              required
            />
            <FieldError id="reservation-phone-error" message={errors.phone} />
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend>Detalles del grupo</legend>
        <div className={styles.grid}>
          <label className={styles.field} htmlFor="reservation-students">
            <span>Número de estudiantes *</span>
            <input
              id="reservation-students"
              name="students"
              type="number"
              inputMode="numeric"
              min="1"
              placeholder="0"
              aria-invalid={Boolean(errors.students)}
              aria-describedby={errors.students ? "reservation-students-error" : undefined}
              onChange={() => clearError("students")}
              required
            />
            <FieldError id="reservation-students-error" message={errors.students} />
          </label>

          <label className={styles.field} htmlFor="reservation-adults">
            <span>Número de adultos (guías) *</span>
            <input
              id="reservation-adults"
              name="adults"
              type="number"
              inputMode="numeric"
              min="1"
              placeholder="0"
              aria-invalid={Boolean(errors.adults)}
              aria-describedby={errors.adults ? "reservation-adults-error" : undefined}
              onChange={() => clearError("adults")}
              required
            />
            <FieldError id="reservation-adults-error" message={errors.adults} />
          </label>

          <label className={styles.field} htmlFor="reservation-date">
            <span>Fecha propuesta *</span>
            <input
              id="reservation-date"
              name="date"
              type="date"
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? "reservation-date-error" : "reservation-date-help"}
              onChange={() => clearError("date")}
              required
            />
            {errors.date ? (
              <FieldError id="reservation-date-error" message={errors.date} />
            ) : (
              <small id="reservation-date-help">La fecha quedará sujeta a disponibilidad.</small>
            )}
          </label>

          <label className={styles.field} htmlFor="reservation-schedule">
            <span>Horario preferido</span>
            <select id="reservation-schedule" name="schedule" defaultValue="manana">
              <option value="manana">Mañana</option>
              <option value="media-manana">Media mañana</option>
              <option value="tarde">Tarde</option>
              <option value="flexible">Horario flexible</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend>Accesibilidad y observaciones</legend>
        <div className={styles.accessibilityChoice}>
          <input
            id="reservation-accessibility"
            name="requiresAccessibility"
            type="checkbox"
            checked={requiresAccessibility}
            onChange={(event) => setRequiresAccessibility(event.target.checked)}
          />
          <label htmlFor="reservation-accessibility">
            <Accessibility aria-hidden="true" />
            <span>
              <strong>El grupo requiere facilidades de accesibilidad</strong>
              <small>Podrás contarnos cómo preparar mejor la experiencia.</small>
            </span>
          </label>
        </div>

        {requiresAccessibility ? (
          <label className={styles.field} htmlFor="reservation-accessibility-details">
            <span>Necesidades de accesibilidad</span>
            <textarea
              id="reservation-accessibility-details"
              name="accessibilityNeeds"
              rows={3}
              placeholder="Indica apoyos de movilidad, comunicación, sensibilidad sensorial u otra necesidad relevante."
            />
          </label>
        ) : null}

        <label className={styles.field} htmlFor="reservation-observations">
          <span>Observaciones adicionales</span>
          <textarea
            id="reservation-observations"
            name="observations"
            rows={4}
            placeholder="Cuéntanos si el grupo tiene algún objetivo educativo, tema de interés o información que debamos considerar."
          />
        </label>
      </fieldset>

      <div className={styles.infoNote}>
        <Info aria-hidden="true" />
        <p>
          Enviar una solicitud no confirma la visita. El equipo del museo debe
          revisar la disponibilidad y se comunicará contigo para coordinar los
          próximos pasos.
        </p>
      </div>

      {formNotice ? (
        <div className={styles.status} role="status" aria-live="polite">
          <Check aria-hidden="true" />
          <p>
            La información está lista para enviarse. La conexión con Supabase y
            la generación del número de referencia se activarán en la etapa funcional.
          </p>
        </div>
      ) : null}

      <footer className={styles.actions}>
        <p>Podrás revisar la solicitud antes de su confirmación definitiva.</p>
        <button className="button button--primary" type="submit">
          Revisar solicitud <ArrowRight aria-hidden="true" size={18} />
        </button>
      </footer>
    </form>
  );
}
