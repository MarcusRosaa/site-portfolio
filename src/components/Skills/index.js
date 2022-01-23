import { Container, Card } from './styles';

import reactIcon from '../../assets/images/icons/react.png';
import testsIcon from '../../assets/images/icons/unit.png';
import javascriptIcon from '../../assets/images/icons/javascript.png';
import githubIcon from '../../assets/images/icons/github.png';
import emailIcon from '../../assets/images/icons/emailRed.png';

export default function Skills() {
  return (
    <Container id="habilidades">
      <div className="skills_cards_container">
        <Card>
          <img src={reactIcon} alt="" />
          <p>React.js</p>
        </Card>

        <Card>
          <img src={javascriptIcon} alt="" />
          <p>Javascript avançado</p>
        </Card>

        <Card>
          <img src={testsIcon} alt="" />
          <p>Testes unitários</p>
        </Card>

        <Card>
          <img src={githubIcon} alt="" />
          <p>Versionamento de código / github</p>
        </Card>
      </div>
      <div className="skills_text_container">
        <p>Conheça minhas principais habilidades como um desenvolvedor web front-end de alto nível.</p>
        <button type="button">
          <img src={emailIcon} alt="email" />
          Entre em contato
        </button>
      </div>
    </Container>
  );
}
