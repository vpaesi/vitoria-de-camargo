import Dropdown from "../../utils/dropdown-props";
import personalInfo from "../../utils/personal-info";

export default function Resume() {
  return (
    <section className="resume-page">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Resumo</h1>
                <p className="mb-0">
                  Desde a adolescência o front-end me chama a atenção e hoje
                  tenho essa área da programação como foco de estudo. Gosto da
                  ideia de fazer parte de uma equipe que pensa no público alvo,
                  tornando sites uma interface dinâmica, intuitiva e acessível.
                  Sou uma profissional dedicada e priorizo a experiência do
                  usuário em minhas aplicações. Tenho ótimo senso de prioridade,
                  foco na otimização do tempo, organização e proatividade, além
                  de estar em constante desenvolvimento de minhas hard e soft
                  skills. As ferramentas que mais tenho afinidade são{" "}
                  <b>
                    HTML, CSS, Javascript, TypeScript, React Vite, Java e
                    Springboot
                  </b>
                  .
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
              <li className="current">Currículo</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="resume" className="resume section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Resumo</h3>

              <div className="resume-item pb-0">
                <h4>{personalInfo.fullName}</h4>
                <p>
                  <em>
                    <b>Desenvolvedora de software</b> fullstack com maior
                    familiaridade com front-end, estudante de{" "}
                    <b>Análise e Desenvolvimento de Sistemas</b> e Freelancer
                    como <b>Criadora de conteúdo visual</b>.
                  </em>
                </p>
                <ul>
                  <li>{personalInfo.city}</li>
                  <li>{personalInfo.phone}</li>
                  <li>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="d6b7babfb5b3f8b4b7a4bdbab3af96b3aeb7bba6bab3f8b5b9bb"
                    >
                      {personalInfo.email}
                    </a>
                  </li>
                </ul>
              </div>

              <br />
              <h3 className="resume-title">Formação acadêmica</h3>

              <div className="resume-item">
                <h4>Análise e Desenvolvimento de Sistemas</h4>
                <h5>2024 - 2027</h5>
                <p>
                  <em>Universidade Descomplica</em>
                </p>
                <Dropdown
                  title="saiba mais sobre essa formação "
                  content={[
                    "Desenvolvimento FrontEnd",
                    "Desenvolvimento Dinâmico",
                    "Experiência do Usuário",
                    "Empreendedorismo e Criação de Novos Negócios",
                    "Lógica de Programação",
                    "Design de Software",
                    "Programação I",
                    "Estruturas de Dados para Sistemas Inteligentes",
                    "Desenvolvimento de Aplicações de Banco de Dados",
                    "Prática Integradora",
                    "Tecnologias Disruptivas",
                  ]}
                />
              </div>
              <br />
              <div className="resume-item">
                <h4>Pós Graduação em Gestão da Qualidade</h4>
                <h5>2023</h5>
                <p>
                  <em>Universidade Cesumar</em>
                </p>
                <Dropdown
                  title="saiba mais sobre essa formação "
                  content={[
                    "Gestão da Qualidade e Produtividade",
                    "Gerenciamento de Processos de Negócios",
                    "Métodos e Ferramentas da Qualidade",
                    "Garantia da Qualidade e Certificações",
                    "Planejamento Estratégico e Participação",
                    "Gestão de Custos",
                    "Gerenciamento de Projetos",
                    "Gestão Ambiental na Empresa e Sustentabilidade",
                    "Seis Sigma",
                  ]}
                />
              </div>
              <br />
              <div className="resume-item">
                <h4>Bacharelado em Biblioteconomia</h4>
                <h5>2017 - 2020</h5>
                <p>
                  <em>Universidade Claretiano</em>
                </p>
                <Dropdown
                  title="saiba mais sobre essa formação "
                  content={[
                    "Administração",
                    "Antropologia, Ética e Cultura",
                    "Estudos Literários e Linguísticos Aplicados à Biblioteconomia",
                    "Pesquisa Bibliográfica e Normalização",
                    "Comunicação e Linguagem",
                    "Fontes de Informação e Competência Informacional",
                    "Fundamentos da Educação",
                    "Introdução à Biblioteconomia",
                    "Ação Cultural: Projetos Culturais e Atuação do Bibliotecário",
                    "Estudos de Usuários",
                    "Introdução à Biblioterapia",
                    "Prática Profissional: Representação Descritiva: Catalogação",
                    "Representação Descritiva: Catalogação",
                    "Linguagens Documentárias",
                    "Planejamento de Unidades de Informação",
                    "Prática Profissional: Automação e informatização em Unidade de Informação",
                    "Prática Profissional: Linguagens documetárias",
                    "Serviços de Referência e Desenvolvimento de Coleções",
                    "Arquitetura da Informação e Usabilidade",
                    "Biblioteca Escolar",
                    "Estágio Curricular Supervisionado",
                    "Preservação, Conservação de Documentos e Tratamento de Obras Raras",
                    "Relações Étnico-Raciais e Direitos Humanos",
                  ]}
                />
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Experiências profissionais</h3>
              <div className="resume-item">
                <h4>Desenvolvedora de software</h4>
                <p>
                  <em>Estagiária</em>
                </p>
                <h5>10/2024 - atualmente</h5>
                <p>
                  <em>DB Server</em>
                </p>
                <ul>
                  <li>responsabilidade</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Criadora de conteúdo visual</h4>
                <p>
                  <em>Freelancer</em>
                </p>
                <h5>10/2023 - atualmente</h5>
                <p>
                  <em>Remoto</em>
                </p>
                <ul>
                  <li>responsabilidade</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Assistente de Qualidade</h4>
                <h5>04/2024 - 08/2024</h5>
                <p>
                  <em>Coman Polímeros</em>
                </p>
                <ul>
                  <li>
                    Controle de não conformidades, desvios da qualidade,
                    oportunidades de melhoria e documentação controlada.
                  </li>
                  <li>
                    {" "}
                    Elaboração de planilhas, procedimentos padrões, instruções
                    de trabalhos, registros gerais, informativos e formulários
                    de preenchimento.
                  </li>
                  <li>
                    Realização de treinamentos com as equipes de Produção.
                  </li>
                  <li>
                    {" "}
                    Conscientização da importância do Sistema de Gestão
                    Integrado (SGI) e demais atividades da área.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Líder de Processos</h4>
                <h5>04/2023 - 10/2023</h5>
                <p>
                  <em>
                    Fundação Universidade Empresa de Tecnologia e Ciências
                  </em>
                </p>
                <ul>
                  <li>Responsável pela equipe de diagramação documental.</li>
                  <li>
                    Análise e tratamento de documentos sigilosos para aplicação
                    de concursos e processos seletivos
                  </li>
                  <li>Manipulação e elaboração de planilhas</li>
                  <li>Controle de KPI e conhecimento em OKR</li>
                  <li>Controle de informação documentada conforme ISO 9001</li>
                  <li>Realização de procedimentos pré-prelo.</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Líder de Projetos</h4>
                <h5>10/2021 - 04/2023</h5>
                <p>
                  <em>
                    Fundação Universidade Empresa de Tecnologia e Ciências
                  </em>
                </p>
                <ul>
                  <li>Responsável por projetos de processos seletivos</li>
                  <li>
                    Envolvimento com alta complexidade de processos sigilosos
                  </li>
                  <li>Captação de briefing junto ao cliente</li>
                  <li>Criação de cronograma</li>
                  <li>Elaboração de editais e toda a logística de execução</li>
                  <li>
                    Análise de legislação vigente, contratos, propostas,
                    documentações pessoais, entre outros.
                  </li>
                  <li> Manipulação de planilhas</li>
                  <li>Registro de KPI </li>
                  <li>
                    Acompanhamento de projetos garantindo o cumprimento dos
                    prazos e requisitos.
                  </li>
                  <li>
                    Captura de oportunidades de melhoria a todo momento visando
                    entregar um projeto alinhado com os objetivos do cliente e a
                    equipe.
                  </li>
                  <li>
                    {" "}
                    Treinamento e gerenciamento de equipes de apoio para
                    aplicação de concursos.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Assistente de Loja</h4>
                <h5>04/2021 - 06/2021</h5>
                <p>
                  <em>Livraria Leitura</em>
                </p>
                <ul>
                  <li>
                    Responsável pela organização da inauguração da loja.
                    Organização e inclusão em sistema de obras dos setores de
                    administração, economia, política, sociologia, filosofia,
                    espiritualidade e religião. Vendas e atendimento ao público.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Auxiliar de Biblioteca</h4>
                <h5>04/2019 - 01/2020</h5>
                <p>
                  <em>
                    Fundação Universidade Empresa de Tecnologia e Ciências
                  </em>
                </p>
                <ul>
                  <li>
                    Responsável pelo processamento técnico e catalogação de
                    materiais, atendimento aos usuários (público 18 à +60), SRI,
                    suporte e orientação para pesquisas e trabalhos nas normas
                    da ABNT, organização do acervo (técnicos em ADM, TI, TST,
                    enfermagem e qualidade, e, romance), criação de designs para
                    divulgação do acervo e serviços, gerenciamento de rede
                    social, cotação de livros e demais materiais para a
                    biblioteca, Digitalização, impressão e cópia de materiais.
                    Vivência com CDU e o Software Gnuteca.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Estagiária de Biblioteca</h4>
                <h5>06/2018 - 04/2019</h5>
                <p>
                  <em>
                    Prefeitura Municipal de Porto Alegre: Arquivo Histórico de
                    Porto Alegre Moysés Vellinho
                  </em>
                </p>
                <ul>
                  <li>
                    Responsável pelo processamento técnico e catalogação de
                    materiais, atendimento aos usuários (público de
                    pesquisadores), SRI, suporte e orientação para pesquisas e
                    organização do acervo (incluindo acervo de obras raras).
                    Vivência com CDU e o Software Pergamum.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Estagiária de Biblioteca</h4>
                <h5>02/2018 - 05/2018</h5>
                <p>
                  <em>Ftec/IBGEN</em>
                </p>
                <ul>
                  <li>
                    Leitura de estantes, etiquetação de livros, atendimento aos
                    usuários (público 18 à +60), SRI, suporte e orientação para
                    pesquisas e organização de acervo. Vivência com CDU e o
                    Software TOTVS.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Estagiária de Biblioteca</h4>
                <h5>08/2017 - 12/2017</h5>
                <p>
                  <em>Colégio Monteiro Lobato</em>
                </p>
                <ul>
                  <li>
                    Leitura de estantes, etiquetação de livros, atendimento aos
                    usuários (público maternal e fundamental I e II), SRI e
                    organização de acervo. Vivência com CDU e o Software Sophia.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Menos aprendiz</h4>
                <h5>01/2013 - 01/2015</h5>
                <p>
                  <em>Jamef Transportes</em>
                </p>
                <ul>
                  <li>
                    Conferência, arquivamento e maloteamento de documentos.
                    Inclusão de dados em planilhas para KPI, monitoramento da
                    qualidade de serviços prestados pelo setor. Cadastro de
                    motoristas/veículos na Apisul e na ANTT. Contato com
                    agentes/motoristas em caso de documentos pendentes ou
                    incorretos. Vivência com software Oracle.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
