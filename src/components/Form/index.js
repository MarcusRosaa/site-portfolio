import {
  Container, FormGroup, Input, TextArea,
} from './styles';

import happyFace from '../../assets/images/emojiHappy.png';

export default function Form() {
  return (
    <Container id="contato">
      <header>
        <h3>Entre em contato comigo.</h3>
        <img src={happyFace} alt="happy emoji" />
      </header>
      <FormGroup>
        <Input
          placeholder="Nome *"

        />
        <Input
          placeholder="Sobrenome *"
          type="text"
        />
        <Input
          placeholder="e-mail *"
          type="email"
        />
        <Input
          placeholder="Celular *"
          type="text"
        />

        <TextArea
          placeholder="Assunto *"
          rows="8"
        />
      </FormGroup>
    </Container>
  );
}
