import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./header.css";

export default function Header(): JSX.Element {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/home" className="logo d-flex align-items-center">
          <h1 className="sitename">Portfólio Profissional</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="/home"
                className={activeLink === "/home" ? "active" : ""}
                onClick={() => handleLinkClick("/home")}
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
              <a href="#about-plus">
                <span>Um pouco mais de mim</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li className="dropdown">
                  <a href="#family">
                    <span>Família</span>
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#family-giving">Família que Deus me deu</a>
                    </li>
                    <li>
                      <a href="#family-made">Família que criei</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#lgbt">Minha vida como LGBTQIAPN+</a>
                </li>
                <li>
                  <a href="#hobbies">Hobbies</a>
                </li>
                <li className="dropdown">
                  <a href="#trajectories">
                    <span>Trajetórias</span>
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#professional-trajectory">
                        Trajetória Profissional
                      </a>
                    </li>
                    <li>
                      <a href="#academix-trajectory">Trajetória acadêmica</a>
                    </li>
                    <li>
                      <a href="#personal-trajectory">Trajetória pessoal</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/contact"
                className={activeLink === "/contact" ? "active" : ""}
                onClick={() => handleLinkClick("/contact")}
              >
                Contato
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
}
