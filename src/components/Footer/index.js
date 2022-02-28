import {
  Container, InnerContainer, Presentation, Title, AboutMe, ImageContainer, SocialMedia,
} from './styles';

import emoji from '../../assets/images/emojiHappy.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github-sign.png';

export default function Footer() {
  return (
    <Container id="sobre-mim">
      <InnerContainer>
        <Presentation>
          <Title className="title">
            Sobre mim
            <img src={emoji} alt="" />
          </Title>
          <AboutMe>
            Meu nome é Marcus.
            Eu sou um desenvolvedor de websites brasileiro.
            Fora meu amor por programar, no meu tempo livre costumo praticar luta como principal atividade física. Praticar um esporte tão intenso
            me dá a capacidade de limpar minha mente e conseguir criar aplicações de qualidade sempre.
          </AboutMe>

          <AboutMe>
            Eu sou programador desde 2017. Atualmente venho criando projetos próprios
            e buscando novas oportunidades de crescimento profissional.
          </AboutMe>

          <SocialMedia>
            <p>Você pode me seguir aqui</p>
            <div className="media_container">
              <div className="media_icon">
                <a href="https://www.linkedin.com/in/marcus-vinicius-santos-da-rosa-18479b1a3/">
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </div>

              <div className="media_icon">
                <a href="https://github.com/MarcusRosaa">
                  <img src={github} alt="Github" />
                </a>
              </div>
            </div>
          </SocialMedia>
        </Presentation>
        <ImageContainer>
          <img src="https://via.placeholder.com/350" alt="eu" />
        </ImageContainer>
      </InnerContainer>
    </Container>
  );
}
