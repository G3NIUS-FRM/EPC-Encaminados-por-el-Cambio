import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Icon from "../components/Icon";

const sections = [
  {
    to: "/sobre-nosotros",
    title: "Sobre Nosotros",
    description:
      "Conoce la historia, los valores y la visión que guían nuestro compromiso con República Dominicana.",
    icon: "users",
    accent: "border-gold-400",
  },
  {
    to: "/miembros",
    title: "Miembros",
    description:
      "El equipo de liderazgo y el gabinete ministerial que liderará el camino del cambio.",
    icon: "briefcase",
    accent: "border-navy-600",
  },
  {
    to: "/ministerios",
    title: "Ministerios",
    description:
      "13 carteras con propuestas concretas, equipo profesional y metas claras para cada área.",
    icon: "building",
    accent: "border-gold-400",
  },
  {
    to: "/planes",
    title: "Planes de Gobierno",
    description:
      "Siete ejes estratégicos con acciones específicas, presupuesto y plazos definidos.",
    icon: "megaphone",
    accent: "border-navy-600",
  },
  {
    to: "/noticias",
    title: "Sala de Prensa",
    description:
      "Las últimas actividades, anuncios y eventos de nuestro partido en todo el país.",
    icon: "newspaper",
    accent: "border-gold-400",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
            Bienvenido
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Construyamos juntos el país que merecemos
          </h2>
          <div className="gold-divider mt-4" />
          <p className="mt-6 text-base leading-relaxed text-navy-700 sm:text-lg">
            Somos un partido político dominicano que nace del compromiso con la
            unidad, la transparencia y la participación ciudadana. Aquí
            encontrarás todo lo que necesitas conocer sobre nuestra propuesta,
            nuestro equipo y nuestras ideas.
          </p>
        </div>
      </section>

      {/* Sections grid */}
      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                className={`group relative overflow-hidden rounded-2xl border-t-4 ${s.accent} bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-8`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-100/50 blur-2xl transition-all group-hover:bg-gold-200/60" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Icon
                      name={s.icon}
                      className="h-7 w-7"
                      strokeWidth={1.75}
                    />
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-navy-500">
                    0{i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-black uppercase leading-tight text-navy-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">
                    {s.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-600 transition-all group-hover:gap-3">
                    Explorar
                    <Icon name="arrowRight" className="h-4 w-4" strokeWidth={3} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cita de cierre */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/90" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Nuestro Compromiso
          </p>
          <blockquote className="mt-6 font-display text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">
            "La política debe estar conectada con las personas y sus
            comunidades. Cada ciudadano que participa, cada idea que se
            convierte en propuesta, forma parte del camino que seguimos
            construyendo."
          </blockquote>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gold-500" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gold-400">
            Encaminados por el Cambio
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/sobre-nosotros" className="btn-primary">
              Conoce nuestra historia
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={3} />
            </Link>
            <Link to="/planes" className="btn-outline">
              Ver propuestas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}