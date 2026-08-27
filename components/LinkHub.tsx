"use client";

import { useEffect, useMemo, useState } from "react";
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

const THEME_STORAGE_KEY = "evolutec-linkhub-theme";

function HubIcon({ name }: { name: string }) {
  const iconProps = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "contracts":
      return (
        <svg {...iconProps}>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h5" />
          <path d="M9 9h1" />
        </svg>
      );

    case "statute":
      return (
        <svg {...iconProps}>
          <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v18H7.5A2.5 2.5 0 0 0 5 22z" />
          <path d="M5 4.5v15" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h4" />
        </svg>
      );

    case "tutorials":
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m10 9 5 3-5 3z" />
        </svg>
      );

    case "students":
      return (
        <svg {...iconProps}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
          <path d="M16 5.2a3 3 0 0 1 0 5.6" />
          <path d="M17.5 15a5 5 0 0 1 3 5" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="17" rx="2.5" />
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <path d="M3 9h18" />
          <path d="M8 13h.01" />
          <path d="M12 13h.01" />
          <path d="M16 13h.01" />
          <path d="M8 17h.01" />
          <path d="M12 17h.01" />
        </svg>
      );

    case "slots":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3.5V1.8" />
          <path d="M20.5 12h1.7" />
          <path d="M12 20.5v1.7" />
          <path d="M3.5 12H1.8" />
        </svg>
      );

    case "pharmacy":
      return (
        <svg {...iconProps}>
          <path d="M7.4 5.4a4 4 0 0 1 5.7 0l5.5 5.5a4 4 0 0 1-5.7 5.7l-5.5-5.5a4 4 0 0 1 0-5.7Z" />
          <path d="m9.5 13 4.5-4.5" />
          <path d="M15.5 17.5 18 20" />
        </svg>
      );

    case "classes":
      return (
        <svg {...iconProps}>
          <path d="M3 6.5h18" />
          <path d="M5 6.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5" />
          <rect x="3" y="6.5" width="18" height="13.5" rx="2.5" />
          <path d="M8 11h8" />
          <path d="M8 15h5" />
        </svg>
      );

    case "reception":
      return (
        <svg {...iconProps}>
          <path d="M5 20h14" />
          <path d="M7 20v-6h10v6" />
          <path d="M9 14v-3a3 3 0 0 1 6 0v3" />
          <circle cx="12" cy="5" r="2" />
          <path d="M3 20h18" />
        </svg>
      );

    case "spc":
      return (
        <svg {...iconProps}>
          <path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6z" />
          <circle cx="12" cy="10" r="2.4" />
          <path d="M8.5 16a3.5 3.5 0 0 1 7 0" />
        </svg>
      );

    case "computers":
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="13" rx="2.5" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 8h10" />
          <path d="M7 12h5" />
        </svg>
      );

    case "orders":
      return (
        <svg {...iconProps}>
          <path d="m4 7 8-4 8 4-8 4z" />
          <path d="M4 7v10l8 4 8-4V7" />
          <path d="M12 11v10" />
          <path d="m8 5 8 4" />
        </svg>
      );

    case "graduation-presentation":
      return (
        <svg {...iconProps}>
          <path d="m3 9 9-5 9 5-9 5z" />
          <path d="M7 12v4c2.7 2.1 7.3 2.1 10 0v-4" />
          <path d="M21 9v6" />
          <path d="M5 21h14" />
        </svg>
      );

    case "whatsapp-schedule":
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="15" height="16" rx="2.5" />
          <path d="M7 2v4" />
          <path d="M14 2v4" />
          <path d="M3 9h15" />
          <path d="M20.5 12.5a4 4 0 0 0-6.5 4.6L13.5 21l3.7-.7a4 4 0 0 0 3.3-7.8Z" />
          <path d="M17 15.2c.5 1 1.2 1.7 2.2 2.2" />
        </svg>
      );

    case "graduation-system":
      return (
        <svg {...iconProps}>
          <path d="m3 8 9-5 9 5-9 5z" />
          <path d="M7 11v4c2.8 2.1 7.2 2.1 10 0v-4" />
          <circle cx="18" cy="18" r="3" />
          <path d="M18 13.5V15" />
          <path d="M18 21v1.5" />
          <path d="m14.8 14.8 1 1" />
          <path d="m20.2 20.2 1 1" />
        </svg>
      );

    case "onboarding-manual":
      return (
        <svg {...iconProps}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22z" />
          <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22z" />
          <path d="m15.5 9 1.4 1.4L20 7.3" />
        </svg>
      );

    case "referrals":
      return (
        <svg {...iconProps}>
          <circle cx="8" cy="8" r="3" />
          <path d="M2.5 19a5.5 5.5 0 0 1 11 0" />
          <circle cx="17.5" cy="7.5" r="2.5" />
          <path d="M16 18.5a4.5 4.5 0 0 1 6-4.2" />
          <path d="M18.5 11v4" />
          <path d="M16.5 13h4" />
        </svg>
      );

    case "reception-pending":
      return (
        <svg {...iconProps}>
          <path d="M3 20h18" />
          <path d="M5 20v-6h8v6" />
          <path d="M7 14v-2a2 2 0 0 1 4 0v2" />
          <circle cx="9" cy="6" r="2" />
          <rect x="14" y="4" width="7" height="11" rx="1.5" />
          <path d="M17.5 7v3" />
          <path d="M17.5 12h.01" />
        </svg>
      );

    case "enrollments":
      return (
        <svg {...iconProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <circle cx="10" cy="13" r="2" />
          <path d="M7 18a3 3 0 0 1 6 0" />
          <path d="M16 13v4" />
          <path d="M14 15h4" />
        </svg>
      );

    case "beginners":
      return (
        <svg {...iconProps}>
          <circle cx="8" cy="8" r="3" />
          <path d="M2.5 20a5.5 5.5 0 0 1 11 0" />
          <path d="M16 21V4" />
          <path d="M16 5h5l-2 3 2 3h-5" />
        </svg>
      );

    case "pricing":
      return (
        <svg {...iconProps}>
          <path d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0L3.5 13.3a2 2 0 0 1 0-2.8L10.5 3.5H18a2 2 0 0 1 2 2V13a2 2 0 0 1-.5 1.5Z" />
          <circle cx="15.5" cy="8" r="1.5" />
          <path d="M8 13h6" />
          <path d="M11 10v6" />
        </svg>
      );

    case "rematriculation":
      return (
        <svg {...iconProps}>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v5h5" />
          <path d="M8.5 14a4 4 0 0 1 6.8-2.8" />
          <path d="m15.5 8.8-.2 2.4-2.4-.2" />
          <path d="M15.5 14a4 4 0 0 1-6.8 2.8" />
          <path d="m8.5 19.2.2-2.4 2.4.2" />
        </svg>
      );

    case "results":
      return (
        <svg {...iconProps}>
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20H2" />
          <path d="m4 7 5-3 5 4 6-5" />
          <path d="m17 3h3v3" />
        </svg>
      );

    case "badge-photos":
      return (
        <svg {...iconProps}>
          <rect x="3" y="5" width="18" height="15" rx="2.5" />
          <circle cx="9" cy="11" r="2.5" />
          <path d="M5.5 17a3.5 3.5 0 0 1 7 0" />
          <path d="M15 10h3" />
          <path d="M15 14h3" />
          <path d="M8 5V3h8v2" />
        </svg>
      );

    case "instructors":
      return (
        <svg {...iconProps}>
          <path d="M3 6.5h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <circle cx="10" cy="13" r="2" />
          <path d="M6.5 18a3.5 3.5 0 0 1 7 0" />
          <circle cx="16.5" cy="12.5" r="1.5" />
          <path d="M15.5 16.5a3 3 0 0 1 4 2" />
        </svg>
      );

    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
  }
}

export default function LinkHub({ config, links }: { config: Config; links: LinkItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [theme, setTheme] = useState<"light" | "dark">(config.defaultTheme);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(links.map((item) => item.category)))],
    [links]
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return [...links]
      .sort((a, b) => a.number - b.number)
      .filter((item) => {
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

  function changeTheme() {
    setTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }

  return (
    <main className="site" data-theme={theme}>
      <div className="top-actions">
        <button
          className="theme-button"
          type="button"
          aria-label={`Ativar modo ${nextTheme === "light" ? "claro" : "escuro"}`}
          onClick={changeTheme}
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
                <HubIcon name={item.icon} />
              </div>
              <div className="card-content">
                <div className="card-heading">
                  <div className="card-title-group">
                    <span className="card-number">{item.number}</span>
                    <h2>{item.title}</h2>
                  </div>
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
