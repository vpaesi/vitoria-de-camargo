export default function Contato(): JSX.Element {
  return (
    <section
      id="contato"
      className="card contato"
      aria-labelledby="contato-title"
    >
      <div className="contato-grid">
        <h2 id="contato-title">Contato</h2>

            <div className="contato-row">
          <address className="contato-col contato-col--center">
            <h3>E-mail</h3>
            <h4>dev.vitoriacamargo@gmail.com</h4>
          </address>
          <div className="contato-col"> 
            <p className="contato-meta">
              Estou aberta para freelancing, projetos, dúvidas ou colaborações.
            </p>
            <div className="contato-address">
              <div className="contato-socials">
                <span>Redes:</span>
                <a href="https://www.linkedin.com/in/vpaesi/" aria-label="LinkedIn" className="contato-social" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/vpaesi" aria-label="GitHub" className="contato-social" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
