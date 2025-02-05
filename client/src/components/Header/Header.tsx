import { useEffect, useState } from "react";
import "./Header.scss";
import NavIcons from "./NavIcons/NavIcons";
import NavLinks from "./NavLinks/NavLinks";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <NavLinks />
      Logo
      <NavIcons />
    </div>
  );
};

export default Header;
