import { Link } from "react-router-dom";

export default function PageHeader({
  titulo,
  subtitulo,
  breadcrumb = [],
  imagen,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
      {imagen && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imagen}')` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-800/85" />
      <div className="absolute inset-0 star-pattern opacity-15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {breadcrumb.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-200">
            <Link to="/" className="hover:text-gold-400">
              Inicio
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-gold-400">/</span>
                {b.to ? (
                  <Link to={b.to} className="hover:text-gold-400">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-gold-400">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
          {subtitulo}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
          {titulo}
        </h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-gold-500" />
      </div>
    </section>
  );
}