import profile from '../../assets/profile.jpg';

export default function Banner() {
  return (
    <section id="home" className="banner container">
      <div className="banner-content">
        <img src={profile} alt="profile" className="profile-image" />
        <div>
          <h2 className="banner-title">Olá — eu sou <span className="highlight">Vitória</span></h2>
          <p className="banner-description">Analista de QA — testes manuais e automação com foco em qualidade e experiência de usuário.</p>
          <div className="banner-buttons">
            <a className="btn btn-resume" href="#contato">Contato</a>
            <a className="btn btn-connect" href="#projetos">Projetos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
