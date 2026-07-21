import {
  CheckCircle2,
  FileSearch,
  Info,
  MailCheck,
  ShieldCheck,
  XCircle,
} from "lucide-react";

export const reservationSteps = [
  {
    label: "Enviada",
    description: "Recibimos la solicitud educativa.",
    icon: MailCheck,
    active: true,
  },
  {
    label: "En revisión",
    description: "Verificamos fecha, cupo y datos de contacto.",
    icon: FileSearch,
  },
  {
    label: "Pendiente de información",
    description: "Te contactaremos si necesitamos algún detalle.",
    icon: Info,
  },
  {
    label: "Validada",
    description: "La información y las condiciones están listas.",
    icon: ShieldCheck,
  },
  {
    label: "Confirmada",
    description: "La visita queda coordinada con el museo.",
    icon: CheckCircle2,
  },
  {
    label: "Rechazada",
    description: "Te explicaremos el motivo y las alternativas.",
    icon: XCircle,
  },
] as const;
