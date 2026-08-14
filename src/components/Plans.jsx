import { Link } from "react-router-dom";
import { plans } from "../data/plans";
import Icon from "./Icon";

export default function Plans() {
  return (
    <section id="planes" className="relative bg-white py-20 sm:py-28">
      <div className="absolute inset-0 star-pattern opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
            Nuestras Propuestas
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Planes para el Cambio
          </h2>
          <div className="gold-divider mt-4" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-700">
            Siete ejes fundamentales para construir la República Dominicana que
            merecemos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <Link
              key={p.id}
              to={`/planes/${p.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`relative h-32 bg-gradient-to-br ${p.color} p-6 text-white`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <Icon name={p.icono} className="relative h-12 w-12" strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold-600">
                  {p.area}
                </p>
                <h3 className="mt-1 font-display text-lg font-black uppercase leading-tight text-navy-900 transition-colors group-hover:text-gold-600">
                  {p.titulo}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-navy-700">
                  {p.descripcion}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-600 transition-all group-hover:gap-2">
                  Ver plan completo →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}