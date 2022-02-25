import { HashLink } from 'react-router-hash-link';

import { Container } from './styles';

export default function Header() {
  return (
    <Container id="home">
      <nav role="navigation">
        <HashLink smooth to="#quem-sou" className="nav-item">Quem sou?</HashLink>
        <HashLink smooth to="#habilidades" className="nav-item">Minhas habilidades</HashLink>
        <HashLink smooth to="#projetos" className="nav-item">Projetos</HashLink>
        <HashLink smooth to="#contato" className="call-to-action">Contato</HashLink>
      </nav>
    </Container>
  );
}
