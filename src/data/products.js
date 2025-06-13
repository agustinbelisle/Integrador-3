const products = [
  {
    id: 1,
    name: "Lenovo V15 G4 AMN",
    price: 1009999,
    images: [
      "/assets/images/lenovo.webp",
      "/assets/images/lenovo1.webp",
      "/assets/images/lenovo2.webp"
    ],
    category: "Notebooks",
    description:
      "Portátil con procesador AMD Ryzen, pantalla FHD de 15.6 pulgadas y funciones de seguridad avanzadas. Diseñado para productividad y movilidad. Cuenta con 8 GB de RAM y disco SSD de 512 GB para un rendimiento fluido. Ideal para estudiantes y profesionales que necesitan un equipo confiable y ligero. Incluye lector de huellas y batería de larga duración para uso prolongado sin interrupciones."
  },
  {
    id: 2,
    name: "HP Pavilion Plus 14",
    price: 2064149,
    images: [
      "/assets/images/hp0.webp",
      "/assets/images/hp1.webp",
      "/assets/images/hp2.webp"
    ],
    category: "Notebooks",
    description:
      "Laptop con pantalla OLED de 14 pulgadas, procesador Intel Core i7, 16 GB de RAM y almacenamiento SSD de 1 TB. Perfecta para trabajo multitarea y entretenimiento con colores vibrantes y alta resolución. Su diseño compacto y liviano facilita la movilidad. Incluye teclado retroiluminado, conectividad Wi-Fi 6 y batería con hasta 12 horas de autonomía. Ideal para creadores de contenido y usuarios avanzados."
  },
  {
    id: 14,
    name: "MacBook Air M2",
    price: 1867499,
    images: [
      "/assets/images/macbook.webp",
      "/assets/images/macbook1.webp",
      "/assets/images/macbook2.webp"
    ],
    category: "Notebooks",
    description:
      "Ultraportátil con pantalla Liquid Retina de 13.6 pulgadas, chip M2 de Apple, hasta 18 horas de batería y diseño delgado. Ideal para productividad y creatividad. Ofrece almacenamiento SSD ultrarrápido de hasta 2 TB y 8 GB de memoria unificada para un rendimiento sin interrupciones. Cuenta con cámara FaceTime HD, sistema de audio con cuatro altavoces y teclado Magic Keyboard para comodidad en la escritura."
  },
  {
    id: 3,
    name: "PlayStation 5",
    price: 1259999,
    images: [
      "/assets/images/ps5.webp",
      "/assets/images/ps5a.webp"
    ],
    category: "Gaming",
    description:
      "Consola de última generación con procesador AMD Ryzen, GPU RDNA 2, SSD ultrarrápido y compatibilidad con juegos en 4K y 8K. Incluye controlador inalámbrico DualSense con retroalimentación háptica y gatillos adaptativos para una experiencia inmersiva. Soporta juegos en realidad virtual y streaming en alta calidad. Su diseño moderno y sistema de refrigeración eficiente garantizan largas sesiones de juego sin sobrecalentamiento."
  },
  {
    id: 4,
    name: "Xbox Series X",
    price: 1172916,
    images: [
      "/assets/images/xbox.webp",
      "/assets/images/xbox1.webp"
    ],
    category: "Gaming",
    description:
      "Consola con arquitectura Xbox Velocity, gráficos en 4K y hasta 120 FPS, almacenamiento SSD de 1 TB y sonido espacial 3D. Cuenta con retrocompatibilidad con miles de juegos de generaciones anteriores. El control inalámbrico incluye mejoras en ergonomía y latencia. Ofrece acceso a servicios como Xbox Game Pass para disfrutar de una amplia biblioteca de títulos."
  },
  {
    id: 15,
    name: "Nintendo Switch OLED",
    price: 781999,
    images: [
      "/assets/images/switch.webp",
      "/assets/images/switch1.webp",
      "/assets/images/switch2.webp"
    ],
    category: "Gaming",
    description:
      "Consola híbrida con pantalla OLED de 7 pulgadas, almacenamiento de 64 GB, soporte ajustable y conectividad mejorada. Permite jugar en modo portátil, tabletop o conectada a la TV. Su batería ofrece hasta 9 horas de juego continuo. Compatible con los populares Joy-Con con sensores de movimiento y vibración HD para mayor inmersión. Ideal para juegos familiares y en movimiento."
  },
  {
    id: 5,
    name: "SmartTV Samsung 50'' 4K",
    price: 827818,
    images: [
      "/assets/images/samsung1.webp",
      "/assets/images/samsung2.webp",
      "/assets/images/samsung3.webp",
      "/assets/images/samsung4.webp"
    ],
    category: "Hogar",
    description:
      "Televisor Crystal UHD con tecnología PurColor, escalado 4K y sistema operativo Tizen OS para una experiencia de entretenimiento envolvente. Cuenta con múltiples puertos HDMI y USB para conectar dispositivos externos. Compatible con asistentes de voz y servicios de streaming populares, ideal para una sala de estar moderna."
  },
  {
    id: 6,
    name: "SmartTV LG OLED 65''",
    price: 3443999,
    images: [
      "/assets/images/lg0.webp",
      "/assets/images/lg1.webp",
      "/assets/images/lg2.webp",
      "/assets/images/lg3.webp",
      "/assets/images/lg4.webp"
    ],
    category: "Hogar",
    description:
      "Televisor con tecnología OLED evo, resolución 4K Ultra HD, sonido Dolby Atmos y sistema operativo WebOS. Pantalla autoiluminada que ofrece negros profundos y colores vibrantes. Incorpora ThinQ AI para control por voz y conexión con dispositivos inteligentes del hogar. Diseño ultradelgado que se integra a cualquier espacio."
  },
  {
    id: 16,
    name: "SmartTV Sony Bravia XR 55''",
    price: 3899999,
    images: [
      "/assets/images/sony_tv.webp",
      "/assets/images/sony_tv1.webp",
      "/assets/images/sony_tv2.webp"
    ],
    category: "Hogar",
    description:
      "Pantalla QD-OLED con resolución 4K HDR, procesador Cognitive Processor XR y tecnología Acoustic Surface Audio+. Proporciona imágenes con realismo extremo y sonido multidimensional que emite desde la pantalla misma. Compatible con Google Assistant y Alexa para control por voz. Perfecto para cine en casa y videojuegos."
  },
  {
    id: 7,
    name: "Samsung Galaxy S23 Ultra",
    price: 1755999,
    images: [
      "/assets/images/s23.webp",
      "/assets/images/s23a.webp",
      "/assets/images/s23b.webp"
    ],
    category: "Smartphones",
    description:
      "Smartphone con pantalla Dynamic AMOLED de 6.8 pulgadas, cámara de 200 MP, procesador Snapdragon 8 Gen 2 y batería de 5000 mAh. Ofrece carga rápida y carga inalámbrica reversible. Sistema de cámaras avanzadas con zoom óptico 10x y estabilización óptica para fotos y videos profesionales. Resistencia al agua y polvo con certificación IP68."
  },
  {
    id: 8,
    name: "iPhone 14",
    price: 1365418,
    images: [
      "/assets/images/iphone.webp",
      "/assets/images/iphone1.webp",
      "/assets/images/iphone2.webp"
    ],
    category: "Smartphones",
    description:
      "Teléfono con pantalla Super Retina XDR OLED de 6.1 pulgadas, chip A15 Bionic, cámara dual de 12 MP y resistencia al agua IP68. Incluye modo Cine para grabación de video con profundidad y efectos profesionales. Sistema operativo iOS con actualizaciones periódicas y amplia integración con otros dispositivos Apple. Batería con autonomía para todo el día y carga rápida."
  },
  {
    id: 17,
    name: "Google Pixel 8 Pro",
    price: 1099999,
    images: [
      "/assets/images/pixel.webp",
      "/assets/images/pixel1.webp",
      "/assets/images/pixel2.webp"
    ],
    category: "Smartphones",
    description:
      "Smartphone con pantalla OLED LTPO de 6.7 pulgadas, procesador Tensor G3, cámara triple de 50 MP y batería de 5050 mAh. Sistema Android puro con actualizaciones directas de Google. Funciones avanzadas de fotografía computacional para capturar imágenes y videos en cualquier condición. Integración con servicios Google y reconocimiento facial rápido."
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    price: 672200,
    images: [
      "/assets/images/apple0.webp",
      "/assets/images/apple1.webp",
      "/assets/images/apple2.webp",
      "/assets/images/apple3.webp"
    ],
    category: "Accesorios",
    description:
      "Reloj inteligente con pantalla Retina OLED, chip S9, sensores de salud avanzados y resistencia al agua hasta 50 metros. Monitorea frecuencia cardíaca, oxígeno en sangre y sueño. Compatible con aplicaciones de fitness y notificaciones en tiempo real. Diseño elegante con correas intercambiables y carga rápida magnética."
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch 5",
    price: 451706,
    images: [
      "/assets/images/watch1.webp",
      "/assets/images/watch2.webp",
      "/assets/images/watch3.webp"
    ],
    category: "Accesorios",
    description:
      "Smartwatch con pantalla AMOLED, sensor BioActive, seguimiento del sueño y batería de larga duración. Ofrece análisis de estrés, ritmo cardíaco y niveles de oxígeno. Integra GPS para seguimiento deportivo preciso. Compatible con Android y funciones de notificación, llamadas y música desde la muñeca."
  },
  {
    id: 18,
    name: "Fitbit Charge 6",
    price: 349029,
    images: [
      "/assets/images/fitbit.webp",
      "/assets/images/fitbit1.webp",
      "/assets/images/fitbit2.webp"
    ],
    category: "Accesorios",
    description:
      "Pulsera de actividad con pantalla táctil AMOLED, monitorización continua del ritmo cardíaco, oxígeno en sangre y sueño. Compatible con notificaciones de smartphone y entrenamientos guiados. Resistente al agua y batería con hasta 7 días de autonomía. Ideal para usuarios que buscan mejorar su salud y actividad diaria."
  },

  {
    id: 11,
    name: "Auriculares Bluetooth Sony WH-1000XM5",
    price: 150000,
    images: [
      "/assets/images/sony1.webp",
      "/assets/images/sony2.webp",
      "/assets/images/sony3.webp",
      "/assets/images/sony4.webp",
      "/assets/images/sony5.webp"
    ],
    category: "Audio",
    description: "Cancelación de ruido avanzada, sonido de alta resolución, batería de hasta 30 horas y conectividad Bluetooth 5.2."
  },
  {
    id: 12,
    name: "Parlante Portátil JBL Boombox 3",
    price: 220000,
    images: [
      "/assets/images/jbl.webp",
      "/assets/images/jbl1.webp",
      "/assets/images/jbl2.webp",
      "/assets/images/jbl3.webp"
    ],
    category: "Audio",
    description: "Altavoz con sonido potente JBL Original Pro, conectividad Wi-Fi y Bluetooth, batería de 24 horas y resistencia al agua."
  },
  {
    id: 13,
    name: "Barra de Sonido Samsung HW-Q800B",
    price: 300000,
    images: [
      "/assets/images/barra.webp",
      "/assets/images/barra0.webp",
      "/assets/images/barra1.webp"
    ],
    category: "Audio",
    description: "Sonido envolvente 5.1.2 canales, Dolby Atmos inalámbrico, tecnología Q-Symphony y subwoofer inalámbrico."
  }
];

export default products;

