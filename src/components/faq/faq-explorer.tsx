"use client";

import { ChevronDown, Search, SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import type { FAQCategory, FAQItem } from "@/types/content";

type Filter = "Todas" | FAQCategory;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

export function FAQExplorer({ items }: { items: FAQItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>("Todas");
  const categories = useMemo<Filter[]>(
    () => ["Todas", ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    return items.filter((item) => {
      const matchesCategory = category === "Todas" || item.category === category;
      const searchable = normalize(`${item.question} ${item.answer} ${item.category}`);
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, items, query]);

  return (
    <div className="faq-explorer">
      <div className="faq-tools">
        <label className="search-field" htmlFor="faq-search">
          <span>Buscar una pregunta</span>
          <span className="search-field__control">
            <Search aria-hidden="true" size={20} />
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej.: horarios, accesibilidad…"
              autoComplete="off"
            />
          </span>
        </label>
        <div className="category-filters" aria-label="Filtrar por categoría">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="faq-result-count" aria-live="polite">
        {filteredItems.length === 1
          ? "1 pregunta encontrada"
          : `${filteredItems.length} preguntas encontradas`}
      </p>

      {filteredItems.length ? (
        <div className="faq-list">
          {filteredItems.map((item) => (
            <details key={item.id} id={item.id} className="faq-item">
              <summary>
                <span>
                  <small>{item.category}</small>
                  <strong>{item.question}</strong>
                </span>
                <ChevronDown aria-hidden="true" />
              </summary>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      ) : (
        <div className="empty-state" role="status">
          <SearchX aria-hidden="true" />
          <h2>No encontramos coincidencias</h2>
          <p>
            Prueba otra palabra o selecciona “Todas”. También puedes escribirnos
            desde Contacto.
          </p>
          <button
            className="button button--secondary"
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("Todas");
            }}
          >
            Limpiar búsqueda
          </button>
        </div>
      )}
    </div>
  );
}
