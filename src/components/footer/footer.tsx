import personalInfo from "../../utils/personal-info";
import "./footes.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">      
        <div className="social-links d-flex justify-content-center">
          <a href={`${personalInfo.socialMedia.github}`} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href={`${personalInfo.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={`${personalInfo.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href={`mailto:${personalInfo.socialMedia.email}`} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>

      <div className="credits-release">
        <hr/>
        <a href="https://storyset.com/" target="_blank" rel="noopener noreferrer">
          Todas as ilustrações do site foram importadas do Storyset
        </a>
        <br />
        <a href={`${personalInfo.socialMedia.github}`} target="_blank" rel="noopener noreferrer">
        Website vitoria-de-camargo.vercel.app released 28/12/2024 - version 1.0.2
        </a>
      </div>

        <div className="copyright">
          <span>Copyright</span>
          <strong className="px-1 sitename">Personal</strong>
          <span>All Rights Reserved</span>
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
    </footer>
  );
};

export default Footer;
