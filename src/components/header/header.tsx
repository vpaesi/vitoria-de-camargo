import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
import personalInfo from "../../utils/personal-info";

export default function Header(): JSX.Element {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navMenu = (
    <nav 
      id="navmenu" 
      className={`navmenu ${isMenuOpen ? "mobile-nav-active" : ""}`}
    >
      <ul>
        <li>
          <a
            href="/"
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => handleLinkClick("/about")}
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="/resume"
            className={activeLink === "/resume" ? "active" : ""}
            onClick={() => handleLinkClick("/resume")}
          >
            Currículo
          </a>
        </li>
        <li>
          <a
            href="/portfolio"
            className={activeLink === "/portfolio" ? "active" : ""}
            onClick={() => handleLinkClick("/portfolio")}
          >
            Portfolio
          </a>
        </li>        
        <li>
          <a
            href="/contact"
            className={activeLink === "/contact" ? "active" : ""}
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <h1 className="sitename">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <nav>{navMenu}</nav>
        <i 
          className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`}
          onClick={toggleMenu}
        ></i>
      </div>
    </header>
  );
}
