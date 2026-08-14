import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/90" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
            Contacto
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
            Únete al
            <span className="block text-gold-400">Cambio</span>
          </h2>
          <div className="gold-divider mt-4 !ml-0" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100">
            Tu voz es importante. Déjanos tus datos y forma parte de este
            movimiento que está transformando la política dominicana.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gold-400">
                  Sede Principal
                </p>
                <p className="mt-1 text-sm text-navy-100">
                  Av. 27 de Febrero #456, Santo Domingo, República Dominicana
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gold-400">
                  Correo
                </p>
                <p className="mt-1 text-sm text-navy-100">
                  contacto@encaminadosporelcambio.do
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gold-400">
                  Teléfono
                </p>
                <p className="mt-1 text-sm text-navy-100">
                  +1 (809) 555-2026
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8 flex gap-3">
            {["Instagram", "Facebook", "X", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-gold-400 hover:bg-gold-500 hover:text-navy-900"
                aria-label={s}
              >
                <span className="text-xs font-bold">{s[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <h3 className="font-display text-2xl font-black uppercase">
            Inscríbete
          </h3>
          <p className="mt-1 text-sm text-navy-200">
            Recibe noticias y entérate de las actividades del partido.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-400">
                Nombre completo
              </label>
              <input
                required
                type="text"
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-navy-200 outline-none transition-colors focus:border-gold-400 focus:bg-white/15"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-400">
                Correo electrónico
              </label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-navy-200 outline-none transition-colors focus:border-gold-400 focus:bg-white/15"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-400">
                Provincia
              </label>
              <select
                required
                className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold-400 focus:bg-white/15"
              >
                <option value="" className="text-navy-900">
                  Selecciona una provincia
                </option>
                <option className="text-navy-900">Santo Domingo</option>
                <option className="text-navy-900">Santiago</option>
                <option className="text-navy-900">Puerto Plata</option>
                <option className="text-navy-900">La Vega</option>
                <option className="text-navy-900">San Cristóbal</option>
                <option className="text-navy-900">Otra</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-400">
                Mensaje
              </label>
              <textarea
                rows="3"
                className="mt-2 w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-navy-200 outline-none transition-colors focus:border-gold-400 focus:bg-white/15"
                placeholder="¿Cómo quieres contribuir?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold-500 px-6 py-3.5 font-bold uppercase tracking-wider text-navy-900 transition-all hover:bg-gold-400 hover:shadow-gold-glow"
            >
              {submitted ? "✓ ¡Gracias por unirte!" : "Enviar inscripción"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}