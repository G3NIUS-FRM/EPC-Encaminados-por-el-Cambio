import { useState } from "react";
import { ministries } from "../data/ministries";

export default function Ministries() {
  const [filter, setFilter] = useState("Todos");

  const areas = [
    "Todos",
    ...Array.from(new Set(ministries.map((m) => m.nombre.split(" ")[1]))),
  ];

  const filtered =
    filter === "Todos"
      ? ministries
      : ministries.filter((m) => m.nombre.includes(filter));

  return (
    <section
      id="ministerios"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
            Nuestros Ministerios
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Equipo de Gobierno
          </h2>
          <div className="gold-divider mt-4" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-700">
            Cada ministerio está liderado por profesionales con experiencia,
            preparados para servir a la República Dominicana.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {["Todos", ...new Set(ministries.map((m) =>
            m.nombre.split("Ministerio de ")[1]?.split(" y")[0] || m.nombre
          ))].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat
                  ? "bg-navy-900 text-gold-400 shadow-md"
                  : "bg-navy-50 text-navy-700 hover:bg-navy-100"
              }`}
            >
              {cat.length > 22 ? cat.slice(0, 22) + "…" : cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m, i) => (
            <article
              key={m.id}
              className="group card-base flex flex-col overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={m.imagen}
                  alt={m.nombre}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                <div className="absolute top-3 right-3 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                  {m.nombre.split("Ministerio de ")[1]?.split(" y")[0]?.split(",")[0] || "EPC"}
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                    Titular
                  </p>
                  <p className="font-display text-lg font-bold">
                    {m.titular}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-black uppercase leading-tight text-navy-900">
                  {m.nombre}
                </h3>
                <div className="mt-2 h-0.5 w-10 bg-gold-500" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                  {m.descripcion}
                </p>
                <a
                  href="#contacto"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-navy-900"
                >
                  Conoce más
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}