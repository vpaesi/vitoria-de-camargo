import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
import personalInfo from "../../utils/personal-info";

export default function Header(): JSX.Element {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFamilyOpen, setIsFamilyOpen] = useState(false);
  const [isTrajectoriesOpen, setIsTrajectoriesOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isAboutPlusOpen, setIsAboutPlusOpen] = useState(false);

  const toggleAboutPlusMenu = () => {
    setIsAboutPlusOpen(!isAboutPlusOpen);
  };

  const toggleFamilyMenu = () => {
    setIsFamilyOpen(!isFamilyOpen);
  };

  const toggleTrajectoriesMenu = () => {
    setIsTrajectoriesOpen(!isTrajectoriesOpen);
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
        <li className="dropdown">
          <a
            href="/about-plus"
            className={activeLink.includes("about-plus") ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              toggleAboutPlusMenu();
            }}
          >
            <span>Um pouco mais de mim</span>
            <i
            className={`bi ${isAboutPlusOpen ? "bi-chevron-up" : "bi-chevron-down"} toggle-dropdown`}
            ></i>
          </a>
          {isAboutPlusOpen && (
          <ul>
            <li className="dropdown">
              <a
                href="/family"
                className={activeLink.includes("family") ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFamilyMenu();
                }}
              >
                <span>Família</span>
                <i
                className={`bi ${
                  isFamilyOpen ? "bi-chevron-up" : "bi-chevron-down"
                } toggle-dropdown`}
                ></i>
              </a>
              {isFamilyOpen && (
              <ul>
                <li>
                  <a
                    href="/family#gave"
                    className={activeLink === "/family#gave" ? "active" : ""}
                  >
                    Família que Deus me deu
                  </a>
                </li>
                <li>
                  <a
                    href="/family#made"
                    className={activeLink === "/family#made" ? "active" : ""}
                  >
                    Família que criei
                  </a>
                </li>
              </ul>
              )}
            </li>

            <li>
              <a
                href="/hobbies"
                className={activeLink === "/hobbies" ? "active" : ""}
              >
                Hobbies
              </a>
            </li>

            <li className="dropdown">
              <a
                href="/trajectories"
                className={activeLink.includes("trajectories") ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTrajectoriesMenu();
                }}
              >
                <span>Trajetórias</span>
                <i
                className={`bi ${
                  isTrajectoriesOpen ? "bi-chevron-up" : "bi-chevron-down"
                } toggle-dropdown`}
                ></i>
              </a>
              {isTrajectoriesOpen && (
              <ul>
                <li>
                  <a
                    href="/trajectories#professional"
                    className={
                      activeLink === "/trajectories#professional"
                        ? "active"
                        : ""
                    }
                  >
                    Trajetória Profissional
                  </a>
                </li>
                <li>
                  <a
                    href="/trajectories#academic"
                    className={
                      activeLink === "/trajectories#academic" ? "active" : ""
                    }
                  >
                    Trajetória acadêmica
                  </a>
                </li>
                <li>
                  <a
                    href="/trajectories#academic"
                    className={
                      activeLink === "/trajectories#academic" ? "active" : ""
                    }
                  >
                    Trajetória pessoal
                  </a>
                </li>
              </ul>
              )}
            </li>
          </ul>
          )}
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
          Porfólio de {personalInfo.firstName} {personalInfo.lastName}
        </h1>

        <nav>{navMenu}</nav>
        <i 
        className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"
        }`}
        onClick={toggleMenu}
        ></i>
      </div>
    </header>
  );
}
