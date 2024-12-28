import personalInfo from "../../utils/personal-info";

export default function Trajectories() {
  return (
    <section className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Trajetórias</h1>
                <p className="mb-0">
                  Minha vida profissinal, acadêmica e pessoal andam juntas há
                  muito tempo, mas vou tentar separar um pouco para vocês me
                  conhecerem mais a pessoa por trás da profissional.
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
              <li className="current">
                <a href="/about-plus">Um pouco mais sobre mim </a> / Trajetórias
              </li>
            </ol>
          </div>
        </nav>
      </div>

      <div id="professional">
        <section id="page-section" className="page-section">
          <h3 data-aos="fade-up" data-aos-delay="200">
            <em>Trajetória Profissional</em>
          </h3>
          <br />
          <div className="container">
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="container-hobby-about">
                <div className="hobby-about">
                  <img
                    src="/src/assets/img/character-professional.svg"
                    alt="Ilustração de uma mulher sentada com notebook no colo se comunicado com outros 3 colegas de forma remota"
                    width={600}
                  />
                </div>
                <aside>
                  <h4>Primeiro emprego</h4>
                  <p>
                    Entrei no mercado de trabalho com 15 anos como menor
                    aprendiz em uma transportadora. Mais do que qualquer
                    atividade administrativa, eu aprendi a trabalhar. Aprendi
                    como funciona o ambiente de trabalho, como são as relações
                    com colegas e chefes (e eu tive uma chefe incrível que tenho
                    contato até hoje). Fiquei dois anos nessa empresa, o tempo
                    completo do contrato e finalizei o curso de Logística pelo
                    <a
                      href="https://cieers.org.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      CIEE
                    </a>
                    .
                  </p>
                  <h4>Hiato e primeiro estágio</h4>
                  <p>
                    Depois de sair da transportadora, em 2015, fiquei um bom
                    tempo parada, tentando descobrir o que deveria fazer na
                    sequência. Tentei trabalhar de caixa em mercado, de
                    atendente em uma lancheria, mas nada me agradava. Até que em
                    2017, no segundo semestre da minha faculdade em
                    Biblioteconomia, consegui meu primeiro estágio na área. Foi
                    um estágio ótimo em uma biblioteca escolar, onde eu aprendi
                    muito sobre a organização de acervos e atendimento à
                    comunidade escolar.
                  </p>
                  <p>
                    Entre 2017 e 2020 eu tive outros estágios, consegui
                    trabalhar em diferentes tipos de bibliotecas (escolar,
                    pública, universitária e especializada), com diferentes
                    públicos e diferentes acervos. Eu me formei 14/03/2020 e o
                    lockdown da pandemia ocorreu 17/03/2020 e obviamente eu não
                    consegui emprego na área, que já tem vagas escassas e na
                    pandemia piorou.
                  </p>
                </aside>
              </div>

              <div>
                <article className="aside-right">
                  <h4>Pandemia</h4>
                  <p>
                    De março de 2020 até outubro de 2021 eu fiz o que dava pra
                    complementar a renda. Trabalhei como entregadora de comida e
                    em uma livraria de shopping. Em outubro de 2021 eu retornei
                    para a empresa que fiz meu último estágio em biblio, mas não
                    mais na escola e sim no setor de concursos.
                  </p>
                  <p>
                    Trabalhei nessa empresa até outubro de 2023 e essa
                    experiência foi a mais significativa pra mim pois vivi muito
                    mais que eu esperava de um emprego, tanto de modo positivo
                    quanto negativo. Eu viajei muito, aprendi muito, tive
                    clientes incríveis (e outros nem tanto), tive colegas
                    parceiros (outros nem de longe) e aprendi também sobre mim
                    mesma, tive Burnout por trabalhar de segunda à segunda,
                    muitas vezes sem intervalo e das 9h às 23h30, ou chegando de
                    viagem de aplicação de concurso as 5h e batendo o ponto as
                    9h. Lá eu vivi algo que simplesmente parecia surreal:
                    assédio sexual. Tentei lidar com isso com apoio de terapia e
                    do meu marido, pq o que a empresa fez ao ficar sabendo do
                    ocorrido foi me colocar numa sala e apontar dedos, me
                    culpando. Depois de um ano eu botei minha saúde mental em
                    primeiro lugar e saí da empresa.
                  </p>
                  <h4>Transição de Carreira para a TI</h4>
                  <p>
                    Depois que saí do serivço em 2023 fiquei sem saber o que
                    fazer. Apesar de eu ser uma baita profissional o minha
                    experiência era muito nichada, e foi aí que comecei a
                    estudar programação. No meio do caminho deixei a TI um pouco
                    de lado quando peguei emprego numa das minhas áreas que é a
                    Qualidade, mas por n motivos saí da empresa e decidi focar
                    100% em entrar pra uma facul de ADS e conseguir um estágio.
                  </p>
                  <p>
                    E foi a melhor decisão profissional que eu já tomei. Hoje
                    sou estagiária de desenvolvimento de software em uma empresa
                    incrível e de forma remota. Aprendo horrores todos os dias e
                    passo horas estudando por hobbie.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="academic">
        <section id="page-section" className="page-section">
          <h3 data-aos="fade-up" data-aos-delay="200">
            <em>Trajetória acadêmica</em>
          </h3>
          <br />
          <div className="container">
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="container-hobby-about-inverted">
                <div className="hobby-about-inverted">
                  <img
                    src="/src/assets/img/character-studies.svg"
                    alt="Ilustração de uma mulher estudando online"
                    width={600}
                  />
                </div>
                <aside>
                  <h4>Bacharelado em Biblioteconomia</h4>
                  <p>
                    Iniciei minha primeira faculdade em 2017 no curso de
                    Biblioteconomia no formato EAD na
                    <a
                      href="https://claretiano.edu.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Claretiano
                    </a>
                    . Foram 3 anos de muito aprendizado e muito satisfatóriso.
                    Até hoje eu classifico meu acervo pessoal por hobbie. Tive
                    bibliotecárias que me ensinaram muito durante os estágios e
                    me formei com muita alegria, orgulho e vontade de trabalhar
                    na área (o que vocês viram que não deu certo se leram a
                    seção da minha{" "}
                    <a
                      href="#professional"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Trajetória Profissional
                    </a>
                    ).
                  </p>
                  <h4>Pós em Gestão da Qualidade</h4>
                  <p>
                    Enquanto eu estava na empresa de concursos eu comecei a me
                    interessar muito pela qualidade, visto que a organização é
                    certificada pelo ISO 9001. Trabalhando lá eu tive a
                    oportunidade de me formar como Auditora Interna e tive
                    incentivo da gerência para fazer a pós em Gestão da
                    Qualidade. Mesmo não trabalhando na área nessa época, eu me
                    envolvia ativamente em atividades do setor de Qualidade,
                    fazendo Instruções de Trabalho (IT), Formulários de
                    preenchimento (FP e FP-e), incentivando diariamente os 5S,
                    além de ser membro ativo do Comitê dos Multiplicadores, que
                    foi formado com intuito e objetivo de disseminar a cultura
                    da qualidade na empresa e apoiar os setores de RH e
                    Marketing. O curso da pós durou 1 semestre e foi EAD pela
                    <a
                      href="https://inscricoes.unicesumar.edu.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      UniCesumar
                    </a>
                  </p>
                </aside>
              </div>
              <div>
                <article className="aside-right">
                  <h4>Tecnólogo em Análise e Desenvolvimento de Sistemas</h4>
                  <p>
                    Em 2024 investi todos os esforços para iniciar minha segunda
                    graduação e migrar de área. Iniciei ADS em junho de 2024 no
                    formato EAD pela
                    <a
                      href="https://descomplica.com.br/faculdade/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Descomplica
                    </a>
                    . Até o momento estou gostando bastante do curso e do método
                    de ensino da faculdade (o melhor que já tive até o momento).
                    Essa graduação já tornou possível a transição de carreira
                    que eu tanto almejava e sei que ainda vou aprender muito
                    mais.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="personal">
        <section id="page-section" className="page-section">
          <h3 data-aos="fade-up" data-aos-delay="200">
            <em>Trajetória Pessoal</em>
          </h3>
          <br />
          <div className="container">
            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="container-hobby-about">
                <div className="hobby-about">
                  <img
                    src="/src/assets/img/character-personal.svg"
                    alt="Ilustração de uma mulher com braços cruzado e com rosto confiante. Ao fundo pisca a imagem dessa mesma mulher mostrando o muque dos braços, representando força"
                    width={600}
                  />
                </div>
                <aside>
                  <p>
                    Eu poderia tranquilamente escrever um livro de tudo o que já
                    vivi, mas vou tentar resumir um pouco. Bom, sobre a minha
                    família vou me abster pois já falei um pouco na seção de
                    <a href="/family" target="_blank" rel="noopener noreferrer"> Família</a>.{" "}
                  </p>
                  <h4>Infância</h4>
                  <p>
                    A minha infância foi tranquila, um pouco solitária mas não
                    posso reclamar... Tá, eu posso reclamar sim, sofri bullying
                    desde a creche e em todos os colégios que já estudei (e eu
                    estudei em 8 colégios!). Minha família se mudava
                    praticamente a cada 2 anos então eu nunca consegui criar
                    raízes.{" "}
                  </p>
                  <h4>Adolescência</h4>
                  <p>
                    Já a minha adolescência... foi o completo oposto de
                    tranquila. Aos 13 anos me descobri Bisexual, aos 16 descobri
                    que eu não me identificava como mulher (e fui descobrir que
                    era não binária só com 23 anos), ainda aos 16 me envolvi com
                    muita gente errada e me arrependo de muita coisa que fiz,
                    principalmente as que magoaram minha família (em especial a
                    minha irmã que era muito pequeninha para enteder qualquer
                    coisa, e eu precisei conquistar a confiança dela depois que
                    "retornei a mim"). Entre os 15 e 16 anos fui diagnosticada
                    com depressão profunda e demorei anos e mais anos para
                    aprender a lidar com ela e pra entender que preciso de
                    acompanhamento psiquiatrico.
                  </p>

                  <h4>Vida adulta</h4>
                  <p>
                    Com que idade dá pra considerar que a gente sai da
                    adolescência? Porque eu ainda tenho medo de engravidar na
                    adolescência aos {personalInfo.age} anos. Percebi que sou
                    adulta não faz muito tempo, acho que quando me vi estável
                    pela primeira vez, e isso só aconteceu depois de eu vir
                    morar com meu marido.
                  </p>
                </aside>
              </div>
              <div>
                <article className="aside-right">
                  <p>
                    O que eu posso dizer é que já passei poucas e boas, mas as realmente boas que passei são
                    verdadeiramente muito boas e me dão motivo para acordar e sorrir
                    todos os dias. Eu vi meu irmão e minha irmã nascerem, eu vi
                    minha mãe renascer, vi minha mãe virar concursada, meu irmão
                    melhorar da visão, minha irmã se tornar um exemplo (mesmo
                    com{" "}
                    {new Date().getFullYear() -
                      new Date("2012-07-22").getFullYear()}{" "}
                    anos), vi o amor da minha vida roubar meu coração como quem
                    não quer nada, eu me formei, casei, me conheci e o mais
                    importante: deixo sempre um momento reservado para gargalhar
                    até a barriga doer.
                  </p>
                  <p>
                    Como diz a Demi Lovato (minha maior ídola):{" "}
                    <a
                      href="https://www.youtube.com/watch?v=UFeJkfB4xKo"
                      target="_blank"
                      rel="noopener noreferrer">
                      "I'm survivor in more ways than you know"
                    </a> e {" "}
                    <a
                      href="https://www.youtube.com/watch?v=ZZhwUqzeZpY"
                      target="_blank"
                      rel="noopener noreferrer">
                      "I guess I'm mastering the art of starting over"
                    </a>
                    .
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
