import "./contact.css";
import personalInfo, { useAddress } from "../../utils/personal-info";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await emailjs.sendForm(
        "service_kh29eoe",
        "template_wegqk9q",
        e.target as HTMLFormElement,
        "hKf3NrZ6nEb449AM-"
      );
      setSuccessMessage("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMessage("Erro ao enviar mensagem, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main">
      <section id="page-section" className="page-section">
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Contato</h1>
                  <p className="mb-0">
                    Eu estou sempre aberta a críticas, dicas, propostas e trocas
                    de ideias. Não hesite em entrar em contato e isso é uma
                    ordem!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <nav className="breadcrumbs">
            <div className="container">
              <div className="row">
                {/* Links de Contato e Endereço em colunas */}
                <div className="col-md-6">
                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="icon bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Whatsapp</h3>
                      <a href={personalInfo.socialMedia.whats} target="_blank">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i className="icon bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email</h3>
                      <p>
                        <a href={`mailto:${personalInfo.email}`} target="_blank">
                          {personalInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <i className="icon bi bi-share flex-shrink-0"></i>
                    <div>
                      <h3>Redes sociais</h3>
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
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Endereço</h3>
                      <p id="address">{useAddress()}</p>                    
                    </div>                 
                  </div>
                  <div className="mapswrapper">
                        <iframe
                          width="75%"
                          height="160"
                          loading="lazy"
                          allowFullScreen
                          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bairro%20formoza&zoom=15&maptype=roadmap"
                        ></iframe>
                      </div>
                </div>
              </div>
            </div>

            <form
              className="email-form"
              data-aos-delay="600"
              onSubmit={handleSubmit}
            >
              <div className="row gy-4">
                <h3>Envie sua mensagem </h3>
                <div className="col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Assunto"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Carregando...</div>}
                  {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                  )}
                  {successMessage && (
                    <div className="sent-message">{successMessage}</div>
                  )}
                  
                  <button type="submit" disabled={loading}>
                    Enviar email
                  </button>
                </div>
              </div>
            </form>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Contact;
