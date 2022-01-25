import { Container, Card, Header } from './styles';

import disneyClone from '../../assets/images/projects/disney-clone.png';
import emojiProjects from '../../assets/images/emoji-hi.png';

export default function Projects() {
  return (
    <Container id="projetos">
      <div className="projects_title">
        <h2>Projetos que fiz.</h2>
        <img src={emojiProjects} alt="emoji" />
      </div>
      <div className="projects_cards_container">
        <Card className="project_card">
          <img src={disneyClone} alt="" />
        </Card>

        <Card className="project_card">
          <img src={disneyClone} alt="" />
        </Card>

        <Card className="project_card">
          <img src={disneyClone} alt="" />
        </Card>

        <Card className="project_card">
          <img src={disneyClone} alt="" />
          <div className="infos_layer">
            <Header>
              <h4>Disney+ clone</h4>
            </Header>
            <div className="infos_layer_content">
              <p>
                Neste projeto construí um clone da plataforma de streaming
                <i> Disney+ </i>
                aonde utilizei Firebase para criar a autenticação do usuário com login e senha,
                React para a interface com styled-component para a estilização CSS dos componentes.
              </p>
            </div>
          </div>
        </Card>

      </div>
    </Container>
  );
}
