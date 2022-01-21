import { Container } from './styles';

import developer from '../../assets/images/developer.svg';
import emailIcon from '../../assets/images/icons/email.png';

export default function AboutMe() {
  return (
    <Container id="quem-sou">
      <div className="main_box">
        <h1>Olá, eu sou o Marcus! 👋</h1>
        <p>
          Eu sou um programador de softwares autodidata com habilidades voltadas para a programação
          do front-end e back-end de aplicações web e apaixonado por programar.
        </p>
        <div className="inline_main_info_buttons">
          <button type="button" className="contact_me">
            <img src={emailIcon} alt="email" />
            Entrar em contato
          </button>
          <button type="button" className="see_portfolio">
            Ver portfolio
          </button>
        </div>
      </div>
      <div className="main_image">
        <img src={developer} alt="programador codando" />
      </div>
    </Container>
  );
}
