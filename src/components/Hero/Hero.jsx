import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { HeroContainer } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <div
            className="slide"
            style={{
              backgroundImage: "url(/assets/images/portada.png)",
            }}
          >
            <h1>Bienvenido a Nuestra Tienda</h1>
            <p>Descubre los mejores productos con ofertas increíbles.</p>
            <button>Explorar</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            style={{
              backgroundImage: "url(/assets/images/portada1.png)",
            }}
          >
            <h1>Ofertas Especiales</h1>
            <p>Aprovecha descuentos exclusivos en tecnología y más.</p>
            <button>Ver Ofertas</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            style={{
              backgroundImage: "url(/assets/images/portada2.png)",
            }}
          >
            <h1>Nuevos Lanzamientos</h1>
            <p>Lo último en innovación, disponible ahora.</p>
            <button>Descubrir</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </HeroContainer>
  );
};

export default Hero;
