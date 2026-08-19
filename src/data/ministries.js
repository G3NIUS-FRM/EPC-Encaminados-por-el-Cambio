import isaiasGerman from '../assets/isaias-german.jpeg';
import luisJorge from '../assets/luis-jorge.jpeg';
import adrianRamirez from '../assets/adrian-ramirez.jpeg';
import andryPineiro from '../assets/andry-piñeiro.jpeg';
import melvisComas from '../assets/melvis-comas.jpeg';
import heidyMoronta from '../assets/heidy-moronta.jpeg';
import viannyCampechano from '../assets/vianny_campechano.jpeg';
import manuelArturo from '../assets/manuel-arturo.jpeg';
import angelLeonardo from '../assets/angel-leonardo.jpg';
import valeryMichelle from '../assets/valery-michelle.jpeg';
import brahianCeballos from '../assets/brahian-ceballos.jpeg';
import carlaCarrasco from '../assets/carla-carrasco.png';

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
    vision:
      'Construir un país más seguro, organizado y unido, donde los ciudadanos puedan vivir tranquilos, con instituciones policiales eficientes y cercanas a la comunidad, garantizando el orden público y el respeto a los derechos de todos.',
    metricas: [
      { valor: '15,000', label: 'Nuevos agentes' },
      { valor: '500', label: 'Cámaras inteligentes' },
      { valor: '24/7', label: 'Monitoreo nacional' },
      { valor: '-40%', label: 'Meta de criminalidad' },
    ],
    propuestas: [
      {
        titulo: 'Fortalecer la Policía Nacional',
        descripcion:
          'Mejorar la capacitación, equipamiento y preparación de los agentes para responder eficazmente ante la delincuencia.',
      },
      {
        titulo: 'Prevención del delito en las comunidades',
        descripcion:
          'Crear programas deportivos, educativos y culturales dirigidos especialmente a jóvenes de zonas vulnerables.',
      },
      {
        titulo: 'Mayor vigilancia y tecnología',
        descripcion:
          'Ampliar el uso de cámaras de seguridad y sistemas tecnológicos para prevenir y combatir los delitos.',
      },
      {
        titulo: 'Policía cercana a la ciudadanía',
        descripcion:
          'Establecer programas de policía comunitaria para mejorar la comunicación y confianza entre los agentes y los ciudadanos.',
      },
    ],
    equipo: [
      { nombre: 'Luis Jorge Mendez', cargo: 'Ministro' },
      { nombre: 'Viceministro de Seguridad Ciudadana', cargo: 'Por designar' },
      { nombre: 'Viceministro de Migración', cargo: 'Por designar' },
      { nombre: 'Director General de Policía', cargo: 'Por designar' },
    ],
    metas: [
      'Reducir los índices de delincuencia mediante programas de prevención y una respuesta policial más eficiente',
      'Mejorar la confianza de la población en la Policía Nacional, promoviendo un trato respetuoso, profesional y cercano.',
      'Modernizar las instituciones de seguridad, incorporando mejores tecnologías, capacitación y sistemas de información.',
      'Garantizar el orden y la seguridad ciudadana, trabajando junto con las comunidades y otras instituciones del Estado.',
    ],
    icono: 'shield',
  },
  {
    id: 'medio-ambiente',
    slug: 'medio-ambiente-energia-y-minas',
    nombre: 'Ministerio de Medio Ambiente, Energía y Minas',
    titular: 'Brahian Ceballos Valerio',
    imagenTitular: brahianCeballos,
    imagePosition: 'center 20%',
    cargo: 'Ministro',
    descripcion:
      'Defensores del patrimonio natural. Impulsaremos la transición hacia energías renovables, la protección de cuencas hidrográficas y un modelo de desarrollo sostenible para las futuras generaciones.',
    descripcionCompleta:
      'El Ministerio de Medio Ambiente, Energía y Minas será el motor de la transformación ecológica del país. Bajo la conducción de Brahian Ceballos Valerio, lideraremos la transición hacia un modelo de desarrollo que armonice el crecimiento económico con la protección de nuestros recursos naturales.\n\nRepública Dominicana posee una de las biodiversidades más ricas del Caribe, pero también enfrenta desafíos críticos: deforestación, contaminación de ríos y costas, dependencia de combustibles fósiles y vulnerabilidad ante el cambio climático. Nuestra gestión se enfocará en políticas basadas en evidencia científica y participación comunitaria.\n\nTrabajaremos en alianza con el sector privado, la academia y las organizaciones internacionales para posicionar al país como líder regional en sostenibilidad ambiental y energías limpias.',
    imagen:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80',
    vision:
      'Ser una institución reconocida por su eficacia en la conservación del medio ambiente y los recursos naturales, enfocada en el desarrollo sostenible del país, con una gestión funcionalmente integrada, eficiente y de calidad.',
    metricas: [
      { valor: '70%', label: 'Energía renovable' },
      { valor: '100K', label: 'Hectáreas reforestadas' },
      { valor: '30', label: 'Cuencas protegidas' },
      { valor: '0', label: 'Carbón en 15 años' },
    ],
    propuestas: [
      {
        titulo: 'Reforestación focalizada de cuencas hidrográficas',
        descripcion:
          'Implementar proyectos prioritarios de siembra para proteger y restaurar las principales fuentes hídricas del país.',
      },
      {
        titulo: 'Fortalecimiento de la formación ecológica',
        descripcion:
          'Desarrollar programas de educación ambiental orientados a articular esfuerzos entre las comunidades locales y los sectores productivos.',
      },
      {
        titulo: 'Planificación territorial equilibrada',
        descripcion:
          'Diseñar e impulsar normativas que aseguren la preservación de la biodiversidad autóctona y el uso sostenible del suelo.',
      },
      {
        titulo: 'Gestión integral del agua y resiliencia climática',
        descripcion:
          'Crear políticas públicas enfocadas en el aprovechamiento consciente del recurso agua y la adaptación ante los retos del cambio climático.',
      },
    ],
    equipo: [
      { nombre: 'Brahian Ceballos Valerio', cargo: 'Ministro' },
      { nombre: 'Viceministro de Energía', cargo: 'Por designar' },
      { nombre: 'Viceministra de Ambiente', cargo: 'Por designar' },
      { nombre: 'Viceministro de Minas', cargo: 'Por designar' },
    ],
    metas: [
      'Incremento de la cobertura forestal: aumentar la superficie arbolada mediante programas intensivos de reforestación en zonas estratégicas.',
      'Saneamiento de recursos hídricos: garantizar la protección, limpieza y recuperación de los ríos y cuencas del territorio nacional.',
      'Administración sostenible de áreas protegidas: robustecer la vigilancia y conservación de los ecosistemas y espacios protegidos.',
      'Desarrollo sostenible comunitario: asegurar que las acciones de preservación ambiental contribuyan directamente a la estabilidad socioeconómica de las comunidades.',
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
    imagenTitular: angelLeonardo,
    imagePosition: 'center 30%',
    cargo: 'Ministro',
    descripcion:
      'Fortaleceremos la soberanía nacional y la presencia del país en el escenario internacional, defendiendo los intereses de la República Dominicana con diplomacia activa y profesional.',
    vision:
      'Nuestro objetivo al unir el Ministerio de Defensa y el Ministerio de Relaciones Exteriores es construir una institución integral que combine la diplomacia y la defensa para proteger los intereses nacionales y fortalecer la seguridad del Estado, reducir los costos operativos y aumentar la capacidad para enfrentar desafíos internacionales del país.\n\nBajo el mando de nuestro ministro Ángel Leonardo López Cordones, tenemos como objetivo mejorar la eficiencia de ambos ministerios a través de la unión para lograr beneficios y resultados más significativos al futuro.\n\nSabemos y reconocemos que el plan de unión de ministerios que presenta nuestro partido es un plan que tiene grandes desafíos y complicaciones en su momento de accionar, pero gracias a nuestro planteamiento estructurado, basado en investigaciones y puesto bajo la supervisión de expertos, pensamos que es un plan razonable y es posible de lograr con el debido esfuerzo y apoyo total de todos nuestros compatriotas.\n\nEsto pudiera reducir tantos gastos como mejorar la eficiencia en muchas áreas del país lo que ayudaría a que se tuviera que pedir menos préstamos, se redujera el presupuesto nacional anual y se pudiera ir pagando las deudas externas del país, así estabilizar mejor nuestra economía y poder desarrollar proyectos para mejorar la calidad de vida del dominicano.',
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
        titulo:
          'Desarrollo de nuestras infraestructuras militares y públicas en el exterior',
        descripcion:
          'Extender la cantidad de bases militares y mejorar la seguridad en nuestros consulados.',
      },
      {
        titulo: 'Modernizar las Fuerzas Armadas',
        descripcion:
          'Mejorar equipamiento, entrenamiento y formación integral de los militares. Incorporar cursos de diplomacia y resolución pacífica de conflictos para crear una fuerza más preparada, educada y eficiente.',
      },
      {
        titulo: 'Coordinación fronteriza',
        descripcion:
          'Eficientizar y mejorar el despliegue de tropas en la frontera, construcción de bases en puntos específicos para prevenir amenazas transnacionales e inmigración ilegal.',
      },
      {
        titulo: 'Impulsar acuerdos de coordinación internacional',
        descripcion:
          'Negociar tratados, convenios y negociaciones en materia de seguridad nacional e internacional, defensa, comercio, desarrollo tecnológico, desarrollo educacional y ayuda humanitaria.',
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
      'Fortalecer la vigilancia y protección fronteriza, mediante una mejor distribución de recursos, personal y tecnología, con el objetivo de reducir en un 35 % los niveles de inmigración irregular y combatir actividades ilícitas relacionadas con el tráfico de personas y mercancías.',
      'Establecer acuerdos de cooperación educativa con los países de la región, creando una estructura internacional que facilite intercambios académicos, becas, programas de movilidad y proyectos de investigación para estudiantes universitarios.',
      'Crear mecanismos de coordinación regional en materia de seguridad, mediante la cooperación entre las fuerzas de seguridad y defensa de los países participantes para combatir el narcotráfico, el crimen organizado, el terrorismo y otras amenazas transnacionales, respetando la soberanía y las leyes de cada Estado.',
      'Renegociar, revisar o solicitar la modificación de acuerdos y contratos internacionales con entidades y empresas que hayan incumplido sus compromisos o que estén provocando daños ambientales o perjuicios económicos al país.',
    ],
    icono: 'globe',
  },
  {
    id: 'educacion',
    slug: 'educacion-y-educacion-superior',
    nombre: 'Ministerio de Educación y Educación Superior',
    titular: 'Vianny Campechano',
    imagenTitular: viannyCampechano,
    cargo: 'Ministra',
    descripcion:
      'La educación es el motor del cambio. Reformaremos el sistema educativo para formar ciudadanos competitivos, críticos y creativos, con acceso universal a la educación superior de calidad.',
    descripcionCompleta:
      'El Ministerio de Educación y Educación Superior, dirigido por Vianny Campechano, tiene la responsabilidad de transformar la educación dominicana en todos sus niveles, desde la inicial hasta la superior.\n\nLa educación es el verdadero motor del desarrollo de un país. Por eso planteamos una reforma profunda que abarque la formación docente, la infraestructura escolar, el currículo, la conectividad y los mecanismos de evaluación. Queremos que cada niño, niña y joven dominicano tenga acceso a una educación de calidad que lo prepare para los desafíos del siglo XXI.\n\nReconocemos los avances logrados en las últimas décadas, pero también los retos pendientes: la calidad del aprendizaje, la formación técnica, el acceso a la educación superior y la pertinencia de la oferta educativa con las necesidades del mercado laboral. Estos son los ejes de nuestra propuesta.',
    imagen:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80',
    vision:
      'Garantizar una educación de calidad, inclusiva e innovadora que forme ciudadanos preparados para enfrentar los desafíos del futuro y contribuir al desarrollo sostenible de la República Dominicana.',
    metricas: [
      { valor: '8h', label: 'Jornada extendida' },
      { valor: '100%', label: 'Conectividad escolar' },
      { valor: '50K', label: 'Becas nuevas' },
      { valor: '$50K', label: 'Salario docente base' },
    ],
    propuestas: [
      {
        titulo: 'Mejorar la infraestructura educativa',
        descripcion:
          'Rehabilitar escuelas y universidades garantizando espacios seguros y adecuados para el aprendizaje en todo el país.',
      },
      {
        titulo: 'Impulsar la educación tecnológica',
        descripcion:
          'Ampliar el acceso a herramientas digitales, internet y formación en competencias tecnológicas para estudiantes y docentes.',
      },
      {
        titulo: 'Fortalecer la formación docente',
        descripcion:
          'Capacitación continua y actualización de metodologías de enseñanza para garantizar educación de calidad.',
      },
      {
        titulo: 'Ampliar las oportunidades educativas',
        descripcion:
          'Aumentar becas, programas de apoyo y acceso a la educación superior para jóvenes de todo el país.',
      },
    ],
    equipo: [
      { nombre: 'Vianny Campechano', cargo: 'Ministra' },
      { nombre: 'Viceministro de Educación', cargo: 'Por designar' },
      { nombre: 'Viceministra de Educación Superior', cargo: 'Por designar' },
      { nombre: 'Director de Formación Docente', cargo: 'Por designar' },
    ],
    metas: [
      'Reducir la brecha educativa y digital entre las diferentes regiones del país.',
      'Elevar la calidad del aprendizaje en todos los niveles educativos.',
      'Aumentar el acceso a la educación superior y las oportunidades de becas.',
      'Formar estudiantes preparados para el mercado laboral, con énfasis en tecnología, innovación y emprendimiento.',
    ],
    icono: 'graduationCap',
  },
  {
    id: 'trabajo',
    slug: 'trabajo-y-administraciones-publicas',
    nombre: 'Ministerio de Trabajo y Administraciones Públicas',
    titular: 'Valery Michelle Rosario Rodríguez',
    imagenTitular: valeryMichelle,
    cargo: 'Ministra',
    descripcion:
      'Un ministerio, dos misiones: trabajo digno para todos, y un Estado que finalmente trabaja para ti.',
    descripcionCompleta:
      'El Ministerio de Trabajo y Administraciones Públicas, bajo el liderazgo de Valery Michelle Rosario Rodríguez, tiene dos ejes fundamentales: garantizar los derechos laborales de los trabajadores y modernizar la administración pública para servir mejor al ciudadano.\n\nEn materia laboral, nuestra prioridad es avanzar hacia la formalización del empleo, la dignificación de los salarios y la protección de los derechos de los trabajadores dominicanos. Impulsaremos el diálogo social tripartito (gobierno, empleadores y sindicatos) para construir consensos.\n\nEn administraciones públicas, modernizaremos los procesos, digitalizaremos los trámites y promoveremos la meritocracia en el servicio público. Queremos un Estado eficiente, transparente y cercano a la gente.',
    vision:
      'Convertir a República Dominicana en un referente del Caribe en materia de trabajo adaptado al futuro y Estado inteligente al servicio del ciudadano, donde ningún trabajador quede desprotegido y ningún dominicano tenga que pelear contra la burocracia para ejercer sus derechos.',
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
        titulo: 'Tu historial laboral, contigo siempre',
        descripcion:
          'Crearemos el Pasaporte Laboral Digital: un registro único de tu experiencia, tus habilidades y tus aportes a la seguridad social que te acompaña sin importar dónde trabajes. Si eres conductor, freelancer, empleado de una empresa o trabajas por temporadas, podrás construir tu pensión y tu seguro de salud poco a poco, a tu ritmo y según lo que ganes.',
      },
      {
        titulo: 'Protección real para quienes trabajan en apps',
        descripcion:
          'Los repartidores y conductores de plataformas digitales merecen reglas claras: seguro contra accidentes, aportes a su pensión, y el derecho a saber por qué una aplicación los suspendió o les asignó menos trabajo. Crearemos además un fondo de capacitación que conecte directamente a los trabajadores con empleos reales en tecnología, idiomas y los sectores del futuro.',
      },
      {
        titulo: 'Un Estado que se vigila a sí mismo',
        descripcion:
          'Usaremos tecnología para detectar irregularidades en la nómina pública — nombramientos duplicados, contrataciones sospechosas, patrones anómalos— antes de que se conviertan en un problema mayor. Cada alerta será revisada por personas, nunca decidida solo por una máquina, y publicaremos los resultados para que todos los dominicanos puedan verlos.',
      },
      {
        titulo: 'Empleos públicos por mérito, no por contactos',
        descripcion:
          'Se acabaron las "botellas". Cada vacante en el sector público se publicará abiertamente, con una primera evaluación a ciegas —sin nombres, sin partidos, sin fotos— para que gane el más capacitado, no el más conectado. Impulsaremos también jornadas de trabajo más flexibles en las instituciones públicas, midiendo resultados reales antes de expandirlas.',
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
      '1 millón de trabajadores con su Pasaporte Laboral Digital activo, aportando a su futuro.',
      '100,000 trabajadores de plataformas con seguro de accidentes y aportes a pensión.',
      '20,000 dominicanos capacitados y conectados a empleos reales en sectores de futuro.',
      '40% menos irregularidades confirmadas en la nómina del Estado.',
      'La mitad de las nuevas plazas públicas cubiertas por mérito, no por recomendación.',
      '30% de las instituciones públicas con jornadas más flexibles, sin sacrificar el servicio al ciudadano.',
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
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
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
    titular: 'Carla Carrasco',
    imagenTitular: carlaCarrasco,
    imagePosition: 'center 30%',
    cargo: 'Ministra',
    descripcion:
      'Posicionaremos al país como destino turístico de clase mundial, protegiendo y promoviendo nuestra riqueza cultural, histórica y natural como activos estratégicos de desarrollo.',
    descripcionCompleta:
      "El Ministerio de Turismo y Cultura, dirigido por Carla Carrasco, articulará la política turística y cultural del país como motores complementarios de desarrollo económico e identidad nacional.\n\nEl turismo es uno de los principales generadores de divisas y empleo del país. Nuestra visión es diversificar la oferta más allá del tradicional modelo 'sol y playa', incorporando turismo cultural, ecológico, de aventura, gastronómico y de bienestar. Esto implica inversión en infraestructura, capacitación del personal y promoción internacional.\n\nLa cultura es el alma de nuestra identidad. Trabajaremos por la protección del patrimonio, el apoyo a los creadores y artistas, y el acceso universal a la vida cultural. La cultura no es un gasto: es una inversión en cohesión social y desarrollo humano.",
    imagen:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&q=80',
    vision:
      'Ser una institución comprometida con la preservación, promoción y difusión de la cultura dominicana, fortaleciendo nuestra identidad nacional y garantizando que nuestro patrimonio y nuestras expresiones culturales sean valorados y transmitidos a las futuras generaciones.',
    metricas: [
      { valor: '10M', label: 'Turistas al año' },
      { valor: '$8B', label: 'Ingresos turísticos' },
      { valor: '300', label: 'Eventos culturales' },
      { valor: '20', label: 'Nuevos destinos' },
    ],
    propuestas: [
      {
        titulo: 'Impulsar el turismo cultural',
        descripcion:
          'Promover rutas y experiencias que destaquen nuestra historia, música, gastronomía, artesanía y tradiciones.',
      },
      {
        titulo: 'Fortalecer el turismo sostenible',
        descripcion:
          'Proteger playas, áreas naturales y espacios históricos mediante prácticas responsables y sostenibles.',
      },
      {
        titulo: 'Promover nuevos destinos turísticos',
        descripcion:
          'Desarrollar y promocionar destinos fuera de las zonas turísticas tradicionales para distribuir mejor las oportunidades.',
      },
      {
        titulo: 'Apoyar a las comunidades locales',
        descripcion:
          'Crear programas para que emprendedores, artesanos y pequeños negocios puedan beneficiarse directamente del crecimiento turístico.',
      },
    ],
    equipo: [
      { nombre: 'Carla Carrasco', cargo: 'Ministra' },
      { nombre: 'Viceministra de Turismo', cargo: 'Por designar' },
      { nombre: 'Viceministra de Cultura', cargo: 'Por designar' },
      { nombre: 'Director de Promoción Turística', cargo: 'Por designar' },
    ],
    metas: [
      'Aumentar la llegada de visitantes: superar progresivamente las cifras actuales y atraer turistas durante todo el año.',
      'Fortalecer el patrimonio cultural: restaurar, conservar y promover espacios históricos y culturales del país.',
      'Generar más oportunidades: incrementar la participación de comunidades y emprendedores locales en la actividad turística.',
      'Posicionar a República Dominicana: consolidar al país como uno de los principales destinos turísticos y culturales del Caribe.',
    ],
    icono: 'palmtree',
  },
  {
    id: 'administrativo',
    slug: 'administrativo-de-la-presidencia',
    nombre: 'Ministerio Administrativo de la Presidencia',
    titular: 'Andry Rogelio Piñeiro Chalas',
    imagenTitular: andryPineiro,
    imagePosition: 'center 30%',
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
    imagenTitular: manuelArturo,
    cargo: 'Ministro',
    descripcion:
      'Fortaleceremos al campo, a los emprendedores y a las pequeñas empresas, motores reales de la economía nacional, con acceso a financiamiento, tecnología y mercados.',
    descripcionCompleta:
      'El Ministerio de Agricultura, Industria, Comercio y MIPYMES, bajo la conducción de Manuel Arturo Puello, articulará la política productiva del país en sus múltiples dimensiones: agrícola, industrial, comercial y de pequeñas empresas.\n\nEl campo dominicano necesita inversión, tecnología y mercados. Trabajaremos por la seguridad alimentaria, el apoyo a los pequeños productores, la tecnificación del agro y la apertura de nuevos mercados internacionales para nuestros productos.\n\nSimultáneamente, las MIPYMES son la mayor fuente de empleo del país. Las fortaleceremos con financiamiento accesible, simplificación tributaria, formación empresarial y encadenamientos productivos con grandes empresas. También impulsaremos la industria nacional y el comercio exterior.',
    imagen:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80',
    imagenSecundaria:
      'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80',
    vision:
      'Ser la institución líder a nivel nacional y regional en el diseño y ejecución de políticas que impulsen el crecimiento económico y social de los sectores productivos, con una gestión eficiente, transparente y cercana, apoyada por un equipo altamente competente y comprometido con el desarrollo del país.',
    metricas: [
      { valor: '$500M', label: 'Fondo MIPYMES' },
      { valor: '50%', label: 'Producción local' },
      { valor: '20', label: 'Nuevos mercados' },
      { valor: '200K', label: 'Emprendedores' },
    ],
    propuestas: [
      {
        titulo: 'Marco Unificado de Evaluación de Controles Institucionales',
        descripcion:
          'Diseñar, implementar y evaluar un marco que garantice la mitigación efectiva de riesgos operativos, de continuidad, cumplimiento, seguridad de la información, desempeño ambiental e integridad organizacional, promoviendo la mejora continua.',
      },
      {
        titulo: 'Plan de Continuidad y Omnicanalidad para Atención Ciudadana',
        descripcion:
          'Clasificar las solicitudes e interacciones según su impacto directo en el ciudadano para priorizar servicios esenciales en periodos de disrupción o crisis.',
      },
      {
        titulo:
          'Sistema de Monitoreo Continuo y Gestión de Satisfacción del Ciudadano',
        descripcion:
          'Definir métricas clave de desempeño (velocidad de respuesta, tasa de resolución al primer contacto y amabilidad) para cada trámite prioritario, dando seguimiento oportuno a los indicadores.',
      },
      {
        titulo: 'Sistema Integrado de Vigilancia y Cumplimiento Normativo',
        descripcion:
          'Establecer un protocolo de monitoreo sistemático de boletines oficiales, leyes, decretos, resoluciones ministeriales y normas técnicas (ISO, medioambientales, laborales, seguridad de la información, etc.) aplicables al sector.',
      },
    ],
    equipo: [
      { nombre: 'Manuel Arturo Puello', cargo: 'Ministro' },
      { nombre: 'Viceministro de Agricultura', cargo: 'Por designar' },
      { nombre: 'Viceministra de Industria y Comercio', cargo: 'Por designar' },
      { nombre: 'Director PROINDUSTRIA', cargo: 'Por designar' },
    ],
    metas: [
      'Asegurar la eficacia de los controles institucionales para prevenir la materialización de riesgos que puedan afectar la continuidad operativa, la satisfacción de las partes interesadas, el cumplimiento normativo, la seguridad de la información, el desempeño ambiental y la integridad organizacional, mediante la mejora continua del Sistema Integrado de Gestión.',
      'Garantizar una atención efectiva al ciudadano cliente durante periodos de disrupción.',
      'Mejorar el nivel de satisfacción de los ciudadanos-clientes dando un seguimiento y monitoreo oportuno a los indicadores de desempeño.',
      'Gestionar de manera efectiva mecanismos de identificación, análisis y registro de los requisitos legales y otros requisitos aplicables al alcance del sistema, garantizando el cumplimiento normativo.',
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
