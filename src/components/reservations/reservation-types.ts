export type ReservationField =
  | "institution"
  | "contact"
  | "email"
  | "phone"
  | "institutionType"
  | "students"
  | "adults"
  | "date";

export type ReservationErrors = Partial<Record<ReservationField, string>>;
