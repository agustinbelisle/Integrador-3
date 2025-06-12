import { useEffect } from "react";

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Si el click fue dentro del ref, no hacer nada
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
