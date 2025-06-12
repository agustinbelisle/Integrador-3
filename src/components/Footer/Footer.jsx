
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterLinksWrapper,
  FooterLinksGroup,
  FooterSocialIcons
} from "./FooterStyles";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo"; // ✅ Importamos el componente de logo

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <Logo /> {/* ✅ Usamos el componente Logo aquí */}
        </FooterLogo>

        <FooterLinksWrapper>
          <FooterLinksGroup>
            <h4>Empresa</h4>
            <NavLink to="/about">Nosotros</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <h4>Productos</h4>
            <NavLink to="/products?category=Notebooks">Notebooks</NavLink>
            <NavLink to="/products?category=Smartphones">Smartphones</NavLink>
            <NavLink to="/products">Todos</NavLink>
          </FooterLinksGroup>

          <FooterLinksGroup>
            <h4>Legal</h4>
            <NavLink to="/terms">Términos</NavLink>
            <NavLink to="/privacy">Privacidad</NavLink>
          </FooterLinksGroup>
        </FooterLinksWrapper>

        <FooterSocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </FooterSocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
