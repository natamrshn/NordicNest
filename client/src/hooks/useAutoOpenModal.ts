import { useState, useEffect } from "react";

export function useAutoOpenModal(delay: number) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isOpen, setIsOpen };
}
