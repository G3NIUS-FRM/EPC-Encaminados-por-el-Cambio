import { Link, useParams } from "react-router-dom";
import { ministries } from "../data/ministries";
import { plans } from "../data/plans";
import { news } from "../data/news";
import PageHeader from "../components/PageHeader";
import Logo from "../components/Logo";
import Icon from "../components/Icon";
import DonutChart from "../components/DonutChart";

export default function MinistryDetailPage() {
  const { slug } = useParams();
  const ministry = ministries.find((m) => m.slug === slug);

  if (!ministry) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-white pt-32">
        <div className="text-center">
          <Logo className="mx-auto h-24 w-24 opacity-30" />
          <h1 className="mt-6 font-display text-3xl font-black uppercase text-navy-900">
            Ministerio no encontrado
          </h1>
          <p className="mt-2 text-navy-600">
            El ministerio que buscas no existe o ha sido removido.
          </p>
          <Link
            to="/ministerios"
            className="mt-6 inline-block rounded-full bg-navy-900 px-6 py-3 font-bold text-white hover:bg-gold-500 hover:text-navy-900"
          >
            Ver todos los ministerios
          </Link>
        </div>
      </section>
    );
  }

  // Related plans: by area match
  const relatedPlans = plans
    .filter((p) => p.area === ministry.titular.split(" ")[0] || p.id.includes(ministry.id.split("-")[0]))
    .slice(0, 2);

  // Related news: by category or mention
  const relatedNews = news.slice(0, 2);

  // Other ministries
  const otherMinistries = ministries.filter((m) => m.id !== ministry.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden bg-navy-950 pt-32 pb-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${ministry.imagen}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-800/85" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <nav className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-200">
              <Link to="/" className="hover:text-gold-400">
                Inicio
              </Link>
              <span className="text-gold-400">/</span>
              <Link to="/ministerios" className="hover:text-gold-400">
                Ministerios
              </Link>
              <span className="text-gold-400">/</span>
              <span className="text-gold-400">{ministry.titular}</span>
            </nav>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              {ministry.cargo}
            </div>

            <h1 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
              {ministry.nombre}
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-gold-500" />

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-navy-100 sm:text-lg">
              {ministry.descripcion}
            </p>
          </div>

          {/* Minister card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Titular
            </p>
            <div className="mt-4 flex flex-col items-center text-center">
              <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full ring-4 ring-gold-500/50 ring-offset-4 ring-offset-navy-900/30">
                <img
                  src={ministry.imagenTitular}
                  alt={ministry.titular}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-5 font-display text-2xl font-black uppercase leading-tight">
                {ministry.titular}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-wider text-gold-400">
                {ministry.cargo}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl bg-navy-800/50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                <Icon name={ministry.icono} className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-navy-200">
                  Área
                </p>
                <p className="text-sm font-bold">{ministry.nombre.split("Ministerio de ")[1]?.split(" y")[0]}</p>
              </div>
            </div>
            <a
              href="#"
              className="mt-5 block rounded-full bg-gold-500 px-4 py-3 text-center text-sm font-bold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-gold-glow"
            >
              Ver propuestas del ministerio
            </a>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white sm:gap-6 sm:p-10 lg:grid-cols-4">
            {ministry.metricas.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-display text-4xl font-black text-gold-400 sm:text-5xl">
                  {m.valor}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-navy-100">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full description */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
              Nuestra Visión
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900">
              Hacia dónde vamos
            </h2>
            <div className="gold-divider mt-4 !ml-0" />

            {ministry.vision && (
              <blockquote className="mt-6 rounded-2xl border-l-4 border-gold-500 bg-gold-50/60 p-6 text-base italic leading-relaxed text-navy-800 shadow-sm sm:text-lg">
                <span className="block font-display text-xs font-black not-italic uppercase tracking-[0.3em] text-gold-700">
                  Visión del Ministerio
                </span>
                <p className="mt-3">{ministry.vision}</p>
              </blockquote>
            )}

            {ministry.descripcionCompleta && (
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700 sm:text-lg">
                {ministry.descripcionCompleta.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
          <aside>
            <img
              src={ministry.imagenSecundaria}
              alt={ministry.nombre}
              className="rounded-2xl shadow-card"
            />
          </aside>
        </div>
      </section>

      {/* Prioridades (donut) — sólo si la cartera define prioridades */}
      {ministry.prioridades && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <DonutChart
              data={ministry.prioridades}
              title={`Prioridades del ${ministry.nombre}`}
              subtitle="Distribución propuesta de las prioridades de gestión del Gobierno EPC 2026."
              size={320}
              thickness={56}
            />
          </div>
        </section>
      )}

      {/* Propuestas detalladas */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
              Plan de Acción
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
              Propuestas Concretas
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {ministry.propuestas.map((p, i) => (
              <div
                key={p.titulo}
                className="card-base overflow-hidden p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-lg font-black text-gold-400">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-black uppercase leading-tight text-navy-900">
                      {p.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-700 sm:text-base">
                      {p.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metas */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-3xl bg-gradient-to-br from-gold-500 to-gold-600 p-8 text-navy-900 shadow-2xl sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em]">
              Compromisos Cuantificables
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Metas del Ministerio
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {ministry.metas.map((m, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-white/30 p-4 backdrop-blur-sm"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-black text-gold-400">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold sm:text-base">
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related plans & news */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Related plans */}
            <div>
              <h3 className="font-display text-2xl font-black uppercase text-navy-900">
                Planes Relacionados
              </h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold-500" />
              <div className="mt-6 space-y-4">
                {plans.slice(0, 3).map((p) => (
                  <Link
                    to={`/planes/${p.slug}`}
                    key={p.id}
                    className="block rounded-2xl border border-navy-100 bg-white p-5 transition-all hover:border-gold-400 hover:shadow-card"
                  >
                    <div className="flex items-start gap-3">
                      <Icon name={p.icono} className="h-9 w-9 shrink-0 text-gold-600" strokeWidth={1.5} />
                      <div className="flex-1">
                        <p className="font-display text-base font-black uppercase leading-tight text-navy-900">
                          {p.titulo}
                        </p>
                        <p className="mt-1 text-xs text-navy-600">
                          {p.area}
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gold-600"
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
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related news */}
            <div>
              <h3 className="font-display text-2xl font-black uppercase text-navy-900">
                Noticias Recientes
              </h3>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold-500" />
              <div className="mt-6 space-y-4">
                {relatedNews.map((n) => (
                  <Link
                    to={`/noticias/${n.slug}`}
                    key={n.id}
                    className="flex gap-4 rounded-2xl border border-navy-100 bg-white p-4 transition-all hover:border-gold-400 hover:shadow-card"
                  >
                    <img
                      src={n.imagen}
                      alt={n.titulo}
                      className="h-20 w-20 shrink-0 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gold-600">
                        {n.categoria}
                      </p>
                      <p className="mt-1 line-clamp-2 font-display text-sm font-black uppercase leading-tight text-navy-900">
                        {n.titulo}
                      </p>
                      <p className="mt-1 text-xs text-navy-500">{n.fecha}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other ministries */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Otros Ministerios
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase text-navy-900 sm:text-3xl">
                Sigue explorando
              </h3>
            </div>
            <Link
              to="/ministerios"
              className="hidden text-sm font-bold uppercase tracking-wider text-gold-600 hover:text-navy-900 sm:inline"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherMinistries.map((m) => (
              <Link
                key={m.id}
                to={`/ministerios/${m.slug}`}
                className="group overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all hover:border-gold-400 hover:shadow-card"
              >
                <img
                  src={m.imagen}
                  alt={m.nombre}
                  className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <p className="font-display text-sm font-black uppercase leading-tight text-navy-900">
                    {m.nombre}
                  </p>
                  <p className="mt-1 text-xs text-navy-600">
                    Titular: {m.titular}
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