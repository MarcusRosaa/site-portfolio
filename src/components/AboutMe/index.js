import { HashLink } from 'react-router-hash-link';
import { Container } from './styles';

import developer from '../../assets/images/developer.svg';
import emailIcon from '../../assets/images/icons/email.png';

export default function AboutMe() {
  return (
    <Container id="quem-sou">
      <div className="main_box">
        <h1>Olá, me chamo Marcus! 👋</h1>
        <p>
          Eu sou um desenvolvedor
          <strong> full-stack </strong>
          autodidata especializado em construir experiências digitais únicas.
        </p>
        <div className="inline_main_info_buttons">
          <a href="https://wa.me/5551992052353" target="_blank" rel="noreferrer">
            <button type="button" className="contact_me">
              <img src={emailIcon} alt="email" />
              Entrar em contato
            </button>
          </a>
          <HashLink smooth to="#projetos">
            <button type="button" className="see_portfolio">
              Ver projetos
            </button>
          </HashLink>
        </div>
      </div>
      <div className="main_image">
        <img src={developer} alt="programador codando" />
      </div>
    </Container>
  );
}
