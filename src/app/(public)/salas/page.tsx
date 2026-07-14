import { PanelsTopLeft } from "lucide-react";
import { IntegrationPlaceholder } from "@/components/integration-placeholder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Salas — integración pendiente",
  description: "Ruta reservada para el catálogo de salas del Museo Infantil Trampolín.",
  path: "/salas",
  noIndex: true,
});

export default function RoomsIntegrationPage() {
  return (
    <IntegrationPlaceholder
      eyebrow="Salas y experiencias"
      title="El catálogo de salas se integrará aquí"
      description="La navegación institucional ya enlaza esta ruta. El equipo responsable podrá incorporar el catálogo y las páginas /salas/[slug] sin modificar el layout global."
      owner="módulo de Salas"
      icon={PanelsTopLeft}
      contractItems={[
        "Tarjetas destacadas reciben contenido mediante datos tipados.",
        "La URL pública acordada es /salas y el detalle usa /salas/[slug].",
        "Las páginas de detalle sustituirán enlaces provisionales sin romper el header.",
      ]}
    />
  );
}
