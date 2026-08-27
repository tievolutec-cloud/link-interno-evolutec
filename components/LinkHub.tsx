"use client";

import { useMemo, useState } from "react";
import type { LinkItem } from "@/data/site";

type Config = {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  footer: string;
  defaultTheme: "light" | "dark";
  showSearch: boolean;
  showCategories: boolean;
};

export default function LinkHub({ config, links }: { config: Config; links: LinkItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(links.map((item) => item.category)))],
    [links]
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return links.filter((item) => {
      const categoryMatches = category === "Todos" || item.category === category;
      const textMatches =
        !normalized ||
        item.title.toLowerCase().includes(normalized) ||
        item.description.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized);
      return categoryMatches && textMatches;
    });
  }, [category, links, query]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <main className="site" data-theme={theme}>
      <div className="top-actions">
        <button
          className="theme-button"
          type="button"
          aria-label={`Ativar modo ${nextTheme === "light" ? "claro" : "escuro"}`}
          onClick={() => setTheme(nextTheme)}
        >
          <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          <span className="theme-label">Modo {nextTheme === "light" ? "claro" : "escuro"}</span>
        </button>
      </div>

      <section className="container">
        <header className="profile">
          <div className="avatar-wrap">
            <img className="avatar" src={config.avatar} alt={`Logo de ${config.name}`} />
            <span className="status-dot" aria-label="Disponível" />
          </div>
          <div className="profile-copy">
            <h1>{config.name}</h1>
            <p className="username">{config.username}</p>
            <p className="bio">{config.bio}</p>
          </div>
        </header>

        {config.showSearch && (
          <label className="search">
            <span>⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar link..."
              aria-label="Buscar link"
            />
          </label>
        )}

        {config.showCategories && (
          <nav className="categories" aria-label="Categorias">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        )}

        <section className="cards" aria-live="polite">
          {filtered.map((item) => (
            <a
              className="card"
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noreferrer" : undefined}
              key={`${item.title}-${item.url}`}
              style={{ "--accent": item.accent || "#0ea5e9" } as React.CSSProperties}
            >
              <div className="icon-box" aria-hidden="true">
                {item.icon.startsWith("/") ? (
                  <img className="brand-icon" src={item.icon} alt="" />
                ) : (
                  item.icon
                )}
              </div>
              <div className="card-content">
                <div className="card-heading">
                  <h2>{item.title}</h2>
                  <span className="arrow">↗</span>
                </div>
                <p>{item.description}</p>
                <div className="meta">
                  <span className="category-pill">{item.category}</span>
                  {item.badge && <span className="badge">{item.badge}</span>}
                  {item.stats && <span className="stats">{item.stats}</span>}
                </div>
              </div>
            </a>
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="empty">Nenhum link encontrado.</div>
        )}

        <footer>© {new Date().getFullYear()} {config.footer}</footer>
      </section>
    </main>
  );
}
