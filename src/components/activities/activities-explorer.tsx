"use client";

import { useMemo, useState } from "react";
import { CalendarRange } from "lucide-react";
import { ActivityCalendar } from "@/components/activities/activity-calendar";
import { ActivityCard } from "@/components/activities/activity-card";
import {
  ActivityFilters,
  type ActivityFilterState,
} from "@/components/activities/activity-filters";
import { Container } from "@/components/ui/container";
import type { Activity } from "@/data/activities";
import styles from "@/components/module-two.module.css";

type ActivitiesExplorerProps = {
  activities: Activity[];
  dataNotice: string;
};

const emptyFilters: ActivityFilterState = {
  category: "all",
  age: "all",
  capacity: "all",
  query: "",
};

export function ActivitiesExplorer({ activities, dataNotice }: ActivitiesExplorerProps) {
  const initialDate = new Date(`${activities[0]?.date ?? "2026-08-01"}T12:00:00`);
  const [visibleMonth, setVisibleMonth] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [filters, setFilters] = useState<ActivityFilterState>(emptyFilters);

  const categories = useMemo(
    () => Array.from(new Set(activities.map((activity) => activity.category))),
    [activities],
  );
  const ages = useMemo(
    () => Array.from(new Set(activities.map((activity) => activity.suggestedAge))),
    [activities],
  );
  const statuses = useMemo(
    () => Array.from(new Set(activities.map((activity) => activity.capacityStatus))),
    [activities],
  );

  const filteredActivities = useMemo(() => {
    const normalizedQuery = filters.query.trim().toLocaleLowerCase("es");
    return activities.filter((activity) => {
      const activityDate = new Date(`${activity.date}T12:00:00`);
      const inVisibleMonth =
        activityDate.getFullYear() === visibleMonth.getFullYear() &&
        activityDate.getMonth() === visibleMonth.getMonth();
      const matchesSelectedDate = !selectedDate || activity.date === selectedDate;
      const matchesCategory =
        filters.category === "all" || activity.category === filters.category;
      const matchesAge = filters.age === "all" || activity.suggestedAge === filters.age;
      const matchesCapacity =
        filters.capacity === "all" || activity.capacityStatus === filters.capacity;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${activity.title} ${activity.shortDescription} ${activity.category}`
          .toLocaleLowerCase("es")
          .includes(normalizedQuery);
      return (
        inVisibleMonth &&
        matchesSelectedDate &&
        matchesCategory &&
        matchesAge &&
        matchesCapacity &&
        matchesQuery
      );
    });
  }, [activities, filters, selectedDate, visibleMonth]);

  const visibleMonthLabel = new Intl.DateTimeFormat("es-DO", {
    month: "long",
    year: "numeric",
  }).format(visibleMonth);

  const clearAll = () => {
    setFilters(emptyFilters);
    setSelectedDate(null);
  };

  return (
    <section id="agenda" className={styles.agendaSection} aria-labelledby="agenda-title">
      <Container>
        <div className={styles.demoNotice} role="note">
          <CalendarRange aria-hidden="true" size={20} />
          <span>{dataNotice}</span>
        </div>
        <div className={styles.agendaLayout}>
          <ActivityCalendar
            activities={activities}
            visibleMonth={visibleMonth}
            selectedDate={selectedDate}
            onVisibleMonthChange={setVisibleMonth}
            onSelectedDateChange={setSelectedDate}
          />
          <div className={styles.activityArea}>
            <ActivityFilters
              value={filters}
              categories={categories}
              ages={ages}
              statuses={statuses}
              onChange={setFilters}
              onClear={clearAll}
            />
            <div className={styles.activityHeading}>
              <h2 id="agenda-title">
                {selectedDate ? "Actividades del día" : `Agenda de ${visibleMonthLabel}`}
              </h2>
              <p className={styles.resultCount} aria-live="polite">
                {filteredActivities.length} {filteredActivities.length === 1 ? "actividad" : "actividades"}
              </p>
            </div>
            {filteredActivities.length > 0 ? (
              <div className={styles.activityList}>
                {filteredActivities.map((activity, index) => (
                  <ActivityCard key={activity.id} activity={activity} preload={index === 0} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <h3>No hay actividades con esta selección</h3>
                <p>Cambia el mes, elige otro día o limpia los filtros para explorar la agenda demostrativa.</p>
                <button className={styles.clearButton} type="button" onClick={clearAll}>
                  Limpiar selección
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
