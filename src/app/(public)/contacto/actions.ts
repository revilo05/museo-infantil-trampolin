"use server";

import { contactDeliveryService } from "@/services/contact";
import type {
  ContactFormState,
  ContactSubmission,
} from "@/types/contact";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(formData: FormData, key: keyof ContactSubmission) {
  return String(formData.get(key) ?? "").trim();
}

export async function submitContactAction(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const submission: ContactSubmission = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    reason: readField(formData, "reason"),
    message: readField(formData, "message"),
  };

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (submission.name.length < 2) {
    fieldErrors.name = "Escribe tu nombre completo.";
  }
  if (!emailPattern.test(submission.email)) {
    fieldErrors.email = "Escribe un correo válido.";
  }
  if (!submission.reason) {
    fieldErrors.reason = "Selecciona el motivo de tu consulta.";
  }
  if (submission.message.length < 15) {
    fieldErrors.message = "Cuéntanos un poco más; utiliza al menos 15 caracteres.";
  }

  if (Object.keys(fieldErrors).length) {
    return {
      status: "error",
      message: "Revisa los campos indicados antes de continuar.",
      fieldErrors,
      values: submission,
    };
  }

  const result = await contactDeliveryService.deliver(submission);
  return { ...result, values: submission };
}
