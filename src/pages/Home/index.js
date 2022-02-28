import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <AboutMe />
      <Skills />
      <Projects />
    </Container>
  );
}
