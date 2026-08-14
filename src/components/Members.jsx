import { leadership } from "../data/leadership";
import { ministries } from "../data/ministries";

export default function Members() {
  return (
    <section
      id="miembros"
      className="relative bg-gradient-to-b from-navy-50 to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
            Nuestro Equipo
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Liderazgo del Partido
          </h2>
          <div className="gold-divider mt-4" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-700">
            Mujeres y hombres comprometidos con el presente y futuro de la
            República Dominicana.
          </p>
        </div>

        {/* Top leadership */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {leadership.map((p, idx) => (
            <div
              key={p.id}
              className={`group relative overflow-hidden rounded-3xl shadow-card transition-all hover:-translate-y-1 hover:shadow-2xl ${
                idx === 0
                  ? "bg-navy-900 text-white lg:col-span-2"
                  : "bg-white text-navy-900"
              }`}
            >
              <div className={`grid ${idx === 0 ? "lg:grid-cols-5" : ""}`}>
                <div
                  className={`relative ${
                    idx === 0
                      ? "h-72 lg:col-span-2 lg:h-auto"
                      : "h-72 sm:h-80"
                  }`}
                >
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      idx === 0
                        ? "bg-gradient-to-r from-transparent via-transparent to-navy-900"
                        : "bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent"
                    }`}
                  />
                </div>
                <div
                  className={`p-6 sm:p-8 ${idx === 0 ? "lg:p-10" : ""} flex flex-col justify-center`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.3em] ${
                      idx === 0 ? "text-gold-400" : "text-gold-600"
                    }`}
                  >
                    {p.cargo}
                  </p>
                  <h3
                    className={`mt-2 font-display text-2xl font-black uppercase leading-tight sm:text-3xl ${
                      idx === 0 ? "lg:text-4xl" : ""
                    }`}
                  >
                    {p.nombre}
                  </h3>
                  <div
                    className={`mt-3 h-1 w-16 rounded-full ${
                      idx === 0 ? "bg-gold-500" : "bg-gold-400"
                    }`}
                  />
                  <p
                    className={`mt-4 text-sm leading-relaxed sm:text-base ${
                      idx === 0 ? "text-navy-100" : "text-navy-700"
                    }`}
                  >
                    {p.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ministries listing summary */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-8 text-white shadow-card sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
                Gabinete
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase sm:text-3xl">
                13 Ministerios al Servicio del Pueblo
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-navy-100 sm:text-base">
                Cada ministerio está dirigido por profesionales comprometidos
                con transformar la gestión pública.
              </p>
            </div>
            <a
              href="#ministerios"
              className="btn-primary shrink-0"
            >
              Ver Ministerios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}