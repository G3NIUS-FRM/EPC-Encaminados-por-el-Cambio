import isaiasGerman from '../assets/isaias-german.jpeg';
import luisJorge from '../assets/luis-jorge.jpeg';
import adrianRamirez from '../assets/adrian-ramirez.jpeg';
import andryPineiro from '../assets/andry-piñeiro.jpeg';
import melvisComas from '../assets/melvis-comas.jpeg';
import heidyMoronta from '../assets/heidy-moronta.jpeg';

export const ministries = [
  {
    id: 'interior-policia',
    slug: 'interior-y-policia',
    nombre: 'Ministerio de Interior y Policía',
    titular: 'Luis Jorge Mendez',
    imagenTitular: luisJorge,
    cargo: 'Ministro',
    descripcion:
      'Encargado de velar por la seguridad ciudadana, el orden público y la convivencia pacífica. Promoveremos políticas de prevención del delito y fortalecimiento de la relación entre la policía y la comunidad.',
    descripcionCompleta:
      'El Ministerio de Interior y Policía es la institución responsable de garantizar la seguridad ciudadana, el orden público y la convivencia pacífica en todo el territorio nacional. Bajo el liderazgo de Luis Jorge Mendez, esta cartera impulsará una transformación profunda del modelo de seguridad, pasando de un enfoque reactivo a uno preventivo y comunitario.\n\nNuestra visión es construir un país donde cada ciudadano pueda vivir sin miedo, donde la confianza en las instituciones sea una realidad y donde la policía sea un aliado cercano de las comunidades. Para ello, trabajaremos en estrecha colaboración con los gobiernos locales, organizaciones civiles y el sector privado.\n\nReconocemos los enormes desafíos que enfrenta el país en materia de seguridad: el crimen organizado, la violencia intrafamiliar, los accidentes de tránsito y la percepción de impunidad. Por eso, nuestro plan contempla inversiones estratégicas en tecnología, capacitación del personal y programas sociales que ataquen las causas estructurales de la inseguridad.',
    imagen:
      'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    metricas: [
      { valor: '15,000', label: 'Nuevos agentes' },
      { valor: '500', label: 'Cámaras inteligentes' },
      { valor: '24/7', label: 'Monitoreo nacional' },
      { valor: '-40%', label: 'Meta de criminalidad' },
    ],
    propuestas: [
      {
        titulo: 'Policía de Proximidad',
        descripcion:
          'Implementación del modelo de policía comunitaria en cada barrio, con agentes capacitados para mediar conflictos y trabajar directamente con líderes vecinales.',
      },
      {
        titulo: 'Tecnología y Videovigilancia',
        descripcion:
          'Red nacional de 500 cámaras con reconocimiento facial y de placas, integradas a un centro de comando unificado con respuesta en menos de 5 minutos.',
      },
      {
        titulo: 'Reforma Policial Integral',
        descripcion:
          'Reestructuración de la formación policial, nuevos protocolos de uso de fuerza, sistema de ascensos por mérito y fiscalización anticorrupción.',
      },
      {
        titulo: 'Programa Barrio Seguro',
        descripcion:
          'Intervención integral en barrios vulnerables combinando presencia policial, programas sociales, iluminación LED y recuperación de espacios públicos.',
      },
    ],
    equipo: [
      { nombre: 'Luis Jorge Mendez', cargo: 'Ministro' },
      { nombre: 'Viceministro de Seguridad Ciudadana', cargo: 'Por designar' },
      { nombre: 'Viceministro de Migración', cargo: 'Por designar' },
      { nombre: 'Director General de Policía', cargo: 'Por designar' },
    ],
    metas: [
      'Reducir la criminalidad en un 40% en 5 años',
      'Alcanzar tiempo de respuesta policial menor a 5 minutos en zonas urbanas',
      'Capacitar al 100% de los agentes en protocolos de derechos humanos',
      'Implementar el sistema de denuncia digital en todo el país',
    ],
    icono: 'shield',
  },
  {
    id: 'medio-ambiente',
    slug: 'medio-ambiente-energia-y-minas',
    nombre: 'Ministerio de Medio Ambiente, Energía y Minas',
    titular: 'Brahian Ceballos Valerio',
    imagenTitular:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80',
    cargo: 'Ministro',
    descripcion:
      'Defensores del patrimonio natural. Impulsaremos la transición hacia energías renovables, la protección de cuencas hidrográficas y un modelo de desarrollo sostenible para las futuras generaciones.',
    descripcionCompleta:
      'El Ministerio de Medio Ambiente, Energía y Minas será el motor de la transformación ecológica del país. Bajo la conducción de Brahian Ceballos Valerio, lideraremos la transición hacia un modelo de desarrollo que armonice el crecimiento económico con la protección de nuestros recursos naturales.\n\nRepública Dominicana posee una de las biodiversidades más ricas del Caribe, pero también enfrenta desafíos críticos: deforestación, contaminación de ríos y costas, dependencia de combustibles fósiles y vulnerabilidad ante el cambio climático. Nuestra gestión se enfocará en políticas basadas en evidencia científica y participación comunitaria.\n\nTrabajaremos en alianza con el sector privado, la academia y las organizaciones internacionales para posicionar al país como líder regional en sostenibilidad ambiental y energías limpias.',
    imagen:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80',
    metricas: [
      { valor: '70%', label: 'Energía renovable' },
      { valor: '100K', label: 'Hectáreas reforestadas' },
      { valor: '30', label: 'Cuencas protegidas' },
      { valor: '0', label: 'Carbón en 15 años' },
    ],
    propuestas: [
      {
        titulo: 'Transición Energética',
        descripcion:
          'Plan nacional para alcanzar el 70% de la matriz eléctrica con fuentes renovables (solar, eólica, hidroeléctrica) en 10 años, con incentivos fiscales para proyectos verdes.',
      },
      {
        titulo: 'Reforestación Masiva',
        descripcion:
          'Programa nacional para reforestar 100,000 hectáreas en zonas degradadas, con participación comunitaria y especies endémicas.',
      },
      {
        titulo: 'Protección de Cuencas',
        descripcion:
          'Declaratoria de protección para las 30 cuencas hidrográficas más importantes, con planes de manejo sostenible y monitoreo constante.',
      },
      {
        titulo: 'Economía Circular',
        descripcion:
          'Implementación del programa nacional de reciclaje, incentivos a empresas verdes y prohibición de plásticos de un solo uso.',
      },
    ],
    equipo: [
      { nombre: 'Brahian Ceballos Valerio', cargo: 'Ministro' },
      { nombre: 'Viceministro de Energía', cargo: 'Por designar' },
      { nombre: 'Viceministra de Ambiente', cargo: 'Por designar' },
      { nombre: 'Viceministro de Minas', cargo: 'Por designar' },
    ],
    metas: [
      'Reducir emisiones de carbono en un 50% en 10 años',
      'Proteger el 100% de las cuencas hidrográficas del país',
      'Alcanzar el 90% de reciclaje en residuos sólidos urbanos',
      'Generar 5,000 empleos verdes',
    ],
    icono: 'leaf',
  },
  {
    id: 'salud-obras',
    slug: 'salud-publica-y-obras-publicas',
    nombre: 'Ministerio de Salud Pública y Obras Públicas',
    titular: 'Adrian Ramirez',
    imagenTitular: adrianRamirez,
    imagePosition: 'center 20%',
    cargo: 'Ministro',
    descripcion:
      'Trabajaremos por un sistema de salud universal y de calidad, junto a una infraestructura vial moderna que conecte a todas las comunidades y reduzca las desigualdades territoriales.',
    descripcionCompleta:
      'El Ministerio de Salud Pública y Obras Públicas, bajo el liderazgo de Adrian Ramirez, tiene la misión dual de garantizar el derecho a la salud de todos los dominicanos y de construir la infraestructura que el país necesita para su desarrollo.\n\nEn materia de salud, enfrentamos una fragmentación del sistema, hospitales deteriorados y una alta prevalencia de enfermedades prevenibles. Nuestra propuesta es avanzar hacia un sistema único, universal y de calidad, donde cada ciudadano reciba atención sin importar su capacidad de pago.\n\nEn obras públicas, el reto es cerrar la brecha de infraestructura entre las grandes ciudades y las zonas rurales, así como modernizar la red vial, los puertos y los aeropuertos. La conectividad es esencial para el desarrollo económico y la equidad territorial.',
    imagen:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    metricas: [
      { valor: '50', label: 'Hospitales nuevos' },
      { valor: '3,000', label: 'Km de carreteras' },
      { valor: '100%', label: 'Cobertura médica' },
      { valor: '15min', label: 'Atención primaria' },
    ],
    propuestas: [
      {
        titulo: 'Sistema Único de Salud',
        descripcion:
          'Reforma profunda para unificar el sistema de salud en una sola entidad pública, gratuita y de calidad, con cobertura universal para todos los residentes.',
      },
      {
        titulo: 'Red Hospitalaria Moderna',
        descripcion:
          'Construcción y equipamiento de 50 hospitales regionales con tecnología de punta, telemedicina y capacidad resolutiva de alta complejidad.',
      },
      {
        titulo: 'Atención Primaria Cercana',
        descripcion:
          'Una unidad de atención primaria en cada municipio, con médicos familiares, enfermeras y medicamentos esenciales gratuitos.',
      },
      {
        titulo: 'Infraestructura Vial',
        descripcion:
          'Plan quinquenal de construcción y mantenimiento de 3,000 km de carreteras, puentes y accesos que conecten a todas las comunidades del país.',
      },
    ],
    equipo: [
      { nombre: 'Adrian Ramirez', cargo: 'Ministro' },
      { nombre: 'Viceministro de Salud', cargo: 'Por designar' },
      { nombre: 'Viceministro de Obras Públicas', cargo: 'Por designar' },
      { nombre: 'Director SNS', cargo: 'Por designar' },
    ],
    metas: [
      'Alcanzar cobertura universal de salud en 5 años',
      'Construir 50 hospitales regionales modernos',
      'Reducir la mortalidad infantil en un 50%',
      'Pavimentar 3,000 km de carreteras',
    ],
    icono: 'heartPulse',
  },
  {
    id: 'defensa-relaciones',
    slug: 'defensa-y-relaciones-exteriores',
    nombre: 'Ministerio de Defensa y Relaciones Exteriores',
    titular: 'Angel Leonardo López Cordones',
    imagenTitular:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
    cargo: 'Ministro',
    descripcion:
      'Fortaleceremos la soberanía nacional y la presencia del país en el escenario internacional, defendiendo los intereses de la República Dominicana con diplomacia activa y profesional.',
    descripcionCompleta:
      'El Ministerio de Defensa y Relaciones Exteriores, encabezado por Angel Leonardo López Cordones, tiene la responsabilidad de proteger la soberanía nacional y proyectar los intereses del país en el concierto internacional.\n\nNuestras Fuerzas Armadas requieren una transformación que las haga más profesionales, modernas y respetuosas de los derechos humanos. Simultáneamente, debemos fortalecer una diplomacia activa que defienda los intereses de los dominicanos, tanto en el país como en la diáspora, que supera los dos millones de personas.\n\nLos retos del siglo XXI incluyen la ciberseguridad, el crimen transnacional, el cambio climático como amenaza a la seguridad y la cooperación regional en el Caribe. Estas dimensiones guiarán nuestra política exterior y de defensa.',
    imagen:
      'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
    metricas: [
      { valor: '190+', label: 'Países con relaciones' },
      { valor: '2M+', label: 'Diaspórica atendida' },
      { valor: '5', label: 'Bases navales' },
      { valor: '100%', label: 'Modernización FF.AA.' },
    ],
    propuestas: [
      {
        titulo: 'Diplomacia Económica',
        descripcion:
          'Reorientación de la política exterior hacia la atracción de inversión, apertura de mercados para productos dominicanos y acuerdos comerciales estratégicos.',
      },
      {
        titulo: 'Modernización Militar',
        descripcion:
          'Programa de inversión en equipamiento, capacitación y bienestar de las tropas, con énfasis en operaciones cibernéticas y de respuesta a desastres.',
      },
      {
        titulo: 'Atención a la Diáspora',
        descripcion:
          'Fortalecimiento de los consulados, voto en el extranjero operativo y programas de retorno productivo para los dominicanos en el exterior.',
      },
      {
        titulo: 'Seguridad Marítima',
        descripcion:
          'Refuerzo del combate al narcotráfico, pesca ilegal y protección de los recursos marinos en coordinación con países aliados.',
      },
    ],
    equipo: [
      { nombre: 'Angel Leonardo López Cordones', cargo: 'Ministro' },
      { nombre: 'Viceministro de Defensa', cargo: 'Por designar' },
      {
        nombre: 'Viceministra de Relaciones Exteriores',
        cargo: 'Por designar',
      },
      { nombre: 'Canciller adjunto', cargo: 'Por designar' },
    ],
    metas: [
      'Modernizar el 100% del equipamiento militar en 10 años',
      'Abrir 10 nuevas embajadas en mercados estratégicos',
      'Atender a 2 millones de dominicanos en el exterior',
      'Fortalecer la seguridad marítima del Caribe',
    ],
    icono: 'globe',
  },
  {
    id: 'educacion',
    slug: 'educacion-y-educacion-superior',
    nombre: 'Ministerio de Educación y Educación Superior',
    titular: 'Vianny Campechano',
    imagenTitular:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80',
    cargo: 'Ministra',
    descripcion:
      'La educación es el motor del cambio. Reformaremos el sistema educativo para formar ciudadanos competitivos, críticos y creativos, con acceso universal a la educación superior de calidad.',
    descripcionCompleta:
      'El Ministerio de Educación y Educación Superior, dirigido por Vianny Campechano, tiene la responsabilidad de transformar la educación dominicana en todos sus niveles, desde la inicial hasta la superior.\n\nLa educación es el verdadero motor del desarrollo de un país. Por eso planteamos una reforma profunda que abarque la formación docente, la infraestructura escolar, el currículo, la conectividad y los mecanismos de evaluación. Queremos que cada niño, niña y joven dominicano tenga acceso a una educación de calidad que lo prepare para los desafíos del siglo XXI.\n\nReconocemos los avances logrados en las últimas décadas, pero también los retos pendientes: la calidad del aprendizaje, la formación técnica, el acceso a la educación superior y la pertinencia de la oferta educativa con las necesidades del mercado laboral. Estos son los ejes de nuestra propuesta.',
    imagen:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80',
    metricas: [
      { valor: '8h', label: 'Jornada extendida' },
      { valor: '100%', label: 'Conectividad escolar' },
      { valor: '50K', label: 'Becas nuevas' },
      { valor: '$50K', label: 'Salario docente base' },
    ],
    propuestas: [
      {
        titulo: 'Jornada Extendida',
        descripcion:
          'Implementación progresiva de la jornada extendida en todas las escuelas públicas, con alimentación escolar, actividades deportivas y refuerzo académico.',
      },
      {
        titulo: 'Conectividad Total',
        descripcion:
          'Internet de alta velocidad en cada escuela pública del país, con dispositivos tecnológicos para los estudiantes y plataformas digitales de aprendizaje.',
      },
      {
        titulo: 'Programa Nacional de Becas',
        descripcion:
          'Becas universitarias y técnicas para 50,000 jóvenes cada año, con énfasis en ciencia, tecnología, ingeniería y matemáticas.',
      },
      {
        titulo: 'Reforma Curricular',
        descripcion:
          'Nuevo currículo enfocado en competencias del siglo XXI: pensamiento crítico, creatividad, colaboración, comunicación y dominio digital.',
      },
    ],
    equipo: [
      { nombre: 'Vianny Campechano', cargo: 'Ministra' },
      { nombre: 'Viceministro de Educación', cargo: 'Por designar' },
      { nombre: 'Viceministra de Educación Superior', cargo: 'Por designar' },
      { nombre: 'Director de Formación Docente', cargo: 'Por designar' },
    ],
    metas: [
      'Lograr jornada extendida en el 100% de escuelas públicas',
      'Aumentar la cobertura de educación superior al 70%',
      'Mejorar 30 puntos en pruebas PISA',
      'Crear 100 nuevas carreras técnicas pertinentes',
    ],
    icono: 'graduationCap',
  },
  {
    id: 'trabajo',
    slug: 'trabajo-y-administraciones-publicas',
    nombre: 'Ministerio de Trabajo y Administraciones Públicas',
    titular: 'Valery Michelle Rosario Rodríguez',
    imagenTitular:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80',
    cargo: 'Ministra',
    descripcion:
      'Promoveremos empleos dignos, la formalización del mercado laboral y una administración pública eficiente, transparente y cercana al ciudadano.',
    descripcionCompleta:
      'El Ministerio de Trabajo y Administraciones Públicas, bajo el liderazgo de Valery Michelle Rosario Rodríguez, tiene dos ejes fundamentales: garantizar los derechos laborales de los trabajadores y modernizar la administración pública para servir mejor al ciudadano.\n\nEn materia laboral, nuestra prioridad es avanzar hacia la formalización del empleo, la dignificación de los salarios y la protección de los derechos de los trabajadores dominicanos. Impulsaremos el diálogo social tripartito (gobierno, empleadores y sindicatos) para construir consensos.\n\nEn administraciones públicas, modernizaremos los procesos, digitalizaremos los trámites y promoveremos la meritocracia en el servicio público. Queremos un Estado eficiente, transparente y cercano a la gente.',
    imagen:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80',
    metricas: [
      { valor: '70%', label: 'Empleo formal' },
      { valor: '100%', label: 'Trámites digitales' },
      { valor: '30', label: 'Días de prestaciones' },
      { valor: '$15K', label: 'Salario mínimo dignificado' },
    ],
    propuestas: [
      {
        titulo: 'Empleo Digno',
        descripcion:
          'Reforma del Código de Trabajo para fortalecer la protección de los trabajadores, con salario mínimo digno, prestaciones justas y estabilidad laboral.',
      },
      {
        titulo: 'Formalización',
        descripcion:
          'Programa nacional para reducir la informalidad laboral, con incentivos a las empresas que formalicen a sus empleados y simplificación de trámites.',
      },
      {
        titulo: 'Administración Pública Moderna',
        descripcion:
          'Reforma integral del Estado para digitalizar el 100% de los trámites, eliminar la corrupción y profesionalizar el servicio público por mérito.',
      },
      {
        titulo: 'Capacitación Laboral',
        descripcion:
          'Sistema nacional de formación técnica continua, en alianza con el sector privado, para que los trabajadores adquieran las habilidades del futuro.',
      },
    ],
    equipo: [
      { nombre: 'Valery Michelle Rosario Rodríguez', cargo: 'Ministra' },
      { nombre: 'Viceministra de Trabajo', cargo: 'Por designar' },
      {
        nombre: 'Viceministro de Administraciones Públicas',
        cargo: 'Por designar',
      },
      { nombre: 'Director de Función Pública', cargo: 'Por designar' },
    ],
    metas: [
      'Aumentar el empleo formal al 70%',
      'Digitalizar el 100% de los trámites del Estado',
      'Duplicar el salario mínimo en 5 años',
      'Capacitar a 100,000 trabajadores anualmente',
    ],
    icono: 'briefcase',
  },
  {
    id: 'deportes',
    slug: 'deportes-juventud-y-mujer',
    nombre: 'Ministerio de Deportes, Juventud y Mujer',
    titular: 'Isaias German',
    imagenTitular: isaiasGerman,
    cargo: 'Ministro',
    descripcion:
      'Ser el ente rector que consolida el deporte como herramienta de transformación social, impulsa el desarrollo integral de la juventud y el empoderamiento de la mujer, para una sociedad más inclusiva, equitativa y con igualdad de oportunidades.',
    descripcionCompleta:
      'El Ministerio de Deportes, Juventud y Mujer, bajo la conducción de Isaias German, será el ente rector que consolidará el deporte como una herramienta de transformación social, el desarrollo integral de la juventud y el empoderamiento de la mujer, para construir una sociedad más inclusiva, equitativa y con igualdad de oportunidades.\n\nNuestra gestión articulará políticas para que el deporte sea motor de cohesión social, prevención de la violencia y creación de oportunidades reales para mujeres y jóvenes en todo el territorio nacional. Promoveremos la participación activa de la juventud y la equidad de género en todos los ámbitos de la vida nacional.',
    imagen:
      'https://images.unsplash.com/photo-1461896836936-ffe607ba8211?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80',
    metricas: [
      { valor: '50%', label: 'Participación femenina' },
      { valor: 'Anual', label: 'Juegos de la Mujer' },
      { valor: '4 años', label: 'Plazo de impacto' },
      { valor: '20+', label: 'Disciplinas inclusivas' },
    ],
    propuestas: [
      {
        titulo: 'Juegos Deportivos de la Mujer y la Inclusión',
        descripcion:
          'Institucionalizar y expandir los "Juegos de la Mujer" como un evento nacional anual que incluya cada vez más disciplinas y participantes. Paralelamente, crear y consolidar los "Juegos de la Inclusión" para personas con discapacidad, asegurando que sean un pilar del calendario deportivo oficial.',
      },
      {
        titulo: 'Ruta del Deporte para la Prevención y la Equidad',
        descripcion:
          'Implementar el programa "Ruta del Deporte" como una alianza interinstitucional que lleve actividades deportivas y recreativas a zonas vulnerables. Tendrá un enfoque especial en la prevención de la violencia y la delincuencia, y en la creación de espacios seguros y de empoderamiento para mujeres y jóvenes.',
      },
      {
        titulo:
          'Fortalecimiento del Liderazgo Femenino y Juvenil en el Deporte',
        descripcion:
          'Programa de becas, mentorías y escuelas deportivas para fomentar la participación femenina en todos los ámbitos del deporte, especialmente en disciplinas tradicionalmente masculinizadas. Incluye el respaldo a torneos como el Baloncesto Superior Femenino y la creación de ligas juveniles mixtas.',
      },
      {
        titulo: 'Calendario Deportivo Oficial y Sostenible',
        descripcion:
          'Establecer un calendario deportivo anual oficial, sólido y sostenible que trascienda las gestiones gubernamentales. Incluirá eventos emblemáticos como los Juegos de la Mujer, Juegos Universitarios, Juegos Fronterizos y el respaldo a eventos internacionales, garantizando su continuidad como política de Estado.',
      },
    ],
    equipo: [
      { nombre: 'Isaias German', cargo: 'Ministro' },
      { nombre: 'Viceministra de Juventud', cargo: 'Por designar' },
      { nombre: 'Viceministra de la Mujer', cargo: 'Por designar' },
      { nombre: 'Director de Deportes', cargo: 'Por designar' },
    ],
    metas: [
      'Masificar la participación femenina en el deporte: lograr un incremento significativo en la participación de mujeres y jóvenes en las actividades y juegos organizados por el ministerio en los próximos 4 años, con la meta de alcanzar una representación paritaria en todas las disciplinas y niveles.',
      'Impacto social a través del deporte: medir y demostrar el impacto social del deporte, implementando un sistema de indicadores que evalúe la reducción de la violencia y la delincuencia en las comunidades intervenidas por la "Ruta del Deporte", así como el aumento en la percepción de seguridad y bienestar.',
      'Empoderamiento económico y social de la mujer joven: vincular los programas deportivos con iniciativas de capacitación y empleo juvenil. La meta es que, en un plazo de 3 años, al menos un porcentaje de las participantes accedan a oportunidades de formación laboral o emprendimiento.',
      'Consolidación de una política de Estado para el deporte: lograr que el calendario deportivo oficial y los programas bandera del ministerio sean asumidos por el país como una política de Estado, garantizando su continuidad y presupuesto más allá de los cambios de gestión.',
    ],
    icono: 'trophy',
  },
  {
    id: 'turismo',
    slug: 'turismo-y-cultura',
    nombre: 'Ministerio de Turismo y Cultura',
    titular: 'Carla Rodríguez',
    imagenTitular:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80',
    cargo: 'Ministra',
    descripcion:
      'Posicionaremos al país como destino turístico de clase mundial, protegiendo y promoviendo nuestra riqueza cultural, histórica y natural como activos estratégicos de desarrollo.',
    descripcionCompleta:
      "El Ministerio de Turismo y Cultura, dirigido por Carla Rodríguez, articulará la política turística y cultural del país como motores complementarios de desarrollo económico e identidad nacional.\n\nEl turismo es uno de los principales generadores de divisas y empleo del país. Nuestra visión es diversificar la oferta más allá del tradicional modelo 'sol y playa', incorporando turismo cultural, ecológico, de aventura, gastronómico y de bienestar. Esto implica inversión en infraestructura, capacitación del personal y promoción internacional.\n\nLa cultura es el alma de nuestra identidad. Trabajaremos por la protección del patrimonio, el apoyo a los creadores y artistas, y el acceso universal a la vida cultural. La cultura no es un gasto: es una inversión en cohesión social y desarrollo humano.",
    imagen:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&q=80',
    metricas: [
      { valor: '10M', label: 'Turistas al año' },
      { valor: '$8B', label: 'Ingresos turísticos' },
      { valor: '300', label: 'Eventos culturales' },
      { valor: '20', label: 'Nuevos destinos' },
    ],
    propuestas: [
      {
        titulo: 'Turismo Diversificado',
        descripcion:
          'Desarrollo de 20 nuevos destinos turísticos más allá del sol y playa: ecoturismo, cultural, aventura, gastronómico y de bienestar.',
      },
      {
        titulo: 'Marca País',
        descripcion:
          "Fortalecimiento de la marca 'República Dominicana' en mercados estratégicos con campañas de promoción internacional y diplomacia turística.",
      },
      {
        titulo: 'Patrimonio Cultural',
        descripcion:
          'Protección, restauración y puesta en valor del patrimonio cultural y arquitectónico, con programas de educación patrimonial en escuelas.',
      },
      {
        titulo: 'Economía Cultural',
        descripcion:
          'Apoyo a artistas, creadores y emprendedores culturales con financiamiento, formación y mercados, reconociendo la cultura como sector económico estratégico.',
      },
    ],
    equipo: [
      { nombre: 'Carla Rodríguez', cargo: 'Ministra' },
      { nombre: 'Viceministra de Turismo', cargo: 'Por designar' },
      { nombre: 'Viceministra de Cultura', cargo: 'Por designar' },
      { nombre: 'Director de Promoción Turística', cargo: 'Por designar' },
    ],
    metas: [
      'Alcanzar 10 millones de turistas anuales',
      'Crear 200,000 nuevos empleos turísticos',
      'Triplicar el presupuesto para cultura',
      'Catalogar el 100% del patrimonio cultural nacional',
    ],
    icono: 'palmtree',
  },
  {
    id: 'administrativo',
    slug: 'administrativo-de-la-presidencia',
    nombre: 'Ministerio Administrativo de la Presidencia',
    titular: 'Andry Rogelio Piñeiro Chalas',
    imagenTitular: andryPineiro,
    cargo: 'Ministro',
    descripcion:
      'Ser el pilar administrativo de la Presidencia, caracterizado por la eficiencia, la transparencia y la excelencia operativa, garantizando un soporte técnico y logístico de alto nivel que impulse la gestión gubernamental.',
    descripcionCompleta:
      'El Ministerio Administrativo de la Presidencia, bajo la conducción de Andry Rogelio Piñeiro Chalas, será el pilar administrativo de la Presidencia, caracterizado por la eficiencia, la transparencia y la excelencia operativa.\n\nNuestra misión es garantizar un soporte técnico y logístico de alto nivel que impulse la gestión gubernamental y cumpla la promesa de un mejor mañana. Trabajaremos con automatización, controles de auditoría, capacitación continua y optimización de los protocolos de coordinación ejecutiva para asegurar que los compromisos y proyectos presidenciales se ejecuten sin demoras.',
    imagen:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1200&q=80',
    metricas: [
      { valor: '100%', label: 'Digitalización' },
      { valor: '12 meses', label: 'Plazo de transición' },
      { valor: '-20%', label: 'Tiempos de respuesta' },
      { valor: '90%', label: 'Capacitación' },
    ],
    propuestas: [
      {
        titulo: 'Digitalización y Modernización Operativa',
        descripcion:
          'Automatizar la gestión documental y las solicitudes internas para agilizar la toma de decisiones y eliminar la burocracia innecesaria.',
      },
      {
        titulo: 'Portal Abierto y Transparencia Efectiva',
        descripcion:
          'Reforzar los controles de auditoría interna y publicar informes periódicos sobre la ejecución presupuestaria para garantizar la máxima rendición de cuentas.',
      },
      {
        titulo: 'Programa de Capacitación y Ética Pública',
        descripcion:
          'Implementar talleres continuos para el personal en materia de gestión de recursos, integridad gubernamental y nuevas tecnologías.',
      },
      {
        titulo: 'Optimización Logística de la Presidencia',
        descripcion:
          'Reestructurar los protocolos de coordinación ejecutiva para asegurar que los compromisos y proyectos presidenciales se ejecuten sin demoras.',
      },
    ],
    equipo: [
      { nombre: 'Andry Rogelio Piñeiro Chalas', cargo: 'Ministro' },
      { nombre: 'Viceministro Técnico', cargo: 'Por designar' },
      { nombre: 'Viceministro de Coordinación', cargo: 'Por designar' },
      { nombre: 'Director de Planificación', cargo: 'Por designar' },
    ],
    metas: [
      'Digitalizar el 100% de los trámites y procesos administrativos internos en un periodo de 12 meses.',
      'Lograr y mantener la calificación máxima en los indicadores de transparencia y ética pública del gobierno.',
      'Reducir en un 20% los tiempos de respuesta e itinerario de las solicitudes dirigidas a la Presidencia.',
      'Capacitar al 90% del equipo administrativo en estándares modernos de función pública durante este año.',
    ],
    icono: 'building',
  },
  {
    id: 'agricultura',
    slug: 'agricultura-industria-comercio-y-mipymes',
    nombre: 'Ministerio de Agricultura, Industria, Comercio y MIPYMES',
    titular: 'Manuel Arturo Puello',
    imagenTitular:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671824?w=300&h=300&fit=crop&q=80',
    cargo: 'Ministro',
    descripcion:
      'Fortaleceremos al campo, a los emprendedores y a las pequeñas empresas, motores reales de la economía nacional, con acceso a financiamiento, tecnología y mercados.',
    descripcionCompleta:
      'El Ministerio de Agricultura, Industria, Comercio y MIPYMES, bajo la conducción de Manuel Arturo Puello, articulará la política productiva del país en sus múltiples dimensiones: agrícola, industrial, comercial y de pequeñas empresas.\n\nEl campo dominicano necesita inversión, tecnología y mercados. Trabajaremos por la seguridad alimentaria, el apoyo a los pequeños productores, la tecnificación del agro y la apertura de nuevos mercados internacionales para nuestros productos.\n\nSimultáneamente, las MIPYMES son la mayor fuente de empleo del país. Las fortaleceremos con financiamiento accesible, simplificación tributaria, formación empresarial y encadenamientos productivos con grandes empresas. También impulsaremos la industria nacional y el comercio exterior.',
    imagen:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80',
    metricas: [
      { valor: '$500M', label: 'Fondo MIPYMES' },
      { valor: '50%', label: 'Producción local' },
      { valor: '20', label: 'Nuevos mercados' },
      { valor: '200K', label: 'Emprendedores' },
    ],
    propuestas: [
      {
        titulo: 'Fondo MIPYMES',
        descripcion:
          'Creación de un fondo de $500 millones para financiamiento accesible a micro, pequeñas y medianas empresas, con tasas preferenciales y asesoría técnica.',
      },
      {
        titulo: 'Tecnificación del Campo',
        descripcion:
          'Programa nacional de tecnificación agrícola: riego, semillas mejoradas, drones, software de gestión y acceso a mercados digitales.',
      },
      {
        titulo: 'Comercio Exterior',
        descripcion:
          'Apertura de 20 nuevos mercados internacionales para productos dominicanos, con oficinas comerciales estratégicas y diplomacia económica.',
      },
      {
        titulo: 'Simplificación',
        descripcion:
          'Reducción de la carga tributaria para MIPYMES, simplificación de registros y permisos, y plataforma única de trámites empresariales.',
      },
    ],
    equipo: [
      { nombre: 'Manuel Arturo Puello', cargo: 'Ministro' },
      { nombre: 'Viceministro de Agricultura', cargo: 'Por designar' },
      { nombre: 'Viceministra de Industria y Comercio', cargo: 'Por designar' },
      { nombre: 'Director PROINDUSTRIA', cargo: 'Por designar' },
    ],
    metas: [
      'Duplicar las exportaciones agrícolas',
      'Crear 200,000 nuevas MIPYMES formales',
      'Alcanzar el 80% de seguridad alimentaria',
      'Reducir la pobreza rural en un 50%',
    ],
    icono: 'wheat',
  },
  {
    id: 'justicia',
    slug: 'justicia',
    nombre: 'Ministerio de Justicia',
    titular: 'Melvis Comas Ramirez',
    imagenTitular: melvisComas,
    imagePosition: 'center 40%',
    cargo: 'Ministra',
    descripcion:
      'Trabajaremos por un sistema de justicia accesible, independiente y moderno, que garantice los derechos de todos los ciudadanos y combata la impunidad.',
    descripcionCompleta:
      'El Ministerio de Justicia, encabezado por Melvis Comas Ramirez, tiene la misión de garantizar el acceso a una justicia pronta, independiente y de calidad para todos los ciudadanos dominicanos.\n\nLa justicia es un pilar del Estado de derecho. Sin justicia accesible y eficaz, no hay democracia real. Por eso trabajaremos en la modernización del sistema judicial, la reducción de la mora judicial, el fortalecimiento del Ministerio Público y la protección de los derechos humanos.\n\nTambién impulsaremos reformas legales que garanticen los derechos de grupos vulnerables, la lucha contra la corrupción y la independencia judicial. Una justicia confiable es esencial para la inversión, la convivencia y la paz social.',
    imagen:
      'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80',
    metricas: [
      { valor: '0', label: 'Tolerancia a la impunidad' },
      { valor: '50%', label: 'Reducción mora judicial' },
      { valor: '100%', label: 'Independencia judicial' },
      { valor: '24/7', label: 'Denuncias en línea' },
    ],
    propuestas: [
      {
        titulo: 'Modernización Judicial',
        descripcion:
          'Digitalización completa de los procesos judiciales, expediente electrónico, notificaciones digitales y juicios orales ágiles.',
      },
      {
        titulo: 'Independencia Judicial',
        descripcion:
          'Reforma del Consejo del Poder Judicial para garantizar la independencia, con nombramientos por mérito y evaluación de desempeño.',
      },
      {
        titulo: 'Acceso a la Justicia',
        descripcion:
          'Defensoría pública fortalecida, defensoría de víctimas, justicia comunitaria y mediación como mecanismos alternativos de resolución.',
      },
      {
        titulo: 'Lucha Anticorrupción',
        descripcion:
          'Fiscalía especializada con autonomía operativa y tecnológica, protección a denunciantes y recuperación de activos sustraídos.',
      },
    ],
    equipo: [
      { nombre: 'Melvis Comas Ramirez', cargo: 'Ministra' },
      { nombre: 'Viceministro de Justicia', cargo: 'Por designar' },
      { nombre: 'Procurador General', cargo: 'Por designar' },
      { nombre: 'Director Defensoría Pública', cargo: 'Por designar' },
    ],
    metas: [
      'Reducir la mora judicial en un 50%',
      'Garantizar el acceso universal a la defensa pública',
      'Digitalizar el 100% de los procesos judiciales',
      'Procesar todos los casos de corrupción de alto perfil',
    ],
    icono: 'scale',
  },
  {
    id: 'hacienda',
    slug: 'hacienda-y-economia',
    nombre: 'Ministerio de Hacienda y Economía',
    titular: 'Heidy Franchesca Moronta Aybar',
    imagenTitular: heidyMoronta,
    cargo: 'Ministra',
    descripcion:
      'Construir una gestión económica responsable, transparente y orientada al crecimiento, fortaleciendo las finanzas del Estado y creando condiciones para la inversión, el empleo y el desarrollo de las MIPYMES.',
    descripcionCompleta:
      'El Ministerio de Hacienda y Economía de EPC 2026, bajo la conducción de Heidy Franchesca Moronta Aybar, tiene la misión de construir una gestión económica responsable, transparente y orientada al crecimiento.\n\nTrabajaremos para garantizar el uso eficiente de los recursos públicos, fortalecer las finanzas del Estado y crear condiciones favorables para la inversión, el empleo y el desarrollo de las pequeñas y medianas empresas. La política económica se pondrá al servicio del bienestar de la ciudadanía, con transparencia en cada decisión y resultados medibles para todos los dominicanos.',
    imagen:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    metricas: [
      { valor: '100%', label: 'Transparencia fiscal' },
      { valor: 'MIPYMES', label: 'Más financiamiento' },
      { valor: '-Gasto', label: 'Más eficiencia' },
      { valor: '+Empleo', label: 'Crecimiento real' },
    ],
    propuestas: [
      {
        titulo: 'Presupuesto Público Transparente',
        descripcion:
          'Crear una plataforma digital donde los ciudadanos puedan consultar cómo se distribuyen y utilizan los recursos del Estado.',
      },
      {
        titulo: 'Programa de Impulso a las MIPYMES',
        descripcion:
          'Facilitar el acceso de pequeñas y medianas empresas a incentivos, capacitación y mecanismos de financiamiento para promover su crecimiento y la creación de empleos.',
      },
      {
        titulo: 'Plan de Eficiencia del Gasto Público',
        descripcion:
          'Revisar los gastos de las instituciones públicas para reducir gastos innecesarios y dirigir más recursos hacia áreas prioritarias.',
      },
      {
        titulo: 'Programa Nacional de Inversión y Empleo',
        descripcion:
          'Promover inversiones nacionales y extranjeras en sectores estratégicos que generen nuevos empleos y fortalezcan la economía nacional.',
      },
    ],
    equipo: [
      { nombre: 'Heidy Franchesca Moronta Aybar', cargo: 'Ministra' },
      { nombre: 'Viceministro de Hacienda', cargo: 'Por designar' },
      { nombre: 'Viceministra de Economía', cargo: 'Por designar' },
      { nombre: 'Director de Presupuesto', cargo: 'Por designar' },
    ],
    metas: [
      'Aumentar la transparencia fiscal: lograr que la información sobre el presupuesto y el gasto público sea accesible y comprensible para la ciudadanía.',
      'Fortalecer las MIPYMES: ampliar las oportunidades de financiamiento y apoyo para pequeñas y medianas empresas durante la gestión EPC 2026.',
      'Mejorar la eficiencia del gasto público: reducir progresivamente los gastos administrativos innecesarios y priorizar la inversión en áreas de mayor impacto social y económico.',
      'Fomentar el crecimiento y el empleo: aumentar la inversión en sectores productivos y promover condiciones que favorezcan la creación de nuevos puestos de trabajo.',
    ],
    icono: 'trendingUp',
    prioridades: [
      { label: 'Presupuesto y gasto público', value: 30, color: '#4CAF79' },
      { label: 'Desarrollo económico', value: 25, color: '#FF7043' },
      { label: 'Inversión y MIPYMES', value: 20, color: '#FFD54F' },
      { label: 'Finanzas públicas', value: 15, color: '#B39DDB' },
      { label: 'Transparencia y control', value: 10, color: '#F48FB1' },
    ],
  },
];
