import { Container, Card, Header } from './styles';

import disneyClone from '../../assets/images/projects/disney-clone.png';
import jstack from '../../assets/images/projects/jstack.png';
import mycontacts from '../../assets/images/projects/mycontacts.png';

import emojiProjects from '../../assets/images/emoji-hi.png';
import externalLink from '../../assets/images/icons/exit-top-right.png';

export default function Projects() {
  return (
    <Container id="projetos">
      <div className="projects_title">
        <h2>Projetos que fiz.</h2>
        <img src={emojiProjects} alt="emoji" />
      </div>
      <div className="projects_cards_container">
        <Card className="project_card">
          <img src={jstack} alt="" />
          <div className="infos_layer">
            <Header>
              <h4>Jstack</h4>
              <span className="arrow" />
            </Header>
            <div className="infos_layer_content">
              <p>
                Este é um curso Full-Stack do Mateus Silva, conhecido como Jstack, voltado para a linguagem Javascript. Curso completo de front-end com React e tudo sobre hooks, class components e como criar páginas com react do zero usando tudo isso e mexendo com os estados dos componentes. Também aprendi muito sobre back-end usando Node.js com a biblioteca Express criando uma API que faz um CRUD completo com validações e outras características do clean code e clean architecture.
              </p>
            </div>
            <div className="infos_layer_content_tags">
              <span className="tag">React.js</span>
              <span className="tag">Express</span>
              <span className="tag">Node.js</span>
              <span className="tag">Styled-Components</span>
              <span className="tag">Clean Code</span>
              <span className="tag">Rest API</span>
              <span className="tag">Full-stack Javascript</span>
            </div>
            <a href="https://github.com/MarcusRosaa/mycontacts" target="_blank" rel="noreferrer">
              Ir até repositório
              <img src={externalLink} alt="external link" />
            </a>
          </div>
        </Card>

        <Card className="project_card">
          <img src={mycontacts} alt="" />
        </Card>

        <Card className="project_card">
          <img src={disneyClone} alt="" />
        </Card>

        <Card className="project_card">
          <img src={disneyClone} alt="" />
          <div className="infos_layer">
            <Header>
              <h4>Disney+ clone</h4>
              <span className="arrow" />
            </Header>
            <div className="infos_layer_content">
              <p>
                Neste projeto construí um clone da plataforma de streaming
                <i> Disney+ </i>
                aonde utilizei Firebase para criar a autenticação do usuário com login e senha,
                React para a interface com styled-component para a estilização CSS dos componentes
                e Redux para o gerencimento de estados do app.
              </p>
            </div>
            <div className="infos_layer_content_tags">
              <span className="tag">React</span>
              <span className="tag">Redux</span>
              <span className="tag">Firebase</span>
              <span className="tag">Styled-Components</span>
              <span className="tag">Responsivo</span>
            </div>
            <a href="https://github.com/MarcusRosaa/disney-plus-clone" target="_blank" rel="noreferrer">
              Ir até repositório
              <img src={externalLink} alt="external link" />
            </a>
          </div>
        </Card>

      </div>
    </Container>
  );
}
