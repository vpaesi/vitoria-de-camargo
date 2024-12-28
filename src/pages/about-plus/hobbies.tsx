import "./about-plus.css";
import personalInfo from "../../utils/personal-info";

export default function Hobbies() {
  return (
    <section className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Hobbies</h1>
                <p className="mb-0">
                  Por que nem só de trabalho vive o homem, né?
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
                <a href="/about-plus">Um pouco mais sobre mim </a> / Hobbies
              </li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="page-section" className="page-section">
        <h3 data-aos="fade-up" data-aos-delay="200">
          <em>Fotografia</em>
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
                  src="/src/assets/img/character-photography.svg"
                  alt="Ilustração de uma mulher sentada com notebook no colo e ao fundo há quadros que seria as telas do notebook com diversas fotos"
                  width={600}
                />
              </div>
              <aside>
                <h4>Paixão de infância</h4>
                <p>
                  Desde muito pequena as fotografias me remetem alegria. Tirar
                  foto sempre foi divertido pra mim e de vez em quando rolava um
                  momento nostalgia em casa onde a gente corria pros álbuns e
                  ficava revendo foto por foto.
                </p>
                <p>
                  A chegada da minha adolescência foi acompanhada pelas câmeras
                  digitais e o início dos celulares com câmera. No falecido
                  Orkut a coisa mais divertida era ficar olhando as fotos
                  "fakes" dos amigos, e desde cedo eu procurei aprender essas
                  edições, que na época era o máximo, tá? Nós escrivíamos tudo
                  errado de propósito como "a gnt eh fake, e vs?" com uma foto
                  suuuuper photoshopada no Photoscape.
                </p>
                <p>
                  Na época eu não tinha internet para ver como faziam essas
                  edições, então eu aprendi sozinha, na mão. E conforme as
                  edições saiam de moda e chegavam outras, eu ia aprendendo e
                  editando.
                </p>
                <p>
                  Aos 18 tentei dar um passo além: levar esse hobbie para o
                  âmbito profissional. Mas acontece que nessa época a minha
                  fotografia era da natureza, de ambientes e momentos, e não de
                  pessoas. Então durou pouco tempo.
                </p>
                <p>
                  Após essa tentativa frustrada, continuei fotografando e
                  editando. Até que no início de 2024 tente arriscar novamente.
                  Dessa vez mais madura, com mais oportunidade de estudo e uma
                  amiga fotografa que eu acompanhei em um ensaio e tirei várias
                  dúvidas.
                </p>
              </aside>
            </div>

            <div>
              <article className="aside-right">
                <p>
                  Por um tempo deu certo, e continuaria dando certo se fosse
                  isso que eu queria. Trabalhando de verdade com fotografia eu
                  entendi a complexidade que é dirigir um ensaio e isso se
                  tornou um peso e a única parte legal era chegar em casa e
                  editar as fotos. Então eu percebi que o problema não era
                  apenas tirar foto de pessoas, mas sim dirigí-las.
                </p>
                <p>
                  Então eu desisti de vez da fotografia profissional e voltei a
                  fotografar por hobby. E é assim que eu me sinto bem.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="page-section" className="page-section">
        <h3 data-aos="fade-up" data-aos-delay="200">
          <em>Pintura antiestresse</em>
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
                  src="/src/assets/img/character-paint.svg"
                  alt="Ilustração de uma paleta de cor, tintas e pincéis"
                  width={600}
                />
              </div>
              <aside>
                <h4>Paixão de adolescência</h4>
                <p>Vocês lembram do boom dos livros de pintura antiestresse?</p>
                <p>
                  Que momento! O ano era 2013, eu tinha 16 anos, estava em um
                  momento muuuuito conturbado da minha vida e surgia esse livro.
                  Eu, que sempre amei pintar, ganhei da minha mãe o meu primeiro
                  livro de pintura.
                </p>
                <p>
                  Eu pintava todos os dias e esse momento era só meu, não
                  existia nada que tirasse meu foco. E ao mesmo tempo em que eu
                  focava em pintar, também focava em mim, nos meus pensamentos.
                  E dessa forma, a pintura trouxe o maior benefício que poderia
                  trazer naquele momento: o insight de terminar o relacionamento
                  mais abusivo que tive.
                </p>
                <p>
                  Eu simplesmente parei de pintar e disse "Quero terminar",
                  peguei minhas coisas e fui pra parada. Convicta. E
                  possivemente essa foi a melhor decisão da minha vida.
                </p>
                <p>
                  Hoje, mais de 10 anos depois disso, eu ainda sou apaixonada
                  por pintar e pelos livros antiestresse. Já abandonei muitos
                  desses livros pelo caminho, mas nos últimos anos eu percebi o
                  benefício da pintura na minha vida e comecei a me dedicar mais
                  ao hobby. O meu primeiro e único livro de pintura completo
                  demorou 6 anos para eu finalizar, atualmente estou na
                  finaleira do segundo e já tenho mais dois na fila.
                </p>
                <p>
                  Em 2024 decidi me aventurar, sair da zona de conforto. Comecei
                  a testar técnicas e materiais diferentes, e tem sido uma
                  jornada muito legal. Antes eu usava apenas lápis de cor,
                  depois inseri canetinhas marcadoras, e agora também uso tinta,
                  giz, algodão, cotonete e brush pens.
                </p>
                <p>
                  Esse hobbie está presente super ativo na minha vida e me traz
                  uma paz que hobbie nenhum consegue.
                </p>
              </aside>

              <article></article>
            </div>
          </div>
        </div>
      </section>

      <section id="page-section" className="page-section">
        <h3 data-aos="fade-up" data-aos-delay="200">
          <em>Séries</em>
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
                  src="/src/assets/img/character-series.svg"
                  alt="Ilustração de uma mulher sentada no chão e escolhendo uma fita VHS para assistir"
                  width={600}
                />
              </div>
              <aside>
                <p>
                  A primeira série que eu assisti foi House. Eu era tão fã, mas
                  tão fã, que meu apelido no colégio era do shipp do House e
                  Cuddy: Huddy. Eu devo ter assistido no mínimo 7 vezes até a
                  série acabar em 2012. E House foi a porta de entrada para o
                  mundo das séries. Por mais que eu já visse séries como Friends
                  ou Drake e Josh, eu nunca tive pensado em assistir uma do
                  início ao fim, episódio por episódio, pois quando se é refém
                  da programação das emissoras, ainda mais da tv aberta, isso
                  praticamente não é uma possibilidade.{" "}
                </p>
                <p>
                  Em 2012 eu comecei assistir séries loucamente, ganhei meu
                  primeiro box: de Supernatural. E daí segui, fui vendo todas as
                  séries que estavam no hype na época, até que eu acabei todas
                  que me chamavam atenção e parti para as séries antigas, que já
                  tinham acabo. E tô nessa até hoje.{" "}
                </p>
                <p>
                  Sem dúvida esse hobby é o que mais me consome tempo, mas
                  também é o que me faz sentir muitos sentimentos diferentes.
                  Atualmente eu tenho mais de 18 meses de tempo assistindo série
                  e quase 21.500 episódios concluídos (tudo contabilizado pelo{" "}
                  <a
                    href={personalInfo.socialMedia.tvTime}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TV Time
                  </a>
                  ).
                </p>
                <p>
                  Hoje em dia, escolher uma série pra assistir é a mesma coisa
                  que escolher uma tatuagem pra fazer: Eu já tenho tantas, essa
                  será só mais uma. Mas de vez em quando essa só mais uma
                  consegue me impactar profundamente. A última que me fez ter
                  uma crise de personalidade foi Arcane, inclusive fui
                  totalmente influenciada pela VI para pintar o cabelo de rosa e
                  começar a jogar a League of Legends (LOL), 🤣.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section id="page-section" className="page-section">
        <h3 data-aos="fade-up" data-aos-delay="200">
          <em>Motociclismo</em>
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
                  src="/src/assets/img/character-moto.svg"
                  alt="Ilustração de um homem montado em uma moto custom e outros dois homem admirando ela"
                  width={600}
                />
              </div>
              <aside>
                <h4>Um sonho de infância</h4>
                <p>
                  Eu nunca quis dirigir carro e por isso só tenho CNH A. Não sei
                  da onde surgiu a vontade de dirigir moto, talvez de ver meu
                  pai andando, talvez de ver personagens badass em filmes que
                  pilotavam moto... Não sei, mas desde pequena eu sabia que
                  teria uma mota.A primeira série que eu assisti foi House. Eu
                  era tão fã, mas{" "}
                </p>
                <p>
                  Quando eu era bem pequena eu tive uma motoca e aos 6 anos
                  ganhei minha primeira bicicleta. Ela era vermelha vinho
                  brilhoso e minha mãe colou uns adesivos do Ursinho Pooh... Eu
                  amava aquela bicileta e hoje a minha moto é da mesma cor (será
                  que eu devo colar adesivos do Ursinho Pooh?).{" "}
                </p>
                <p>
                  Em 2022 eu tive um acidente feio, eu não tive ferimentos
                  graves mas a moto deu perda total. Era a primeira moto que eu
                  tive, uma biz vermelha sangue. Achei que nunca mais teria uma
                  moto e que havia perdido aquilo que pilotar moto significa pra
                  mim: independência.{" "}
                </p>
                <p>
                  Felizmente tive o apoio da minha vó e do meu marido e comprei
                  a minha moto atual, a que talvez mereça adesivos do Ursinho
                  Pooh.{" "}
                </p>
                <p>
                  Além de moto ser um sonho de infância e o símbolo de
                  independência pra mim, moto foi a primeira coisa que me uniu
                  ao meu marido. Nossas primeiras conversas foram sobre moto,
                  ele também nunca quis dirigir carro, e desde que começamos nós
                  dois melhoramos de moto. Hoje eu tenho uma Chopper 150cc e ele
                  é Harleyro com uma Heritage 1600cc.{" "}
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section id="page-section" className="page-section">
        <h3 data-aos="fade-up" data-aos-delay="200">
          <em>Estudos</em>
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
                  src="/src/assets/img/character-studies.svg"
                  alt="Ilustração de uma mulher estudando online"
                  width={600}
                />
              </div>
              <aside>
                <p>
                  Pra ser sincera, eu não sei até hoje como nunca rodei no
                  colégio. Alguma coisa eu devo ter feito certo, mas as notas
                  vermelhas que já tive são incontáveis.{" "}
                </p>
                <p>
                  Como comentei na seção sobre{" "}
                  <a
                    href={"/family#gave"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Família
                  </a>{" "}
                  eu não queria entrar na faculdade, minha vó é que me
                  incentivou. Mas desde que iniciei a facul em 2017 não parei
                  mais de estudar. Já estudei de tudo um pouco, na página de{" "}
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer">
                    Currículo
                  </a>{" "}
                  listei alguns cursos que fiz.{" "}
                </p>
                <p>
                  Atualmente estudo programação, tanto fazendo cursos quanto
                  testando o que aprendi em projetos pessoais. E é incrível como
                  eu me sinto realizada fazendo isso. Não me imagino fazendo
                  outra coisa daqui pra frente.{" "}
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
