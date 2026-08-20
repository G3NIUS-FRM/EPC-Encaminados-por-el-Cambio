import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-navy-950 text-white"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=80')",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-800/80" />
      {/* Gold accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 via-transparent to-transparent" />

      {/* Decorative starburst pattern */}
      <div className="absolute inset-0 star-pattern opacity-20" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6 lg:px-10">
        <div className="mb-6 flex flex-col items-center gap-4 animate-fade-up">
          <Logo className="h-28 w-28 sm:h-36 sm:w-36 drop-shadow-2xl" />
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold-400" />
              Partido Político · República Dominicana · 2026
            </span>
          </div>
        </div>

        <h1
          className="font-display text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block text-white">Encaminados</span>
          <span className="block text-gradient-gold">por el Cambio</span>
        </h1>

        <p
          className="mt-6 max-w-3xl text-lg font-medium uppercase tracking-[0.2em] text-gold-400 sm:text-xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Unidos Hoy, Transformamos Mañana
        </p>

        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Un nuevo espacio político para los dominicanos. Donde la
          participación, la transparencia y el compromiso con el pueblo son el
          camino para construir el país que merecemos.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link to="/sobre-nosotros" className="btn-primary">
            Conoce Nuestra Historia
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={3} />
          </Link>
          <Link to="/planes" className="btn-outline">
            Ver Planes de Gobierno
          </Link>
        </div>

        {/* Quick stats */}
        <div
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { n: "12", l: "Ministerios" },
            { n: "7", l: "Planes Estratégicos" },
            { n: "31", l: "Provincias" },
            { n: "2026", l: "El Año del Cambio" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-black text-gold-400 sm:text-4xl">
                {s.n}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-navy-100">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold-400 pt-2">
          <div className="h-2 w-1 rounded-full bg-gold-400" />
        </div>
      </div>
    </section>
  );
}