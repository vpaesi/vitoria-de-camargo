import "./portfolio.css";

export default function Portfolio() {
  return (
    <section className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Portfolio</h1>
                <p className="mb-0">
                  Tendo em média um ano desde que decidi vir pra TI já construi
                  inúmeros projetos através da Alura, da Faculdade e do Programa
                  START DB. No GitHub tenho repositórios da maioria desses
                  projetos, mas aqui, eu gostaria de destacar o meu portfólio
                  anterior, um site fictício que fiz com um colega da START, e
                  um site real que fiz para uma loja de semi joias especializada
                  em patinação artística. Veja abaixo esses projetos que carrego
                  no coração, pois marcam muito o início da minha trajetória
                  como dev.
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
              <li className="current">Portfolio</li>
            </ol>
          </div>
        </nav>
      </div>

      <SectionProjects />
      <SectionStudies />
    </section>
  );
}
function SectionProjects() {
  return (
    <section id="page-section" className="page-section">
      <h3 data-aos="fade-up" data-aos-delay="200">
        <em>Projetos</em>
      </h3>
      <br />
      <div className="container">
        <div
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <img
                  src="/src/assets/img/spinning-joias.png"
                  className="img-fluid"
                  alt="Captura de tela do site Spinning Joias apresentando um catálogo de joias"
                />
                <div className="portfolio-info">
                  <h4>Spinning Joias</h4>
                  <p>
                    Aplicação estilo catálogo para vendas de semi joias especializada em patinação artística.
                  </p>
                  <div className="i-links">
                    <a
                      href="https://spinning-joias.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver site"
                      className="details-link"
                    >
                      Ver site
                      <i className="icone-bi bi bi-eye"></i>
                    </a>
                    <a
                      href="https://github.com/vpaesi/spinning-joias"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositório"
                      className="details-link"
                    >
                      Ver repositório
                      <i className="icone-bi bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <img
                  src="/src/assets/img/primeiro-portfolio.png"
                  className="img-fluid"
                  alt="Captura de tela do meu primeiro portfólio, apresentando uma foto minha e uma breve biografia"
                />
                <div className="portfolio-info">
                  <h4>Meu primeiro portfólio</h4>
                  <p>Meu primeiro portfólio, criado em julho de 2024.</p>
                  <div className="i-links">
                    <a
                      href="https://portfolio-vitoria-de-camargo.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver site"
                      data-gallery="portfolio-gallery-app"
                      className="details-link"
                    >
                      Ver site
                      <i className="icone-bi bi bi-eye"></i>
                    </a>
                    <a
                      href="https://github.com/vpaesi/portfolio-vitoria-de-camargo"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositório"
                      className="details-link"
                    >
                      Ver repositório
                      <i className="icone-bi bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <img
                  src="src/assets/img/repo-ponte-de-geracoes.png"
                  className="img-fluid"
                  alt="Captura de tela do repositório no GitHub do projeto Ponte de Gerações"
                />
                <div className="portfolio-info">
                  <h4>Ponte de Gerações</h4>
                  <p>Aplicação que conecta jovens e idosos por uma causa social. Elaborada em dupla.</p>
                  <div className="i-links">
                    <a
                      href="https://github.com/vpaesi/ponte-de-geracoes"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositório"
                      className="details-link"
                    >
                      Ver repositório
                      <i className="icone-bi bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

function SectionStudies() {
  return (
    <section id="page-section" className="page-section">
      <h3 data-aos="fade-up" data-aos-delay="200">
        <em>Estudos</em>
      </h3>
      <br />
      <div className="container">
        <div
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <img
                  src="/src/assets/img/repo-frontend.png"
                  className="img-fluid"
                  alt="Captura de tela do repositório no GitHub tela projetos de Front-end da Alura"
                />
                <div className="portfolio-info">
                  <h4>Front-end: Alura</h4>
                  <p>
                    Repositório com projetos desenvolvidos durante as
                    formações de Front-end da Alura.
                  </p>
                  <div className="i-links">
                    <a
                      href="https://github.com/vpaesi/alura-front-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositório"
                      className="details-link"
                    >
                      Ver repositório
                      <i className="icone-bi bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item ">
              <div className="portfolio-content h-100">
                <img
                  src="/src/assets/img/repo-backend.png"
                  className="img-fluid"
                  alt="Captura de tela do repositório no GitHub tela projetos de Back-end da Alura"
                />
                <div className="portfolio-info">
                  <h4>Back-end: Alura</h4>
                  <p>
                    Repositório com projetos desenvolvidos durante as
                    formações de Front-end da Alura.
                  </p>
                  <div className="i-links">
                    <a
                      href="https://github.com/vpaesi/alura-back-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositório"
                      className="details-link"
                    >
                      Ver repositório
                      <i className="icone-bi bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-content h-100">
                <img
                  src="/src/assets/img/agencia-viagens.png"
                  className="img-fluid"
                  alt="Captura de tela do site Agência de Turismo, apresentando um carrossel com imagens de locais turísticos do Brasil, abaixo inicia a sessão 'Conheça nossos Pacotes'"
                />
                <div className="portfolio-info">
                  <h4>Agência de turismo</h4>
                  <p>Aplicação fictícia para compra de pacotes de viagens.</p>
                  <div className="i-links">
                    <a
                      href="https://vpaesi.github.io/agencia-turismo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver site"
                      className="details-link"
                    >
                      Ver site
                      <i className="icone-bi bi bi-eye"></i>
                    </a>
                    <a
                      href="https://github.com/vpaesi/agencia-turismo"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositório"
                      className="details-link"
                    >
                      Ver repositório
                      <i className="icone-bi bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
