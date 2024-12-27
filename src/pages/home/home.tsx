import { useEffect } from "react";
import Typed from "typed.js";
import "./home.css";
import personalInfo from "../../utils/personal-info";

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: [
        " Desenvolvedora de software",
        " Criadora de Conteúdo Visual",
        " Estudante de ADS",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true, 
      });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        <img
          src="/src/assets/img/character-home.svg"
          alt="Ilustração de mulher com um notebook no colo, ao seu redor há um robo, um foguete e outras referências à tecnologia e inovação"
          width="600"
          data-aos="fade-in"
        />
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h2>{personalInfo.firstName} {personalInfo.lastName}</h2>
          <p>
            Eu sou{' '}
            <span className="typed"></span>
            <span className="typed-cursor typed-cursor--blink"></span>
          </p>
          <div className="social-links">
            <a href={personalInfo.socialMedia.github} target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a href={personalInfo.socialMedia.linkedin} target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={personalInfo.socialMedia.instagram} target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
            <a href={personalInfo.socialMedia.email} target="_blank">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
