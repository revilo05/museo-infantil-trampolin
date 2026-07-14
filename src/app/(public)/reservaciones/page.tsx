import { ClipboardCheck } from "lucide-react";
import { IntegrationPlaceholder } from "@/components/integration-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Reservaciones — integración pendiente",
  description: "Ruta reservada para solicitudes de visitas educativas.",
  path: "/reservaciones",
  noIndex: true,
});

export default function ReservationsIntegrationPage() {
  return (
    <IntegrationPlaceholder
      eyebrow="Visitas educativas"
      title="La solicitud de reservación se integrará aquí"
      description="El CTA global ya utiliza /reservaciones. Esta página define el punto de integración sin implementar el formulario operativo ni simular confirmaciones."
      owner="módulo de Reservaciones"
      icon={ClipboardCheck}
      contractItems={[
        "La solicitud requerirá revisión humana antes de confirmarse.",
        "Las necesidades de accesibilidad formarán parte del contrato de datos.",
        "No se persistirá información en localStorage ni se inventarán endpoints.",
      ]}
    />
  );
}
