import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <AboutMe />
      <Skills />
    </Container>
  );
}
