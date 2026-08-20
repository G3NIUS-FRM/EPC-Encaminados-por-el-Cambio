import { Link } from 'react-router-dom';
import { leadership } from '../data/leadership';
import { ministries } from '../data/ministries';
import Icon from './Icon';

export default function Members() {
  const presidente = leadership.find((l) => l.id === 'presidente');
  const vicepresidenta = leadership.find((l) => l.id === 'vicepresidenta');

  return (
    <section
      id="miembros"
      className="relative bg-gradient-to-b from-navy-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* President card */}
        <div className="mt-14">
          <Link
            to={`/lideres/${presidente.slug}`}
            className="group relative block overflow-hidden rounded-3xl bg-navy-900 text-white shadow-2xl transition-all hover:shadow-gold-glow">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl transition-all group-hover:bg-gold-500/20" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl transition-all group-hover:bg-gold-500/20" />

            <div className="relative grid items-stretch lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-auto lg:min-h-[460px]">
                <img
                  src={presidente.imagen}
                  alt={presidente.nombre}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy-900 lg:bg-gradient-to-r lg:from-transparent lg:via-navy-900/20 lg:to-navy-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent lg:bg-gradient-to-t lg:from-transparent lg:via-transparent lg:to-transparent" />
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
                  <span className="h-2 w-2 rounded-full bg-gold-400" />
                  {presidente.cargo}
                </span>

                <h3 className="mt-5 font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
                  {presidente.nombre}
                </h3>
                <div className="mt-4 h-1 w-20 rounded-full bg-gold-500" />

                <p className="mt-6 text-base leading-relaxed text-navy-100 sm:text-lg">
                  {presidente.bio}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-navy-100">
                    Visión de país
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-navy-100">
                    Liderazgo transformador
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-navy-100">
                    Diálogo y unidad
                  </span>
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400 transition-all group-hover:gap-3">
                  Ver visión y propuestas
                  <Icon name="arrowRight" className="h-4 w-4" strokeWidth={3} />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Vice President + Gabinete intro */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Vice President card */}
          <Link
            to={`/lideres/${vicepresidenta.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-2xl lg:col-span-2 lg:flex-row">
            {/* Image — left on desktop, top on mobile */}
            <div className="relative h-64 sm:h-72 lg:h-auto lg:w-2/5 lg:min-h-[320px]">
              <img
                src={vicepresidenta.imagen}
                alt={vicepresidenta.nombre}
                style={
                  vicepresidenta.imagePosition
                    ? { objectPosition: vicepresidenta.imagePosition }
                    : undefined
                }
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
              <span className="absolute top-3 right-3 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                {vicepresidenta.cargo}
              </span>
            </div>
            {/* Text — right on desktop, bottom on mobile */}
            <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
              <h3 className="font-display text-xl font-black uppercase leading-tight text-navy-900 sm:text-2xl">
                {vicepresidenta.nombre}
              </h3>
              <div className="mt-2 h-0.5 w-10 bg-gold-500" />
              <p className="mt-3 text-sm leading-relaxed text-navy-700">
                {vicepresidenta.bio}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600 transition-all group-hover:gap-3">
                Ver más
                <Icon name="arrowRight" className="h-3 w-3" strokeWidth={3} />
              </span>
            </div>
          </Link>

          {/* Gabinete intro card */}
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-8 text-white shadow-card lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
              Gabinete Completo
            </p>
            <h3 className="mt-3 font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
              12 Ministerios al Servicio del Pueblo
            </h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-gold-500" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
              Cada ministerio está dirigido por profesionales con experiencia,
              comprometidos con transformar la gestión pública y acercar el
              gobierno a la ciudadanía.
            </p>

            <Link
              to="/ministerios"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-gold-glow">
              Ver Gabinete Completo
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>
        </div>

        {/* Full ministers list */}
        <div className="mt-16">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Nuestros Ministros
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase text-navy-900 sm:text-3xl">
                Equipo de Gobierno
              </h3>
              <div className="gold-divider mt-3 !ml-0" />
            </div>
            <Link
              to="/ministerios"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-600 transition-colors hover:text-navy-900">
              Ver detalles de cada ministerio
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <Link
                to={`/ministerios/${m.slug}`}
                key={m.id}
                className="group card-base flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={m.imagenTitular}
                    alt={m.titular}
                    style={
                      m.imagePosition
                        ? { objectPosition: m.imagePosition }
                        : undefined
                    }
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                  <div className="absolute top-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-lg">
                    <Icon
                      name={m.icono}
                      className="h-6 w-6"
                      strokeWidth={2.5}
                    />
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
                  <h3 className="font-display text-base font-black uppercase leading-tight text-navy-900 transition-colors group-hover:text-gold-600">
                    {m.nombre}
                  </h3>
                  <div className="mt-2 h-0.5 w-10 bg-gold-500 transition-all group-hover:w-16" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                    {m.cargo}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-600 transition-colors group-hover:text-navy-900">
                    Ver ministerio completo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
