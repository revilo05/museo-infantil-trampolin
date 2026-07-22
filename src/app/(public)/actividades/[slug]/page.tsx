import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Sparkles,
  TicketCheck,
  UsersRound,
} from "lucide-react";
import { ActivityCard } from "@/components/activities/activity-card";
import { ActivityGallery } from "@/components/activities/activity-gallery";
import { CapacityBadge } from "@/components/activities/capacity-badge";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ExperienceImage } from "@/components/shared/experience-image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  activities,
  activityDataNotice,
  getActivityBySlug,
} from "@/data/activities";
import { getRoomBySlug } from "@/data/rooms";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/module-two.module.css";

type ActivityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("es-DO", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: ActivityDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) {
    return createPageMetadata({
      title: "Actividad no encontrada",
      description: "La actividad solicitada no está disponible.",
      path: `/actividades/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: activity.title,
    description: activity.shortDescription,
    path: `/actividades/${activity.slug}`,
    image: "/og.png",
  });
}

export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  const room = activity.roomSlug ? getRoomBySlug(activity.roomSlug) : undefined;
  const registrationDisabled = ["full", "cancelled", "upcoming"].includes(
    activity.capacityStatus,
  );
  const related = activities
    .filter((item) => item.slug !== activity.slug && item.category === activity.category)
    .slice(0, 3);
  const relatedActivities =
    related.length > 0
      ? related
      : activities.filter((item) => item.slug !== activity.slug).slice(0, 3);
  const formattedDate = dateFormatter.format(
    new Date(`${activity.date}T12:00:00Z`),
  );
  const formattedTime = activity.startTime
    ? activity.endTime
      ? `${activity.startTime} – ${activity.endTime}`
      : activity.startTime
    : "Horario por confirmar";

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Actividades", href: "/actividades" },
          { label: activity.title },
        ]}
      />

      <section className={styles.detailHero} aria-labelledby="activity-title">
        <Container className={styles.detailHeroGrid}>
          <div className={styles.detailCopy}>
            <div className={styles.activityTop}>
              <span className={styles.tag}>{activity.category}</span>
              <CapacityBadge status={activity.capacityStatus} />
            </div>
            <h1 id="activity-title">{activity.title}</h1>
            <p className={styles.detailDescription}>{activity.description}</p>
            <ul className={styles.detailMetaList}>
              <li>
                <CalendarDays aria-hidden="true" size={20} />
                <span><strong>Fecha:</strong> {formattedDate}</span>
              </li>
              <li>
                <Clock3 aria-hidden="true" size={20} />
                <span><strong>Horario:</strong> {formattedTime}</span>
              </li>
              <li>
                <MapPin aria-hidden="true" size={20} />
                <span><strong>Lugar:</strong> {activity.location ?? "Ubicación por confirmar"}</span>
              </li>
              <li>
                <UsersRound aria-hidden="true" size={20} />
                <span><strong>Edad:</strong> {activity.suggestedAge}</span>
              </li>
              <li>
                <TicketCheck aria-hidden="true" size={20} />
                <span><strong>Costo:</strong> {activity.cost ?? "Consultar"}</span>
              </li>
            </ul>
            {registrationDisabled ? (
              <span className={styles.disabledAction} aria-disabled="true">
                {activity.capacityStatus === "full"
                  ? "Actividad llena"
                  : activity.capacityStatus === "cancelled"
                    ? "Actividad cancelada"
                    : "Inscripción próximamente"}
              </span>
            ) : (
              <ButtonLink href={`/reservaciones?actividad=${activity.slug}`} showArrow>
                {activity.capacityStatus === "available" ? "Registrarme" : "Consultar disponibilidad"}
              </ButtonLink>
            )}
          </div>
          <div className={styles.detailMedia}>
            <ExperienceImage
              src={activity.image}
              alt={activity.imageAlt}
              position={activity.imagePosition}
              preload
            />
          </div>
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="activity-gallery-title">
        <Container>
          <div className={styles.demoNotice} role="note">
            <CalendarDays aria-hidden="true" size={20} />
            <span>{activityDataNotice}</span>
          </div>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Conoce la propuesta</p>
              <h2 id="activity-gallery-title">Galería de la actividad</h2>
            </div>
            <p>Imágenes ilustrativas de la experiencia y de contenidos educativos relacionados.</p>
          </div>
          <ActivityGallery images={activity.gallery} />
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="activity-learning-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Objetivos educativos</p>
              <h2 id="activity-learning-title">¿Qué vamos a explorar?</h2>
            </div>
          </div>
          <div className={styles.learningGrid}>
            {activity.learningGoals.map((goal) => (
              <article className={styles.learningCard} key={goal}>
                <span className={styles.learningIcon} aria-hidden="true">
                  <CheckCircle2 size={21} />
                </span>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.contentSection} ${styles.factsSection}`} aria-labelledby="recommendations-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Prepara la visita</p>
              <h2 id="recommendations-title">Recomendaciones</h2>
            </div>
          </div>
          <ul className={styles.recommendations}>
            {activity.recommendations.map((recommendation) => (
              <li key={recommendation}>{recommendation}</li>
            ))}
          </ul>
          {room ? (
            <div className={styles.relatedRoom}>
              <div>
                <strong>Sala relacionada: {room.name}</strong>
                <p>{room.shortDescription}</p>
              </div>
              <ButtonLink href={`/salas/${room.slug}`} variant="secondary" showArrow>
                Conocer la sala
              </ButtonLink>
            </div>
          ) : null}
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="related-activities-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Más opciones</p>
              <h2 id="related-activities-title">Otras actividades para descubrir</h2>
            </div>
            <ButtonLink href="/actividades#agenda" variant="ghost" showArrow>
              Ver agenda completa
            </ButtonLink>
          </div>
          <div className={styles.relatedGrid}>
            {relatedActivities.map((item) => (
              <ActivityCard key={item.id} activity={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.ctaPanel}>
            <div>
              <h2><Sparkles aria-hidden="true" size={26} /> Continúa la aventura</h2>
              <p>
                {registrationDisabled
                  ? "Esta actividad no admite registros en este momento. Explora la agenda para encontrar otra experiencia."
                  : "Envía una solicitud y el museo confirmará la disponibilidad y los detalles institucionales."}
              </p>
            </div>
            {registrationDisabled ? (
              <ButtonLink href="/actividades#agenda" showArrow>
                Ver otras actividades
              </ButtonLink>
            ) : (
              <Link className="button button--primary" href={`/reservaciones?actividad=${activity.slug}`}>
                Consultar disponibilidad
              </Link>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
