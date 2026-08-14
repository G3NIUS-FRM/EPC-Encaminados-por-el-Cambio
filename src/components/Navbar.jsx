import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#miembros", label: "Miembros" },
  { href: "#ministerios", label: "Ministerios" },
  { href: "#noticias", label: "Noticias" },
  { href: "#planes", label: "Planes" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
          <div
            className={`hidden sm:block leading-tight transition-colors ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            <p className="font-display text-sm font-extrabold uppercase tracking-wider">
              Encaminados
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500">
              por el Cambio
            </p>
          </div>
        </a>

        <ul
          className={`hidden lg:flex items-center gap-8 ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-gold-glow"
        >
          Únete al Cambio
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${
            scrolled ? "text-navy-900" : "text-white"
          }`}
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 bg-white shadow-xl" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 text-navy-900">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-navy-50 hover:text-gold-600"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="px-1 pt-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-bold text-navy-900"
            >
              Únete al Cambio
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}