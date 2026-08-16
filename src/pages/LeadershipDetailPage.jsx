import { Link, useParams } from "react-router-dom";
import { leadership } from "../data/leadership";
import Logo from "../components/Logo";
import Icon from "../components/Icon";

export default function LeadershipDetailPage() {
  const { slug } = useParams();
  const leader = leadership.find(
    (l) => l.slug === slug || l.id === slug,
  );

  if (!leader) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-white pt-32">
        <div className="text-center">
          <Logo className="mx-auto h-24 w-24 opacity-30" />
          <h1 className="mt-6 font-display text-3xl font-black uppercase text-navy-900">
            Líder no encontrado
          </h1>
          <p className="mt-2 text-navy-600">
            No se encontró la información solicitada.
          </p>
          <Link
            to="/miembros"
            className="mt-6 inline-block rounded-full bg-navy-900 px-6 py-3 font-bold text-white hover:bg-gold-500 hover:text-navy-900"
          >
            Volver a miembros
          </Link>
        </div>
      </section>
    );
  }

  // Datos auxiliares cuando aplican al líder
  const showExtra =
    Boolean(leader.trayectoria) ||
    Boolean(leader.estiloLiderazgo) ||
    Boolean(leader.valores) ||
    Boolean(leader.estudios);

  // Datos calculados para la tarjeta lateral
  const edad =
    leader.id === "presidente" ? "20 años" : "18 años";
  const profesion =
    leader.id === "presidente"
      ? "Líder juvenil y estudiante"
      : "Estudiante de Software";

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden bg-navy-950 pt-32 pb-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${leader.imagen}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-800/85" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-200">
              <Link to="/" className="hover:text-gold-400">
                Inicio
              </Link>
              <span className="text-gold-400">/</span>
              <Link to="/miembros" className="hover:text-gold-400">
                Miembros
              </Link>
              <span className="text-gold-400">/</span>
              <span className="text-gold-400">{leader.nombre}</span>
            </nav>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              {leader.cargo}
            </div>

            <h1 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
              {leader.nombre}
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-gold-500" />

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-navy-100 sm:text-lg">
              {leader.bio}
            </p>
          </div>

          {/* Tarjeta lateral */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Cargo
            </p>
            <p className="mt-2 font-display text-2xl font-black uppercase leading-tight">
              {leader.cargo}
            </p>
            <div className="mt-5 h-1 w-12 rounded-full bg-gold-500" />

            <div className="mt-5 space-y-3 text-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Encuéntranos
                </p>
                <p className="mt-1 text-navy-100">
                  Encuentra a {leader.nombre.split(" ")[0]} en la sección de
                  liderazgo.
                </p>
              </div>
              <Link
                to="/miembros"
                className="mt-4 block rounded-full bg-gold-500 px-4 py-2.5 text-center text-sm font-bold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-gold-glow"
              >
                Volver a miembros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visión */}
      {leader.vision && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Visión
              </p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
                Nuestra {leader.cargo === "Presidente del Partido" ? "mirada" : "mirada"}{" "}
                del futuro
              </h2>
              <div className="gold-divider mt-4" />
            </div>

            <blockquote className="relative mt-10 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-8 text-white shadow-2xl sm:p-12">
              <Icon
                name="sparkles"
                className="absolute -top-5 left-8 h-10 w-10 text-gold-400"
                strokeWidth={2}
              />
              <p className="font-display text-xl font-medium leading-relaxed sm:text-2xl">
                “{leader.vision}”
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-gold-500" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-gold-400">
                {leader.nombre} — {leader.cargo}
              </p>
            </blockquote>
          </div>
        </section>
      )}

      {/* Propuestas */}
      {leader.propuestas && leader.propuestas.length > 0 && (
        <section className="bg-navy-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Plan de Trabajo
              </p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
                Propuestas Concretas
              </h2>
              <div className="gold-divider mt-4" />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {leader.propuestas.map((p, i) => (
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
      )}

      {/* Información adicional (Vicepresidenta) */}
      {showExtra && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-10">
            <div className="lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Perfil
              </p>
              <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900">
                Quién es
              </h2>
              <div className="gold-divider mt-4 !ml-0" />

              {leader.nacimiento && (
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Nacimiento
                  </p>
                  <p className="mt-2 text-base text-navy-900">
                    {leader.nacimiento}
                  </p>
                </div>
              )}

              {leader.estudios && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Formación Académica
                  </p>
                  <ul className="mt-3 space-y-2">
                    {leader.estudios.map((e, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 border-b border-navy-100 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                        <span className="text-sm text-navy-700">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {leader.trayectoria && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Trayectoria
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-navy-700">
                    {leader.trayectoria}
                  </p>
                </div>
              )}

              {leader.valores && leader.valores.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Valores
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {leader.valores.map((v, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full border border-gold-400 bg-gold-50 px-4 py-1.5 text-sm font-bold text-gold-700"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {leader.estiloLiderazgo && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-600">
                    Estilo de Liderazgo
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-navy-700">
                    {leader.estiloLiderazgo}
                  </p>
                </div>
              )}
            </div>

            <aside>
              <img
                src={leader.imagen}
                alt={leader.nombre}
                className="rounded-2xl shadow-card"
              />
              <div className="mt-6 rounded-2xl border-2 border-gold-400 bg-gold-50 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-700">
                  Datos clave
                </p>
                <ul className="mt-3 space-y-2 text-sm text-navy-800">
                  <li className="flex justify-between border-b border-gold-200 pb-2">
                    <span className="text-navy-600">Cargo</span>
                    <span className="font-bold">{leader.cargo}</span>
                  </li>
                  <li className="flex justify-between border-b border-gold-200 pb-2">
                    <span className="text-navy-600">Edad</span>
                    <span className="font-bold">{edad}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-navy-600">Profesión</span>
                    <span className="font-bold">{profesion}</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl">
            Juntos, transformamos mañana
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-navy-700">
            Conoce a todos los miembros que hacen posible esta propuesta de
            cambio para la República Dominicana.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/miembros" className="btn-primary">
              Ver liderazgo completo
            </Link>
            <Link
              to="/sobre-nosotros"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 font-bold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
            >
              Conoce nuestra historia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
