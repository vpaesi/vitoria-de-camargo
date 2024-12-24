import "./footes.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3 className="sitename">
          Portfólio profissional de Vitória de Camargo
        </h3>
        <p>
          Não hesite em entrar em contato e trocar uma ideia, aceito críticas,
          sugestões, dicas e propostas.
        </p>
        <div className="social-links d-flex justify-content-center">
          <a href="https://github.com/vpaesi" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vpaesi/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/viehdevitoria/" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="mailto:paesivitoria@gmail.com" target="_blank">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
