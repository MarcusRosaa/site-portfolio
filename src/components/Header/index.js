import { HashLink } from 'react-router-hash-link';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav role="navigation">
        <HashLink to="#quem-sou" className="nav-item">Quem sou?</HashLink>
        <HashLink to="#habilidades" className="nav-item">Minhas habilidades</HashLink>
        <HashLink to="#projetos" className="nav-item">Projetos</HashLink>
        <HashLink to="#contato" className="call-to-action">Contato</HashLink>
      </nav>
    </Container>
  );
}
