import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/miembros', label: 'Miembros' },
  { to: '/ministerios', label: 'Ministerios' },
  { to: '/noticias', label: 'Noticias' },
  { to: '/planes', label: 'Planes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // On non-home pages navbar always has the solid background
  const alwaysSolid = location.pathname !== '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || alwaysSolid
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
          <div
            className={`hidden sm:block leading-tight transition-colors ${
              scrolled || alwaysSolid ? 'text-navy-900' : 'text-white'
            }`}>
            <p className="font-display text-sm font-extrabold uppercase tracking-wider">
              Encaminados
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-500">
              por el Cambio
            </p>
          </div>
        </Link>

        <ul
          className={`hidden lg:flex items-center gap-8 ${
            scrolled || alwaysSolid ? 'text-navy-900' : 'text-white'
          }`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold-500 ${
                    isActive ? 'text-gold-600' : ''
                  }`
                }>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/sobre-nosotros"
          className="hidden lg:inline-flex items-center gap-2 rounded-full border-2 border-gold-500 px-5 py-2 text-sm font-bold text-gold-600 transition-all hover:bg-gold-500 hover:text-navy-900">
          Conoce más
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${
            scrolled || alwaysSolid ? 'text-navy-900' : 'text-white'
          }`}
          aria-label="Abrir menú">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
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
          open ? 'max-h-[500px] bg-white shadow-xl' : 'max-h-0'
        }`}>
        <ul className="flex flex-col gap-1 px-4 py-4 text-navy-900">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-navy-50 hover:text-gold-600 ${
                    isActive ? 'bg-navy-50 text-gold-600' : ''
                  }`
                }>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="px-1 pt-2">
            <Link
              to="/sobre-nosotros"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-bold text-navy-900">
              Conoce más
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
