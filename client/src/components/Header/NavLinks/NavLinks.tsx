import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Link } from "react-router-dom";
import "./NavLink.scss";

const NavLinks: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const themeStyle = isDark || scrolled ? "light-theme" : "dark-theme";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Порог прокрутки
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-links ${themeStyle}`}>
      <Link to="/shop">Shop</Link>
      <Link to="/about-us">About us</Link>
      <Link to="/search">Search</Link>
    </div>
  );
};

export default NavLinks;
