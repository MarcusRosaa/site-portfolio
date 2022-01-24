import { Container, Card } from './styles';

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
            Linguagens utilizadas
          </div>
        </Card>

      </div>
    </Container>
  );
}
