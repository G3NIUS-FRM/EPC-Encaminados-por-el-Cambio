import { Link } from "react-router-dom";
import { news } from "../data/news";

export default function News() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <section id="noticias" className="relative bg-navy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
              Sala de Prensa
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Últimas Noticias
            </h2>
            <div className="gold-divider mt-4 !ml-0" />
          </div>
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy-900 transition-colors hover:text-gold-600"
          >
            Ver todas las noticias
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Featured */}
        <Link
          to={`/noticias/${featured.slug}`}
          className="mt-10 grid overflow-hidden rounded-3xl bg-white shadow-card transition-shadow hover:shadow-2xl lg:grid-cols-2"
        >
          <div className="relative h-64 lg:h-auto">
            <img
              src={featured.imagen}
              alt={featured.titulo}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-900">
              Destacado
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-navy-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                {featured.categoria}
              </span>
              <span className="text-xs text-navy-500">{featured.fecha}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-black uppercase leading-tight text-navy-900 sm:text-3xl">
              {featured.titulo}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-navy-700 sm:text-base">
              {featured.resumen}
            </p>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white">
              Leer más
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
            </span>
          </div>
        </Link>

        {/* News grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <Link
              key={n.id}
              to={`/noticias/${n.slug}`}
              className="group card-base overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={n.imagen}
                  alt={n.titulo}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                  {n.categoria}
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-navy-500">{n.fecha}</p>
                <h3 className="mt-2 line-clamp-2 font-display text-base font-black uppercase leading-tight text-navy-900 transition-colors group-hover:text-gold-600">
                  {n.titulo}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-700">
                  {n.resumen}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-600 transition-colors group-hover:text-navy-900">
                  Leer artículo completo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}