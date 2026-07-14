"use client";

import { Send, ShieldAlert } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { submitContactAction } from "@/app/(public)/contacto/actions";
import type { ContactFormState } from "@/types/contact";

const initialState: ContactFormState = {
  status: "not_configured",
  message: "Completa el formulario para validar los datos antes del envío.",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="button button--primary button--full" type="submit" disabled={pending}>
      <Send aria-hidden="true" size={18} />
      {pending ? "Validando…" : "Revisar y enviar"}
    </button>
  );
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [state, formAction] = useActionState(submitContactAction, initialState);
  const requestedReason = searchParams.get("motivo");
  const defaultReason =
    requestedReason === "apoyo" ? "Necesidad de apoyo" : state.values?.reason;

  return (
    <form className="contact-form" action={formAction} noValidate>
      <div className="form-grid">
        <label className="form-field" htmlFor="contact-name">
          <span>Nombre completo</span>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={Boolean(state.fieldErrors?.name)}
            aria-describedby={state.fieldErrors?.name ? "contact-name-error" : undefined}
            required
          />
          {state.fieldErrors?.name ? (
            <small id="contact-name-error" className="form-error">
              {state.fieldErrors.name}
            </small>
          ) : null}
        </label>

        <label className="form-field" htmlFor="contact-email">
          <span>Correo electrónico</span>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            defaultValue={state.values?.email}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? "contact-email-error" : undefined}
            required
          />
          {state.fieldErrors?.email ? (
            <small id="contact-email-error" className="form-error">
              {state.fieldErrors.email}
            </small>
          ) : null}
        </label>
      </div>

      <label className="form-field" htmlFor="contact-reason">
        <span>Motivo de la consulta</span>
        <select
          id="contact-reason"
          name="reason"
          defaultValue={defaultReason ?? ""}
          aria-invalid={Boolean(state.fieldErrors?.reason)}
          aria-describedby={state.fieldErrors?.reason ? "contact-reason-error" : undefined}
          required
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option>Información general</option>
          <option>Planificar una visita</option>
          <option>Necesidad de apoyo</option>
          <option>Centro educativo</option>
          <option>Otro</option>
        </select>
        {state.fieldErrors?.reason ? (
          <small id="contact-reason-error" className="form-error">
            {state.fieldErrors.reason}
          </small>
        ) : null}
      </label>

      <label className="form-field" htmlFor="contact-message">
        <span>Mensaje</span>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          defaultValue={state.values?.message}
          placeholder="Cuéntanos cómo podemos orientarte…"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? "contact-message-error" : "contact-message-help"}
          required
        />
        {state.fieldErrors?.message ? (
          <small id="contact-message-error" className="form-error">
            {state.fieldErrors.message}
          </small>
        ) : (
          <small id="contact-message-help">No incluyas información médica sensible.</small>
        )}
      </label>

      {state.status === "error" || state.values ? (
        <div
          className={`form-message form-message--${state.status}`}
          role={state.status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          <ShieldAlert aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      ) : null}

      <SubmitButton />
      <p className="form-disclaimer">
        El formulario valida tus datos, pero no simula el envío. Hasta que se
        configure un proveedor, recibirás un aviso claro de “canal no disponible”.
      </p>
    </form>
  );
}
