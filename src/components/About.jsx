export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gold-400/20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-navy-600/20 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80"
                alt="Comunidad"
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card"
              />
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                  alt="Unidad"
                  className="aspect-square w-full rounded-2xl object-cover shadow-card"
                />
                <div className="rounded-2xl bg-navy-900 p-6 text-white shadow-card">
                  <p className="font-display text-4xl font-black text-gold-400">
                    2026
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest">
                    El año del cambio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
              Sobre Nosotros
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Una historia de
              <span className="block text-gold-500">unidad y propósito</span>
            </h2>
            <div className="gold-divider mt-4 !ml-0" />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700 sm:text-lg">
              <p className="font-semibold text-navy-900">
                Nuestro partido nació de una idea sencilla, pero poderosa: un
                país puede avanzar cuando sus ciudadanos tienen la oportunidad
                de participar, aportar sus ideas y trabajar juntos por un mejor
                futuro.
              </p>
              <p>
                La historia comenzó cuando un grupo de jóvenes y ciudadanos
                comprometidos decidió unirse para crear un nuevo espacio
                político basado en la{" "}
                <strong>unidad, la transparencia, la participación ciudadana</strong>{" "}
                y el compromiso con el desarrollo nacional.
              </p>
              <p>
                Con el paso del tiempo, fuimos sumando personas con diferentes
                experiencias, profesiones e ideas, pero con un objetivo común:
                contribuir a la construcción de una sociedad con mayores
                oportunidades para todos.
              </p>
              <p>
                Uno de los momentos más importantes fue la creación de nuestro
                primer programa de propuestas, con prioridades claras:{" "}
                <strong>
                  educación, salud, seguridad, empleo, tecnología, juventud y
                  medio ambiente
                </strong>
                .
              </p>
              <p>
                Hoy miramos hacia el futuro con la misma convicción con la que
                comenzamos:{" "}
                <em className="font-semibold text-navy-900">
                  servir, representar y trabajar por una sociedad más justa,
                  participativa y llena de oportunidades.
                </em>
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { t: "Unidad", i: "🤝" },
                { t: "Transparencia", i: "🔍" },
                { t: "Participación", i: "🗳️" },
                { t: "Compromiso", i: "⭐" },
              ].map((v) => (
                <div
                  key={v.t}
                  className="rounded-xl border-2 border-navy-100 bg-navy-50/50 p-4 text-center transition-colors hover:border-gold-400"
                >
                  <p className="text-2xl">{v.i}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-navy-900">
                    {v.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}