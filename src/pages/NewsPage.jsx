import { Link } from "react-router-dom";
import { news } from "../data/news";
import PageHeader from "../components/PageHeader";

export default function NewsPage() {
  return (
    <>
      <PageHeader
        subtitulo="Sala de Prensa"
        titulo="Todas las Noticias"
        breadcrumb={[{ label: "Noticias" }]}
        imagen="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
      />
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
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
    </>
  );
}