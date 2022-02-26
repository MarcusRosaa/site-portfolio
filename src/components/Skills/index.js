import { HashLink } from 'react-router-hash-link';
import { Container, Card } from './styles';

import reactIcon from '../../assets/images/icons/react.png';
import cleanCodeIcon from '../../assets/images/icons/clean-code.png';
import javascriptIcon from '../../assets/images/icons/javascript.png';
import githubIcon from '../../assets/images/icons/github.png';
import emailIcon from '../../assets/images/icons/emailRed.png';

export default function Skills() {
  return (
    <Container id="habilidades">
      <div className="skills_cards_container">
        <Card>
          <img src={reactIcon} alt="" />
          <p>React: hooks, estados, lifecycle & componentes funcionais</p>
        </Card>

        <Card>
          <img src={javascriptIcon} alt="" />
          <p>Javascript avançado: POO, ES6, frameworks e bibliotecas & clean code</p>
        </Card>

        <Card>
          <img src={cleanCodeIcon} alt="" />
          <p>Código escalável, arquitetura limpa & padrões de projeto</p>
        </Card>

        <Card>
          <img src={githubIcon} alt="" />
          <p>Versionamento de código / github, bitbucket & metodologias ágeis com Jira</p>
        </Card>
      </div>
      <div className="skills_text_container">
        <p>Conheça minhas principais habilidades como um desenvolvedor web de alto nível.</p>
        <HashLink smooth to="#contato">
          <button type="button">
            <img src={emailIcon} alt="email" />
            Entre em contato
          </button>
        </HashLink>
      </div>
    </Container>
  );
}
