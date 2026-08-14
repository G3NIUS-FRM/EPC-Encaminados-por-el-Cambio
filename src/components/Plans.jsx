import { useState } from "react";
import { plans } from "../data/plans";

export default function Plans() {
  const [active, setActive] = useState(plans[0].id);
  const current = plans.find((p) => p.id === active);

  return (
    <section id="planes" className="relative bg-white py-20 sm:py-28">
      {/* Decorative background */}
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
            merecemos. Cada plan está diseñado con metas claras, indicadores
            medibles y participación ciudadana.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all sm:text-sm ${
                active === p.id
                  ? "bg-navy-900 text-gold-400 shadow-md scale-105"
                  : "bg-navy-50 text-navy-700 hover:bg-navy-100"
              }`}
            >
              <span>{p.icono}</span>
              <span className="hidden sm:inline">{p.area}</span>
            </button>
          ))}
        </div>

        {/* Active plan */}
        <div
          key={current.id}
          className="mt-10 grid animate-fade-up overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-5"
        >
          <div
            className={`relative bg-gradient-to-br ${current.color} p-8 text-white sm:p-12 lg:col-span-2`}
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-black/10 blur-2xl" />

            <div className="relative">
              <p className="text-6xl">{current.icono}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
                Plan de Gobierno
              </p>
              <h3 className="mt-2 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
                {current.titulo}
              </h3>
              <div className="mt-4 h-1 w-16 rounded-full bg-gold-400" />
              <p className="mt-6 text-sm leading-relaxed text-white/90 sm:text-base">
                {current.descripcion}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 lg:col-span-3">
            <h4 className="font-display text-xl font-black uppercase text-navy-900">
              Pilares del Plan
            </h4>
            <p className="mt-1 text-sm text-navy-600">
              Acciones concretas para hacer realidad esta propuesta.
            </p>
            <ul className="mt-6 space-y-3">
              {current.pilares.map((pilar, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-black text-navy-900">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-navy-800 sm:text-base">
                    {pilar}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn-primary">
                Únete a este plan
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}