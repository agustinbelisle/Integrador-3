import { NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import {
  NavContainer,
  MenuButton,
  CartIcon,
  SearchIconMobile,
  CartSidebar,
  CartOverlay,
  DropdownMenu,
  DropdownItem,
  SearchWrapper,
  SearchBar,
  SearchResults,
  LogoutButton,
  UserDropdownMobile,
  UserDesktop,
  NavItemSpan,
} from "./NavbarStyles";

import Logo from "../Logo/Logo";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import AuthModal from "../Modal/Modal";
import products from "../../data/products";
import Cart from "../Cart/Cart";
import { useMenuActive } from "../../hooks/useMenuActive";
import { useClickOutside } from "../../hooks/useClickOutside";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const categories = ["Notebooks", "Smartphones", "Accesorios", "Audio", "Gaming", "Hogar"];

  const { isMenuActive, toggleMenu, openMenu, closeMenu } = useMenuActive();

  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const navRef = useRef(null);
  const searchRef = useRef(null);


  useClickOutside(navRef, () => {
    if (isMenuActive("nav")) {
      console.log("Click fuera del menú hamburguesa, cerrando menú...");
      closeMenu("nav");
    }
  });


  useClickOutside(dropdownRef, () => {
    if (isMenuActive("dropdown")) {
      console.log("Click fuera del dropdown Productos, cerrando dropdown...");
      closeMenu("dropdown");
    }
  });


  useClickOutside(userDropdownRef, () => {
    if (showUserDropdown) {
      console.log("Click fuera del dropdown Usuario, cerrando dropdown...");
      setShowUserDropdown(false);
    }
  });


  useClickOutside(searchRef, () => {
    if (searchOpen || searchResults.length > 0) {
      console.log("Click fuera del search, cerrando buscador y limpiando resultados...");
      setSearchOpen(false);
      setSearchResults([]);
      setSearch("");
    }
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTabletOrLess = windowWidth <= 992;

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query.length > 1) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setSearchOpen(true);
    } else {
      setSearchResults([]);
      setSearchOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    closeMenu("nav");
    closeMenu("dropdown");
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(prev => !prev);
    setSearchOpen(false);
    setSearchResults([]);
    setSearch('');
  };

  const handleNavLinkClick = () => {
    if (isMenuActive("nav")) {
      console.log("Click en enlace menú nav, cerrando menú hamburguesa...");
      closeMenu("nav");
    }
  };

  const handleMenuButtonClick = () => {
    if (isMenuActive("nav")) {
      console.log("Botón menú hamburguesa clickeado y menú abierto - cerrando menú");
      closeMenu("nav");
    } else {
      console.log("Botón menú hamburguesa clickeado y menú cerrado - abriendo menú");
      openMenu("nav");
    }
  };

return (
  <>
    <NavContainer>
      <Logo />

      <div
        className={isMenuActive("nav") ? "nav-links active" : "nav-links"}
        ref={navRef}
      >
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleNavLinkClick}
        >
          Nosotros
        </NavLink>

        <div className="dropdown-wrapper" style={{ position: "relative" }} ref={dropdownRef}>
          <NavItemSpan
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu("dropdown");
            }}
          >
            Productos
          </NavItemSpan>

          <DropdownMenu className={isMenuActive("dropdown") ? "active" : ""}>
            {categories.map((cat) => (
              <DropdownItem
                key={cat}
                to={`/products?category=${cat}`}
                onClick={() => {
                  closeMenu("dropdown");
                  closeMenu("nav");
                }}
              >
                {cat}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </div>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleNavLinkClick}
        >
          Contacto
        </NavLink>
      </div>

      <div className="actions" ref={searchRef}>
        <SearchWrapper>
          <SearchBar className={searchOpen ? "active" : ""}>
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={handleSearchChange}
            />
            <button>
              <FaSearch />
            </button>
          </SearchBar>

          {searchResults.length > 0 && (
            <SearchResults>
              {searchResults.map((product) => (
                <NavLink
                  key={product.id}
                  to={`/producto/${product.id}`}
                  onClick={() => {
                    setSearch("");
                    setSearchResults([]);
                    setSearchOpen(false);
                  }}
                >
                  {product.name}
                </NavLink>
              ))}
            </SearchResults>
          )}

          <SearchIconMobile onClick={() => setSearchOpen(!searchOpen)}>
            <FaSearch />
          </SearchIconMobile>
        </SearchWrapper>

        <CartIcon onClick={() => {
          setCartOpen(true);
          setSearchOpen(false); 
          setSearchResults([]);
          setSearch('');
        }}>
          <FaShoppingCart />
          <span>{cartItems.length}</span>
        </CartIcon>

        <>
          {cartOpen && <CartOverlay onClick={() => setCartOpen(false)} />}
          <CartSidebar className={cartOpen ? "active" : ""}>
            <Cart />
          </CartSidebar>
        </>

        <div className="user-auth" ref={userDropdownRef}>
          {isAuthenticated ? (
            !isTabletOrLess ? (
              <UserDesktop>
                <span>{user?.email}</span>
                <LogoutButton onClick={handleLogout}>Salir</LogoutButton>
              </UserDesktop>
            ) : (
              <UserDropdownMobile>
                <FaUser  className="user-icon" onClick={() => {
                  toggleUserDropdown();
                  setSearchOpen(false); 
                  setSearchResults([]);
                  setSearch('');
                }} />
                <div className={`dropdown-menu ${showUserDropdown ? "active" : ""}`}>
                  <span>{user?.email}</span>
                  <button onClick={handleLogout}>Salir</button>
                </div>
              </UserDropdownMobile>
            )
          ) : (
            <FaUser 
              onClick={() => setLoginOpen(true)}
              style={{ cursor: "pointer", fontSize: "1.5rem", color: "white" }}
            />
          )}
        </div>
      </div>

      <MenuButton onClick={handleMenuButtonClick}>
        <FaBars />
      </MenuButton>
    </NavContainer>

    {loginOpen && <AuthModal onClose={() => setLoginOpen(false)} />}
  </>
);

};

export default Navbar;


