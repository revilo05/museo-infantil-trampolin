import { CalendarDays } from "lucide-react";
import { IntegrationPlaceholder } from "@/components/integration-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Actividades — integración pendiente",
  description: "Ruta reservada para el calendario de actividades del Museo Infantil Trampolín.",
  path: "/actividades",
  noIndex: true,
});

export default function ActivitiesIntegrationPage() {
  return (
    <IntegrationPlaceholder
      eyebrow="Agenda educativa"
      title="El calendario de actividades se integrará aquí"
      description="La portada utiliza contenido de muestra sin fechas ni cupos. El módulo responsable conectará la agenda y las páginas /actividades/[slug] cuando los datos estén disponibles."
      owner="módulo de Actividades"
      icon={CalendarDays}
      contractItems={[
        "La portada consume título, categoría, descripción y URL.",
        "Los estados de cupo solo aparecerán al existir una fuente oficial.",
        "Cada actividad tendrá una URL individual para SEO y campañas.",
      ]}
    />
  );
}
