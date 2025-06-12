import { AboutContainer } from "../components/AboutIntro/AboutIntroStyles";

const About = () => {
  return (
    <AboutContainer>
      <h1>Acerca de Nosotros</h1>
      <p>
        Bienvenido a <strong>LIVE</strong>, tu tienda especializada en lo último en tecnología. Ofrecemos una selección curada de notebooks, smartwatches, consolas de videojuegos, Smart TVs y smartphones de alta gama.
      </p>

      <h2>Nuestra Misión</h2>
      <p>
        En LIVE creemos que la tecnología no solo nos conecta, sino que impulsa el futuro. Por eso, nos comprometemos a ofrecer productos innovadores, con atención personalizada, envíos seguros y un servicio de excelencia.
      </p>

      <h2>Nuestros Productos</h2>
      <ul>
        <li><strong>Notebooks</strong>: Equipos livianos y potentes ideales para trabajo, estudio y uso diario.</li>
        <li><strong>Smartwatches</strong>: Relojes inteligentes que combinan tecnología y estilo para mantenerte conectado y en forma.</li>
        <li><strong>Consolas</strong>: PlayStation, Xbox y Nintendo con sus mejores juegos.</li>
        <li><strong>Smart TVs</strong>: Pantallas de última generación con tecnología 4K y OLED.</li>
        <li><strong>Smartphones</strong>: Modelos de gama alta y media con lo último en innovación.</li>
      </ul>

      <h2>Compromiso con la Calidad</h2>
      <p>
        Trabajamos con marcas reconocidas a nivel mundial para garantizar productos 100% originales, con garantía oficial. Te asesoramos para que encuentres la opción perfecta según tus necesidades y presupuesto.
      </p>

      <h2>Envíos y Atención al Cliente</h2>
      <p>
        Realizamos envíos rápidos y seguros a todo el país. Nuestro equipo de soporte está disponible para resolver tus dudas y acompañarte durante toda tu experiencia de compra.
      </p>

      <h2>Contáctanos</h2>
      <p>
        ¿Tenés consultas o querés saber más? Visitá nuestra página de <a href="/contact">Contacto</a>. Estamos para ayudarte a encontrar la tecnología que necesitás.
      </p>
    </AboutContainer>
  );
};

export default About;
