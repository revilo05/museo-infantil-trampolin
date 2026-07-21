import type { ReservationErrors, ReservationField } from "./reservation-types";

const requiredFields: Array<[ReservationField, string]> = [
  ["institution", "Escribe el nombre de la institución."],
  ["contact", "Escribe el nombre de la persona de contacto."],
  ["email", "Escribe un correo electrónico válido."],
  ["phone", "Escribe un número de teléfono."],
  ["institutionType", "Selecciona el tipo de institución."],
  ["students", "Indica la cantidad de estudiantes."],
  ["adults", "Indica la cantidad de adultos."],
  ["date", "Selecciona una fecha propuesta."],
];

export function validateReservationForm(form: HTMLFormElement): ReservationErrors {
  const data = new FormData(form);
  const errors: ReservationErrors = {};

  requiredFields.forEach(([field, message]) => {
    if (!String(data.get(field) ?? "").trim()) errors[field] = message;
  });

  const email = String(data.get("email") ?? "");
  if (email && !/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Revisa el formato del correo electrónico.";
  }

  if (data.get("students") && Number(data.get("students")) < 1) {
    errors.students = "Debe asistir al menos un estudiante.";
  }

  if (data.get("adults") && Number(data.get("adults")) < 1) {
    errors.adults = "Debe asistir al menos un adulto responsable.";
  }

  return errors;
}
