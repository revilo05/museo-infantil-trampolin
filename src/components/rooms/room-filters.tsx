"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { RoomCard } from "@/components/rooms/room-card";
import type { Room } from "@/data/rooms";
import styles from "@/components/module-two.module.css";

type RoomFiltersProps = {
  rooms: Room[];
};

export function RoomFilters({ rooms }: RoomFiltersProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [age, setAge] = useState("all");

  const categories = useMemo(
    () => Array.from(new Set(rooms.map((room) => room.category))),
    [rooms],
  );
  const ages = useMemo(
    () => Array.from(new Set(rooms.map((room) => room.suggestedAge))),
    [rooms],
  );

  const filteredRooms = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");
    return rooms.filter((room) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${room.name} ${room.shortDescription} ${room.category}`
          .toLocaleLowerCase("es")
          .includes(normalizedQuery);
      const matchesCategory = category === "all" || room.category === category;
      const matchesAge = age === "all" || room.suggestedAge === age;
      return matchesQuery && matchesCategory && matchesAge;
    });
  }, [age, category, query, rooms]);

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setAge("all");
  };

  return (
    <section className={styles.filtersSection} aria-labelledby="room-filters-title">
      <Container>
        <div className={styles.filtersPanel}>
          <div className={styles.filtersHeading}>
            <h2 id="room-filters-title">
              <SlidersHorizontal aria-hidden="true" size={22} /> Encuentra tu experiencia
            </h2>
            <p className={styles.resultCount} aria-live="polite">
              {filteredRooms.length} {filteredRooms.length === 1 ? "sala coincide" : "salas coinciden"}
            </p>
          </div>
          <div className={styles.filterGrid}>
            <div className={styles.field}>
              <label htmlFor="room-search">Buscar por nombre o descripción</label>
              <div className={styles.searchWrap}>
                <Search aria-hidden="true" size={19} />
                <input
                  id="room-search"
                  className={styles.searchControl}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Ej.: universo o naturaleza"
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="room-category">Categoría</label>
              <select
                id="room-category"
                className={styles.fieldControl}
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="all">Todas las categorías</option>
                {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="room-age">Edad sugerida</label>
              <select
                id="room-age"
                className={styles.fieldControl}
                value={age}
                onChange={(event) => setAge(event.target.value)}
              >
                <option value="all">Cualquier edad</option>
                {ages.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.filterActions}>
            <button className={styles.clearButton} type="button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        </div>

        {filteredRooms.length > 0 ? (
          <div className={styles.grid}>
            {filteredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} preload={index < 3} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>No encontramos salas con esos filtros</h3>
            <p>Prueba otra búsqueda o limpia los filtros para volver a ver el catálogo completo.</p>
            <button className={styles.clearButton} type="button" onClick={clearFilters}>
              Ver todas las salas
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
