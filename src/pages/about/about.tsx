import { useEffect } from "react";
import "./about.css";
import personalInfo from "../../utils/personal-info";

export default function About() {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const progressValue = bar.getAttribute("aria-valuenow");
      (bar as HTMLElement).style.width = `${progressValue}%`;
    });
  }, []);

  return (
    <section className="about-page">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Sobre mim</h1>
                <p className="mb-0">
                  Sou uma desenvolvedora de software apaixonada por tecnologia,
                  inovação e design centrado no usuário. Sempre buscando
                  aprender e crescer, tenho especial interesse em front-end. Meu
                  objetivo é criar soluções tecnológicas que não apenas resolvam
                  problemas, mas também encantem e impactem positivamente a vida
                  das pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="/home">Home</a>
              </li>
              <li className="current">Sobre</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img
                src="/img/character-about.svg"
                alt="Ilustração de mulher empurrando arquivos em um notebook do tamanho dela, ao seu redor há imagens de engrenagens, e folhas escritas CSS e JS."
                className="img-fluid"
                style={{ paddingTop: "2rem" }}
              />
            </div>
            <div className="col-lg-8 content">
              <h2>
                Desenvolvedora de software &amp; Criadora de conteúdo visual.
              </h2>
              <p className="fst-italic py-3">
                Acredito que "A tecnologia move o mundo" e é por isso que estou
                sempre em busca de novos conhecimentos e desafios.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Nascimento:</strong>{" "}
                      <span>20 de outubro de 1997</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>GitHub:</strong>{" "}
                      <span>
                        <a
                          href={personalInfo.socialMedia.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          github.com/vpaesi
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Celular:</strong> <span>(51) 99196-9824</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Cidade:</strong> <span>Alvorada/RS</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Idade:</strong> <span>27</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Senioridade:</strong> <span>Trainee</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>
                        <a
                          href={personalInfo.socialMedia.email}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          paesivitoria@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Disponível</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Sou gaúcha e tive o privilégio de viver uma infância incrível
                no final dos anos 90 e início de 2000, uma época marcada por
                tantas descobertas e mudanças. Acompanhei o avanço da tecnologia
                no Brasil e me fascino com como ela se tornou parte essencial do
                nosso cotidiano. Hoje, tenho orgulho de fazer parte dessa
                evolução, contribuindo com meu trabalho para os muitos futuros
                promissores que a tecnologia ainda nos reserva.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section" style={{ paddingTop: "0.2rem" }}>
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <div>
            <span>Minhas</span>{" "}
            <span className="description-title">Hard Skills</span>
          </div>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>HTML/CSS</span> <i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>JavaScript/TypeScript</span> <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>Java</span> <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  <span>Criação de conteúdo visual/Canva</span> <i className="val">98%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={98}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>React/Vite</span> <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  <span>Springboot</span> <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="interests" className="interests section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Características</h2>
          <div>
            <span>Eu sou</span>{" "}
            <span className="description-title">interessada em</span>
          </div>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="features-item">
                <i className="bi bi-palette" style={{ color: "#ffbb2c" }}></i>
                <h3>
                  <a
                    href="https://www.instagram.com/pinturaZen"
                    className="stretched-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pintura
                  </a>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="features-item">
                <i className="bi bi-camera" style={{ color: "#5578ff" }}></i>
                <h3>
                  <a
                    href={personalInfo.socialMedia.instagram}
                    className="stretched-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fotografia
                  </a>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="features-item">
                <i className="bi bi-tv" style={{ color: "#e361ff" }}></i>
                <h3>
                  <a
                    href="https://tvtime.com/r/36zZa"
                    className="stretched-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Séries e Filmes
                  </a>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="features-item">
                <i className="bi bi-backpack2" style={{ color: "#47aeff" }}></i>
                <h3>
                  <p className="stretched-link" style={{ margin: 0 }}>
                    Viagens
                  </p>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="features-item">
                <i className="bi bi-mortarboard" style={{ color: "#ffa76e" }}></i>
                <h3>
                  <a
                    href="https://cursos.alura.com.br/user/viehdevitoria"
                    className="stretched-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Estudos
                  </a>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="features-item">
                <i className="bi bi-book" style={{ color: "#11dbcf" }}></i>
                <h3>
                  <a
                    href="https://www.skoob.com.br/perfil/viehdevitoria"
                    className="stretched-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Livros
                  </a>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="features-item">
                <i
                  className="bi bi-gear-wide"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>
                  <p className="stretched-link" style={{ margin: 0 }}>
                    Motociclismo
                  </p>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="features-item">
                <i className="bi bi-dice-5" style={{ color: "#b2904f" }}></i>
                <h3>
                  <p className="stretched-link" style={{ margin: 0 }}>
                    Board Games
                  </p>
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>

    </section>
  );
}
