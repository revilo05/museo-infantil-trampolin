import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import type { Activity } from "@/data/activities";
import styles from "@/components/module-two.module.css";

const weekdays = ["D", "L", "M", "M", "J", "V", "S"];

function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthDays(month: Date): Date[] {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const firstCell = new Date(year, monthIndex, 1 - firstWeekday);
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstCell);
    date.setDate(firstCell.getDate() + index);
    return date;
  });
}

type ActivityCalendarProps = {
  activities: Activity[];
  visibleMonth: Date;
  selectedDate: string | null;
  onVisibleMonthChange: (date: Date) => void;
  onSelectedDateChange: (date: string | null) => void;
};

export function ActivityCalendar({
  activities,
  visibleMonth,
  selectedDate,
  onVisibleMonthChange,
  onSelectedDateChange,
}: ActivityCalendarProps) {
  const days = monthDays(visibleMonth);
  const activitiesByDate = new Map<string, number>();
  activities.forEach((activity) => {
    activitiesByDate.set(activity.date, (activitiesByDate.get(activity.date) ?? 0) + 1);
  });
  const selectedCount = selectedDate ? (activitiesByDate.get(selectedDate) ?? 0) : 0;
  const monthLabel = new Intl.DateTimeFormat("es-DO", {
    month: "long",
    year: "numeric",
  }).format(visibleMonth);

  const changeMonth = (offset: number) => {
    onVisibleMonthChange(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + offset, 1),
    );
    onSelectedDateChange(null);
  };

  return (
    <aside className={styles.calendar} aria-label="Calendario mensual de actividades">
      <div className={styles.calendarHeader}>
        <h2>{monthLabel}</h2>
        <div className={styles.calendarNav}>
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Ver mes anterior"
            onClick={() => changeMonth(-1)}
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button
            className={styles.iconButton}
            type="button"
            aria-label="Ver mes siguiente"
            onClick={() => changeMonth(1)}
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
      </div>

      <div className={styles.calendarGrid} role="grid" aria-label={monthLabel}>
        {weekdays.map((weekday, index) => (
          <span className={styles.weekday} key={`${weekday}-${index}`} role="columnheader">
            <span aria-hidden="true">{weekday}</span>
            <span className="sr-only">
              {new Intl.DateTimeFormat("es-DO", { weekday: "long" }).format(
                new Date(2026, 7, 2 + index),
              )}
            </span>
          </span>
        ))}
        {days.map((date) => {
          const isoDate = toIsoDate(date);
          const count = activitiesByDate.get(isoDate) ?? 0;
          const inMonth = date.getMonth() === visibleMonth.getMonth();
          const selected = selectedDate === isoDate;
          const dayLabel = new Intl.DateTimeFormat("es-DO", {
            weekday: "long",
            day: "numeric",
            month: "long",
          }).format(date);
          return (
            <button
              className={[
                styles.calendarDay,
                !inMonth ? styles.outsideMonth : "",
                count > 0 ? styles.hasEvents : "",
                selected ? styles.selectedDay : "",
              ].filter(Boolean).join(" ")}
              key={isoDate}
              type="button"
              role="gridcell"
              aria-selected={selected}
              aria-label={`${dayLabel}. ${count} ${count === 1 ? "actividad" : "actividades"}`}
              onClick={() => {
                if (!inMonth) {
                  onVisibleMonthChange(new Date(date.getFullYear(), date.getMonth(), 1));
                }
                onSelectedDateChange(isoDate);
              }}
            >
              {date.getDate()}
              {count > 0 ? <span className={styles.dayDot} aria-hidden="true" /> : null}
            </button>
          );
        })}
      </div>

      <div className={styles.calendarSummary} aria-live="polite">
        <span className={styles.calendarSummaryIcon} aria-hidden="true">
          <CalendarDays size={21} />
        </span>
        <div>
          <strong>{selectedDate ? "Día seleccionado" : "Vista del mes"}</strong>
          <span>
            {selectedDate
              ? `${selectedCount} ${selectedCount === 1 ? "actividad programada" : "actividades programadas"}`
              : "Selecciona un día para ver su agenda"}
          </span>
        </div>
      </div>
      {selectedDate ? (
        <button
          className={styles.monthButton}
          type="button"
          onClick={() => onSelectedDateChange(null)}
        >
          Ver todo el mes
        </button>
      ) : null}
    </aside>
  );
}
