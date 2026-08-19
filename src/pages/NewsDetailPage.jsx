import { Link, useParams } from "react-router-dom";
import { news } from "../data/news";
import Logo from "../components/Logo";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-white pt-32">
        <div className="text-center">
          <Logo className="mx-auto h-24 w-24 opacity-30" />
          <h1 className="mt-6 font-display text-3xl font-black uppercase text-navy-900">
            Noticia no encontrada
          </h1>
          <Link
            to="/noticias"
            className="mt-6 inline-block rounded-full bg-navy-900 px-6 py-3 font-bold text-white hover:bg-gold-500 hover:text-navy-900"
          >
            Ver todas las noticias
          </Link>
        </div>
      </section>
    );
  }

  const otherNews = news.filter((n) => n.id !== article.id).slice(0, 3);

  return (
    <article className="bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-16 text-white sm:pt-36 sm:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${article.imagen}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-900/70" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-200">
            <Link to="/" className="hover:text-gold-400">
              Inicio
            </Link>
            <span className="text-gold-400">/</span>
            <Link to="/noticias" className="hover:text-gold-400">
              Noticias
            </Link>
            <span className="text-gold-400">/</span>
            <span className="text-gold-400">Artículo</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-900">
            {article.categoria}
          </span>

          <h1 className="mt-6 font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            {article.titulo}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy-200">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-xs font-black text-navy-900">
                {article.autor?.[0] || "E"}
              </div>
              <div>
                <p className="text-xs text-navy-300">Por</p>
                <p className="font-bold text-white">{article.autor}</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{article.fecha}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
          <p className="text-lg font-semibold leading-relaxed text-navy-900 sm:text-xl">
            {article.resumen}
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold-500" />

          <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-700 sm:text-lg">
            {article.contenido.map((parrafo, i) => (
              <p key={i}>{parrafo}</p>
            ))}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-10 border-t border-navy-100 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
                Etiquetas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-navy-100 px-3 py-1 text-xs font-bold text-navy-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="mt-10 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Comparte esta noticia
            </p>
            <p className="mt-2 text-base font-semibold">
              Ayúdanos a difundir el mensaje del cambio.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Instagram"].map((s) => (
                <a
                  key={s}
                  href="https://www.instagram.com/epc2028_2032/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:border-gold-400 hover:bg-gold-500 hover:text-navy-900"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other news */}
      <section className="bg-navy-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
                Más Noticias
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase text-navy-900 sm:text-3xl">
                Sigue informándote
              </h3>
            </div>
            <Link
              to="/noticias"
              className="hidden text-sm font-bold uppercase tracking-wider text-gold-600 hover:text-navy-900 sm:inline"
            >
              Ver todas →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherNews.map((n) => (
              <Link
                key={n.id}
                to={`/noticias/${n.slug}`}
                className="group card-base overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={n.imagen}
                    alt={n.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900">
                    {n.categoria}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-navy-500">{n.fecha}</p>
                  <h4 className="mt-2 line-clamp-2 font-display text-base font-black uppercase leading-tight text-navy-900 transition-colors group-hover:text-gold-600">
                    {n.titulo}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}