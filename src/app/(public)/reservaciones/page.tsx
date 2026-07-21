import { ReservationExperience } from "@/components/reservations/reservation-experience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Reservaciones educativas",
  description:
    "Solicita una visita educativa al Museo Infantil Trampolín y conoce las etapas del proceso.",
  path: "/reservaciones",
  noIndex: true,
});

export default function ReservationsPage() {
  return <ReservationExperience />;
}
