import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";

const sections = [
  {
    title: "Partido",
    links: [
      { label: "Sobre Nosotros", to: "/sobre-nosotros" },
      { label: "Liderazgo", to: "/miembros" },
      { label: "Ministerios", to: "/ministerios" },
      { label: "Noticias", to: "/noticias" },
    ],
  },
  {
    title: "Propuestas",
    links: [
      { label: "Educación 2030", to: "/planes/educacion-2030" },
      { label: "Salud Universal", to: "/planes/salud-universal" },
      { label: "Empleo Digno", to: "/planes/empleo-y-emprendimiento" },
      { label: "País Verde", to: "/planes/pais-verde" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Inscripción", to: "/contacto" },
      { label: "Prensa", to: "/contacto" },
      { label: "Voluntariado", to: "/contacto" },
      { label: "Donaciones", to: "/contacto" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <Logo className="h-14 w-14" />
              <div>
                <p className="font-display text-base font-extrabold uppercase tracking-wider">
                  Encaminados
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                  por el Cambio
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              Unidos hoy, transformamos mañana. Construyendo juntos la
              República Dominicana que merecemos.
            </p>
            <div className="mt-6 flex gap-2">
              {["IG", "FB", "X", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-bold transition-all hover:border-gold-400 hover:bg-gold-500 hover:text-navy-900"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-display text-sm font-black uppercase tracking-wider text-gold-400">
                {s.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-navy-200 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-navy-300">
            © 2026 Encaminados por el Cambio (EPC). Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-navy-300">
            Hecho con compromiso en República Dominicana
          </p>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-navy-600 via-gold-500 to-navy-600" />
    </footer>
  );
}