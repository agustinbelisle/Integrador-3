import { useState, useCallback } from "react";

export const useMenuActive = () => {
  const [activeMenus, setActiveMenus] = useState({});

  const toggleMenu = useCallback((key) => {
    setActiveMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const openMenu = useCallback((key) => {
    setActiveMenus((prev) => ({
      ...prev,
      [key]: true,
    }));
  }, []);

  const closeMenu = useCallback((key) => {
    setActiveMenus((prev) => ({
      ...prev,
      [key]: false,
    }));
  }, []);

  const isMenuActive = useCallback(
    (key) => Boolean(activeMenus[key]),
    [activeMenus]
  );

  const closeAllMenus = useCallback(() => {
    setActiveMenus({});
  }, []);

  return {
    isMenuActive,
    toggleMenu,
    openMenu,
    closeMenu,
    closeAllMenus,
  };
};

