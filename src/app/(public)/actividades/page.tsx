import { CalendarDays, FlaskConical } from "lucide-react";
import { ActivitiesExplorer } from "@/components/activities/activities-explorer";
import { PageHero } from "@/components/ui/page-hero";
import { activities, activityDataNotice } from "@/data/activities";
import { createPageMetadata } from "@/lib/metadata";
import styles from "@/components/module-two.module.css";

export const metadata = createPageMetadata({
  title: "Actividades — Descubre y Aprende",
  description:
    "Explora la agenda demostrativa de talleres y actividades educativas de ciencia, arte y naturaleza del Museo Infantil Trampolín.",
  path: "/actividades",
  image: "/og.png",
});

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda educativa"
        title="Descubre y Aprende"
        description="Explora actividades, talleres y encuentros diseñados para despertar la curiosidad, la creatividad y la imaginación."
        tone="yellow"
        aside={
          <div className={styles.moduleHeroArt} aria-hidden="true">
            <span className={styles.heroOrbit}><CalendarDays size={50} /></span>
            <FlaskConical className={styles.heroSpark} />
          </div>
        }
      />
      <ActivitiesExplorer activities={activities} dataNotice={activityDataNotice} />
    </>
  );
}
