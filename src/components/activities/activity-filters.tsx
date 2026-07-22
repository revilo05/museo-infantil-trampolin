import { Search } from "lucide-react";
import type {
  ActivityAge,
  ActivityCategory,
  CapacityStatus,
} from "@/data/activities";
import { getCapacityLabel } from "@/components/activities/capacity-badge";
import styles from "@/components/module-two.module.css";

export type ActivityFilterState = {
  category: "all" | ActivityCategory;
  age: "all" | ActivityAge;
  capacity: "all" | CapacityStatus;
  query: string;
};

type ActivityFiltersProps = {
  value: ActivityFilterState;
  categories: ActivityCategory[];
  ages: ActivityAge[];
  statuses: CapacityStatus[];
  onChange: (value: ActivityFilterState) => void;
  onClear: () => void;
};

export function ActivityFilters({
  value,
  categories,
  ages,
  statuses,
  onChange,
  onClear,
}: ActivityFiltersProps) {
  return (
    <div className={styles.activityToolbar} aria-label="Filtros de actividades">
      <div className={styles.filterPills} aria-label="Filtrar por categoría">
        <button
          className={styles.pill}
          type="button"
          aria-current={value.category === "all" ? "true" : undefined}
          onClick={() => onChange({ ...value, category: "all" })}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            className={styles.pill}
            type="button"
            key={category}
            aria-current={value.category === category ? "true" : undefined}
            onClick={() => onChange({ ...value, category })}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.activityFiltersGrid}>
        <div className={styles.field}>
          <label htmlFor="activity-search">Buscar actividad</label>
          <div className={styles.searchWrap}>
            <Search aria-hidden="true" size={19} />
            <input
              id="activity-search"
              className={styles.searchControl}
              type="search"
              value={value.query}
              placeholder="Ej.: burbujas o huerto"
              onChange={(event) => onChange({ ...value, query: event.target.value })}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="activity-age">Edad recomendada</label>
          <select
            id="activity-age"
            className={styles.fieldControl}
            value={value.age}
            onChange={(event) =>
              onChange({ ...value, age: event.target.value as ActivityFilterState["age"] })
            }
          >
            <option value="all">Cualquier edad</option>
            {ages.map((age) => <option key={age} value={age}>{age}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="activity-capacity">Estado de cupo</label>
          <select
            id="activity-capacity"
            className={styles.fieldControl}
            value={value.capacity}
            onChange={(event) =>
              onChange({
                ...value,
                capacity: event.target.value as ActivityFilterState["capacity"],
              })
            }
          >
            <option value="all">Todos los estados</option>
            {statuses.map((status) => (
              <option key={status} value={status}>{getCapacityLabel(status)}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.filterActions}>
        <button className={styles.clearButton} type="button" onClick={onClear}>
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
