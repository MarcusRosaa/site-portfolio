import {
  Container, InnerContainer, Presentation, Title, AboutMe, ImageContainer, SocialMedia, Bottom, BottomText, BottomMedia, Rights,
} from './styles';

import emoji from '../../assets/images/emojiHappy.png';
import emojiBottom from '../../assets/images/emoji-hands.png';
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
            me dá a capacidade de limpar minha mente e conseguir pensar claramente na hora de programar websites.
          </AboutMe>

          <AboutMe>
            Eu sou programador desde 2018. Atualmente venho criando projetos próprios
            e buscando novas oportunidades de crescimento profissional.
          </AboutMe>

          <SocialMedia>
            <p>Você pode me seguir aqui</p>
            <div className="media_container">
              <div className="media_icon">
                <a href="https://www.linkedin.com/in/marcus-vinicius-santos-da-rosa-18479b1a3/" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </div>

              <div className="media_icon">
                <a href="https://github.com/MarcusRosaa" target="_blank" rel="noreferrer">
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
      <Bottom>
        <BottomText>
          <h2>
            Vamos fazer sites com performance e qualidade!
          </h2>
          <p>
            Email:
            <span>marcusvrosa1@gmail.com</span>
          </p>
        </BottomText>

        <BottomMedia>
          <img src={emojiBottom} alt="" />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/marcus-vinicius-santos-da-rosa-18479b1a3/">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/MarcusRosaa">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/marcusvrosa1">
                HackerRank
              </a>
            </li>
          </ul>
        </BottomMedia>
      </Bottom>

      <Rights>
        <a href="https://github.com/MarcusRosaa/site-portfolio" target="_blank" rel="noreferrer">
          Desenvolvido por Marcus Rosa
        </a>
      </Rights>
    </Container>
  );
}
