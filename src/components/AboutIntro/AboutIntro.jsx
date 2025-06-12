import { AboutContainer } from "./AboutIntroStyles";
import { NavLink } from "react-router-dom";

const AboutIntro = () => {
  return (
    <AboutContainer>
      <h2>Acerca de LIVE</h2>
      <p>
        En <strong>LIVE</strong>, ofrecemos lo mejor en tecnología: notebooks, PCs, consolas, Smart TVs y smartphones. Nos especializamos en productos de alta calidad con envíos seguros y atención al cliente excepcional.
      </p>
      <NavLink to="/about">
        <button>Continuar...</button>
      </NavLink>
    </AboutContainer>
  );
};

export default AboutIntro;
