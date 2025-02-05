import { useEffect, useState } from "react";
import "./Header.scss";
import NavIcons from "./NavIcons/NavIcons";
import NavLinks from "./NavLinks/NavLinks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const themeStyle = isDark || scrolled ? "light-header" : "dark-header";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={themeStyle}>
      <NavLinks />
      Logo
      <NavIcons />
    </div>
  );
};

export default Header;
