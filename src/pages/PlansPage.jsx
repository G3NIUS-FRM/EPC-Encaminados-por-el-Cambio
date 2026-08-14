import { Link } from "react-router-dom";
import { plans } from "../data/plans";
import PageHeader from "../components/PageHeader";
import Icon from "../components/Icon";

export default function PlansPage() {
  return (
    <>
      <PageHeader
        subtitulo="Nuestras Propuestas"
        titulo="Planes para el Cambio"
        breadcrumb={[{ label: "Planes" }]}
        imagen="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <Link
                key={p.id}
                to={`/planes/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`relative h-40 bg-gradient-to-br ${p.color} p-6 text-white`}
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                  <Icon name={p.icono} className="relative h-14 w-14" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gold-600">
                    {p.area}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-black uppercase leading-tight text-navy-900 transition-colors group-hover:text-gold-600">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-navy-700">
                    {p.descripcion}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {p.pilares.slice(0, 2).map((pil, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-navy-600"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                        {pil}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-600 transition-all group-hover:gap-2">
                    Ver plan completo →
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