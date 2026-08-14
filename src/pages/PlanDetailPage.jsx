import { Link, useParams } from "react-router-dom";
import { plans } from "../data/plans";
import Logo from "../components/Logo";
import Icon from "../components/Icon";

export default function PlanDetailPage() {
  const { slug } = useParams();
  const plan = plans.find((p) => p.slug === slug);

  if (!plan) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-white pt-32">
        <div className="text-center">
          <Logo className="mx-auto h-24 w-24 opacity-30" />
          <h1 className="mt-6 font-display text-3xl font-black uppercase text-navy-900">
            Plan no encontrado
          </h1>
          <Link
            to="/planes"
            className="mt-6 inline-block rounded-full bg-navy-900 px-6 py-3 font-bold text-white hover:bg-gold-500 hover:text-navy-900"
          >
            Ver todos los planes
          </Link>
        </div>
      </section>
    );
  }

  const otherPlans = plans.filter((p) => p.id !== plan.id);

  return (
    <>
      {/* Hero */}
      <section
        className={`relative isolate overflow-hidden bg-gradient-to-br ${plan.color} pt-32 pb-20 text-white`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${plan.imagen}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/40 via-transparent to-black/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Link to="/" className="hover:text-gold-300">
              Inicio
            </Link>
            <span className="text-gold-300">/</span>
            <Link to="/planes" className="hover:text-gold-300">
              Planes
            </Link>
            <span className="text-gold-300">/</span>
            <span className="text-gold-300">{plan.titulo}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                {plan.area}
              </span>
              <h1 className="mt-4 font-display text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                {plan.titulo}
              </h1>
              <div className="mt-4 h-1 w-20 rounded-full bg-gold-300" />
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/95 sm:text-lg">
                {plan.descripcion}
              </p>
            </div>

            <div className="text-8xl lg:text-9xl">
              <Icon name={plan.icono} className="h-24 w-24 lg:h-32 lg:w-32" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-4 rounded-3xl bg-navy-50 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Plazo
              </p>
              <p className="mt-1 font-display text-lg font-black text-navy-900">
                {plan.plazo}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Inversión
              </p>
              <p className="mt-1 font-display text-lg font-black text-navy-900">
                {plan.presupuesto}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Pilares
              </p>
              <p className="mt-1 font-display text-lg font-black text-navy-900">
                {plan.pilares.length} ejes
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Propuestas
              </p>
              <p className="mt-1 font-display text-lg font-black text-navy-900">
                {plan.propuestasDetalladas.length} acciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full description */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
            Visión Completa
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
            ¿Por qué este plan?
          </h2>
          <div className="gold-divider mt-4 !ml-0" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700 sm:text-lg">
            {plan.descripcionCompleta.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-navy-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
              Ejes Estratégicos
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
              Pilares del Plan
            </h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {plan.pilares.map((pil, i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-navy-100 bg-white p-5 text-center transition-all hover:border-gold-400 hover:shadow-card"
              >
                <span className="flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-navy-900 text-base font-black text-gold-400">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-bold text-navy-900">{pil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed proposals */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
              Plan de Acción
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
              Propuestas Concretas
            </h2>
            <div className="gold-divider mt-4" />
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy-700">
              Acciones específicas con metas medibles y plazos definidos.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {plan.propuestasDetalladas.map((p, i) => (
              <div
                key={p.titulo}
                className="grid gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:border-gold-400 sm:grid-cols-12 sm:gap-6 sm:p-8"
              >
                <div className="flex items-start sm:col-span-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-navy-700 text-lg font-black text-gold-400">
                    {i + 1}
                  </span>
                  <div className="ml-4">
                    <h3 className="font-display text-xl font-black uppercase leading-tight text-navy-900">
                      {p.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700 sm:text-base">
                      {p.descripcion}
                    </p>
                  </div>
                </div>
                <div className="flex items-center rounded-xl bg-gold-50 p-4 sm:col-span-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-700">
                      Impacto esperado
                    </p>
                    <p className="mt-1 font-display text-base font-black text-navy-900">
                      {p.impacto}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metas cuantitativas */}
      <section
        className={`bg-gradient-to-br ${plan.color} py-16 text-white sm:py-20`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
              Indicadores de Éxito
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Metas Cuantificables
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plan.metasCuantitativas.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-sm font-black text-navy-900">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-bold leading-relaxed sm:text-base">
                  {m}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
            Sé parte del cambio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-700">
            Conoce cómo cada plan de gobierno se conecta con los demás ejes
            estratégicos para transformar la República Dominicana.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/planes" className="btn-primary">
              Ver todos los planes
            </Link>
            <Link
              to="/ministerios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
            >
              Ver ministerios
            </Link>
          </div>
        </div>
      </section>

      {/* Other plans */}
      <section className="bg-navy-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Otros Planes
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase text-navy-900 sm:text-3xl">
                Sigue explorando
              </h3>
            </div>
            <Link
              to="/planes"
              className="hidden text-sm font-bold uppercase tracking-wider text-gold-600 hover:text-navy-900 sm:inline"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherPlans.map((p) => (
              <Link
                key={p.id}
                to={`/planes/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all hover:border-gold-400 hover:shadow-card"
              >
                <div
                  className={`relative h-24 bg-gradient-to-br ${p.color} p-5 text-white`}
                >
                  <Icon name={p.icono} className="h-8 w-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gold-600">
                    {p.area}
                  </p>
                  <p className="mt-1 font-display text-sm font-black uppercase leading-tight text-navy-900">
                    {p.titulo}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}