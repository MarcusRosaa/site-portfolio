import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import { CircleContainer, Container } from './styles';

export default function Home() {
  return (
    <Container>
      <CircleContainer />

      <AboutMe />
      <Skills />
      <Projects />
    </Container>
  );
}
