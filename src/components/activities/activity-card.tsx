import Link from "next/link";
import { CalendarDays, Clock3, MapPin, UsersRound } from "lucide-react";
import { CapacityBadge } from "@/components/activities/capacity-badge";
import { ExperienceImage } from "@/components/shared/experience-image";
import { ButtonLink } from "@/components/ui/button-link";
import type { Activity } from "@/data/activities";
import styles from "@/components/module-two.module.css";

const dateFormatter = new Intl.DateTimeFormat("es-DO", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatTime(activity: Activity): string {
  if (!activity.startTime) return "Horario por confirmar";
  return activity.endTime
    ? `${activity.startTime} – ${activity.endTime}`
    : activity.startTime;
}

function categoryTone(category: Activity["category"]) {
  if (category === "Naturaleza") return "green";
  if (category === "Arte") return "orange";
  if (category === "Talleres") return "yellow";
  return "blue";
}

type ActivityCardProps = {
  activity: Activity;
  preload?: boolean;
};

export function ActivityCard({ activity, preload = false }: ActivityCardProps) {
  const registrationDisabled = ["full", "cancelled", "upcoming"].includes(
    activity.capacityStatus,
  );

  return (
    <article className={styles.activityCard}>
      <div className={styles.activityMedia}>
        <ExperienceImage
          src={activity.image}
          alt={activity.imageAlt}
          position={activity.imagePosition}
          preload={preload}
        />
      </div>
      <div className={styles.activityContent}>
        <div className={styles.activityTop}>
          <span className={styles.tag} data-tone={categoryTone(activity.category)}>
            {activity.category}
          </span>
          <CapacityBadge status={activity.capacityStatus} />
        </div>
        <h3 className={styles.activityTitle}>{activity.title}</h3>
        <p className={styles.activityDescription}>{activity.shortDescription}</p>
        <div className={styles.activityMeta} aria-label="Datos de la actividad">
          <span>
            <CalendarDays aria-hidden="true" size={15} />
            {dateFormatter.format(new Date(`${activity.date}T12:00:00Z`))}
          </span>
          <span>
            <Clock3 aria-hidden="true" size={15} />
            {formatTime(activity)}
          </span>
          <span>
            <MapPin aria-hidden="true" size={15} />
            {activity.location ?? "Ubicación por confirmar"}
          </span>
          <span>
            <UsersRound aria-hidden="true" size={15} />
            {activity.suggestedAge}
          </span>
        </div>
        <div className={styles.activityActions}>
          <ButtonLink href={`/actividades/${activity.slug}`} variant="secondary">
            Ver actividad
          </ButtonLink>
          {registrationDisabled ? (
            <span
              className={`${styles.disabledAction} ${styles.secondaryAction}`}
              aria-disabled="true"
              title={
                activity.capacityStatus === "full"
                  ? "No hay cupos disponibles"
                  : "La inscripción no está disponible"
              }
            >
              {activity.capacityStatus === "full"
                ? "Actividad llena"
                : activity.capacityStatus === "cancelled"
                  ? "No disponible"
                  : "Próximamente"}
            </span>
          ) : (
            <Link
              className={`button button--primary ${styles.secondaryAction}`}
              href={`/reservaciones?actividad=${activity.slug}`}
            >
              Inscribirse
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
