import Hero from "../components/Hero/Hero"; 
import AboutIntro from "../components/AboutIntro/AboutIntro"; // Importamos AboutIntro
import FeaturedProducts from "../components/FeaturedProducts/FearturedProducts";

const Home = () => {
  return (
    <>
      <Hero /> {/* Renderizamos el Hero */}
      <AboutIntro /> {/* Sección introductoria sobre la tienda */}
      <FeaturedProducts /> {/* Detalles del producto */}
    </>
  );
};

export default Home;
