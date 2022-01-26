import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Form from '../../components/Form';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <AboutMe />
      <Skills />
      <Projects />
      <Form />
    </Container>
  );
}
