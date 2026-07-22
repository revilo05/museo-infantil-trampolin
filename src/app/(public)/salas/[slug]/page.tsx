import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock3, Sparkles, UsersRound } from "lucide-react";
import { ActivityCard } from "@/components/activities/activity-card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ExperienceImage } from "@/components/shared/experience-image";
import { RoomFacts } from "@/components/rooms/room-facts";
import { RoomGallery } from "@/components/rooms/room-gallery";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { activities } from "@/data/activities";
import { getRoomBySlug, rooms } from "@/data/rooms";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/module-two.module.css";

type RoomDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: RoomDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) {
    return createPageMetadata({
      title: "Sala no encontrada",
      description: "La sala solicitada no está disponible.",
      path: `/salas/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: room.name,
    description: room.shortDescription,
    path: `/salas/${room.slug}`,
    image: "/og.png",
  });
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const relatedActivities = activities
    .filter((activity) => activity.roomSlug === room.slug)
    .slice(0, 3);
  const activitySelection =
    relatedActivities.length > 0
      ? relatedActivities
      : activities.filter((activity) => activity.featured).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Salas", href: "/salas" },
          { label: room.name },
        ]}
      />

      <section className={styles.detailHero} aria-labelledby="room-title">
        <Container className={styles.detailHeroGrid}>
          <div className={styles.detailCopy}>
            <span className={styles.tag}>{room.category}</span>
            <h1 id="room-title">{room.name}</h1>
            <p className={styles.detailDescription}>{room.description}</p>
            <div className={styles.detailStats}>
              <div className={styles.stat}>
                <UsersRound aria-hidden="true" size={23} />
                <div><span>Edad sugerida</span><strong>{room.suggestedAge}</strong></div>
              </div>
              <div className={styles.stat}>
                <Clock3 aria-hidden="true" size={23} />
                <div><span>Duración aproximada</span><strong>{room.duration ?? "Consultar"}</strong></div>
              </div>
            </div>
            <div className="button-row">
              <ButtonLink href={`/reservaciones?sala=${room.slug}`} showArrow>
                Reservar visita
              </ButtonLink>
              <ButtonLink href="/actividades#agenda" variant="secondary">
                Ver actividades
              </ButtonLink>
            </div>
          </div>
          <div className={styles.detailMedia}>
            <ExperienceImage
              src={room.image}
              alt={room.imageAlt}
              position={room.imagePosition}
              preload
            />
          </div>
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="gallery-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Una mirada a la experiencia</p>
              <h2 id="gallery-title">Galería educativa</h2>
            </div>
            <p>Imágenes ilustrativas que anticipan el tipo de exploración y aprendizaje del recorrido.</p>
          </div>
          <RoomGallery images={room.gallery} />
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="learning-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Aprender haciendo</p>
              <h2 id="learning-title">¿Qué aprenderás?</h2>
            </div>
          </div>
          <div className={styles.learningGrid}>
            {room.learningGoals.map((goal) => (
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

      <section className={`${styles.contentSection} ${styles.factsSection}`} aria-labelledby="facts-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Para seguir preguntando</p>
              <h2 id="facts-title">Datos curiosos</h2>
            </div>
          </div>
          <RoomFacts facts={room.facts} />
        </Container>
      </section>

      <section className={styles.contentSection} aria-labelledby="related-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">Continúa explorando</p>
              <h2 id="related-title">Actividades relacionadas</h2>
            </div>
            <ButtonLink href="/actividades#agenda" variant="ghost" showArrow>
              Ver agenda completa
            </ButtonLink>
          </div>
          <div className={styles.relatedGrid}>
            {activitySelection.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.ctaPanel}>
            <div>
              <h2><Sparkles aria-hidden="true" size={26} /> ¿Listos para descubrir {room.name}?</h2>
              <p>Solicita una visita y el museo confirmará la información necesaria para organizar la experiencia.</p>
            </div>
            <ButtonLink href={`/reservaciones?sala=${room.slug}`} showArrow>
              Reservar esta experiencia
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
