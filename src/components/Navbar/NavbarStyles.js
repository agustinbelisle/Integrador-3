import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

// Logo
export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: #f0c040;
  }

  @media (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

// Contenedor de navbar principal
export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.85);

  .nav-links {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex: 1;

    /* Desktop styles: no transform, visible */
    @media (min-width: 992px) {
      transform: none !important;
      opacity: 1 !important;
      overflow: visible !important;
      border-top: none !important;
      position: static !important;
      flex-direction: row !important;
      padding: 0 !important;
      transition: none !important;
    }

    /* Mobile/tablet styles - use transform for collapse */
    transform-origin: top;
    transform: scaleY(0);
    opacity: 0;
    overflow: hidden;
    flex-direction: column;
    padding: 0;
    border-top: 0 solid transparent;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, border-top 0.3s ease-in-out;

    a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.2rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #f0c040;
        font-size: 1.1rem;
      }
    }
  }

  .nav-links.active {
    transform: scaleY(1);
    opacity: 1;
    border-top: 2px solid #f0c040;
  }

  .dropdown-wrapper {
    position: relative;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-right: 3rem;
  }

  @media (max-width: 992px) {
    flex-wrap: wrap;

    /* Always display flex for children */
    .nav-links {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      gap: 2rem;
      padding: 10px 0;
      box-sizing: border-box;
      z-index: 9999;
      border-top: 0;
    }

    .nav-links.active {
      border-top: 2px solid #f0c040;
    }

    .actions {
      margin-left: auto;
    }
  }

  @media (max-width: 430px) {
    .nav-links {
      height: 350px;
      gap: 5.5rem;
    }
  }
`;





// Botón de logout
export const LogoutButton = styled.button`
  background: linear-gradient(135deg, rgba(240, 192, 64, 0.95), rgba(230, 185, 56, 0.95));
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  font-family: "Exo 2", sans-serif;
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(230, 185, 56, 0.9), rgba(213, 171, 51, 0.9));
    opacity: 0.95;
  }

  &:active {
    opacity: 0.85;
  }
`;

// Botón del menú hamburguesa
export const MenuButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

// Buscador
export const SearchWrapper = styled.div`
  position: relative;
  width: 250px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  border: 1px solid #ccc;
  overflow: hidden;

  input {
    flex: 1;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      font-weight: 500;
      color: #555;
      font-family: 'Roboto', sans-serif;
    }
  }

  button {
    background: #f0c040;
    border: none;
    padding: 0.7rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    svg {
      color: #333;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }

  @media (max-width: 992px) {
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    width: 100%;
    max-width: 600px;

    flex-direction: column;
    max-height: 0;
    padding: 0;
    border: none;
    background: transparent;
    transition: max-height 0.4s ease, padding 0.3s ease, background 0.3s ease;

    &.active {
      display: flex;
      max-height: 100px;
      padding: 0.75rem 1rem;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      background: rgba(255, 255, 255, 0.95);
      

      input {
        width: 100%;
        border-radius: 4px;
      }

      button {
        display: none;
        pointer-events: auto;
      }
    }
  }
`;





// Icono de búsqueda (mobile)
export const SearchIconMobile = styled.div`
  display: none;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
    color: white;
  }

  @media (max-width: 992px) {
    display: block;
  }
`;

// Resultados de búsqueda
export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 5.5%;
  width: 80%;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #ccc;
  z-index: 998;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  a {
    display: block;
    padding: 0.75rem;
    border-bottom: 1px solid #eee;
    color: #333;
    text-decoration: none;

    &:hover {
      background: #f9f9f9;
    }
  }

  @media (max-width: 992px) {
    position: fixed;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 520px;
    padding: 0.75rem 1.25rem;
    border-radius: 10px;
  }
`;

// Icono del carrito
export const CartIcon = styled.div`
  position: relative;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;

  span {
    position: absolute;
    top: -5px;
    right: -10px;
    background: red;
    color: white;
    font-size: 0.9rem;
    padding: 2px 6px;
    border-radius: 50%;
  }
`;

// Sidebar del carrito
export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  max-width: 90%;
  height: 100vh;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  transform: translateX(100%); /* Inicialmente fuera de la vista */
  transition: transform 0.3s ease-in-out; /* Transición suave */

  &.active {
    transform: translateX(0); /* Mueve a la vista cuando está activo */
  }

  h3 {
    margin-bottom: 1rem;
  }

  .empty-cart {
    p {
      margin-bottom: 1rem;
    }

    a {
      color: #007bff;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

// Overlay del carrito
export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1500;
`;


// Dropdown de usuario (mobile)
export const UserDropdownMobile = styled.div`
  position: relative;
  cursor: pointer;
  color: white;


  @media (max-width: 992px) {
    display: block;
  }

  .user-icon {
    font-size: 1.5rem;
  }

  .dropdown-menu {
    position: absolute;
    top: 180%;
    right: -50%;
    background: rgba(0, 0, 0, 0.85);
    padding: 10px;
    border-radius: 5px;
    opacity: 0;
    height: auto;
    width: auto;
    visibility: hidden;
    transform: translateY(-10px);
    transition: transform 0.3s ease, opacity 0.3s ease;
    border:  2px solid #f0c040;

    span {
      display: block;
      margin-bottom: 8px;
      color: white;
      font-size: 1.1rem;
    }

    button {
      background: #f0c040;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 15px;

      &:hover {
        background: #e0b830;
      }
    }
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

// Dropdown del menú de categorías
export const DropdownMenu = styled.div`
  position: absolute;
  top: 185%;
  left: -125%;
  background: rgba(0, 0, 0, 0.85);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 999;
  border-radius: 0 0 10px 10px;
  width: max-content;
  flex-direction: column;
  border-top: 1px solid #f0c040;

  /* Transición suave */
  opacity: 0;
  visibility: hidden;
  transform: translateX(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  @media (max-width: 992px) {
    top: -285%;
    width: 300px;
    left: 25%;
    border-top: none;
    gap: 0.5rem;
    background: none;
  }

  @media (max-width: 430px) {
    top: -605%;
    height: 320px;
    left: 40%;
    grid-template-columns: repeat(1, 1fr);
    font-size: 0.9rem;
  }
`;


// Ítems del dropdown
export const DropdownItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  border-left: 2px solid transparent;

  @media (max-width: 992px) {
    border-left: 2px solid #f0c040;
  }
`;


// Agregar esto al final de NavbarStyles.js (o donde sea apropiado)
export const UserDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;

  @media (max-width: 992px) {
    display: none;
  }
`;
export const NavItemSpan = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

      &:hover {
        color: #f0c040;
        font-size: 1.1rem;
       
      }

`;
