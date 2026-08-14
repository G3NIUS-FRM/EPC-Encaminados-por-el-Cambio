import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-white pt-32 pb-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-10">
        <Logo className="mx-auto h-32 w-32 opacity-40" />
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-gold-600">
          Error 404
        </p>
        <h1 className="mt-3 font-display text-5xl font-black uppercase leading-tight text-navy-900 sm:text-6xl">
          Página no encontrada
        </h1>
        <div className="gold-divider mt-4" />
        <p className="mt-6 text-base text-navy-700 sm:text-lg">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 font-bold text-white hover:bg-gold-500 hover:text-navy-900"
          >
            Volver al inicio
          </Link>
          <Link
            to="/sobre-nosotros"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 font-bold text-navy-900 hover:bg-navy-900 hover:text-white"
          >
            Conoce más
          </Link>
        </div>
      </div>
    </section>
  );
}