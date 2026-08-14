import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ministries } from '../data/ministries';
import Icon from './Icon';

export default function Ministries() {
  const [filter, setFilter] = useState('Todos');

  const filtered =
    filter === 'Todos'
      ? ministries
      : ministries.filter((m) => m.nombre.includes(filter));

  return (
    <section id="ministerios" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <Link
              to={`/ministerios/${m.slug}`}
              key={m.id}
              className="group card-base flex flex-col overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={m.imagen}
                  alt={m.nombre}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                <div className="absolute top-3 right-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-lg">
                  <Icon name={m.icono} className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                    Titular
                  </p>
                  <p className="font-display text-lg font-bold">{m.titular}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-base font-black uppercase leading-tight text-navy-900 transition-colors group-hover:text-gold-600">
                  {m.nombre}
                </h3>
                <div className="mt-2 h-0.5 w-10 bg-gold-500 transition-all group-hover:w-16" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                  {m.descripcion}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-600 transition-colors group-hover:text-navy-900">
                  Ver ministerio completo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
