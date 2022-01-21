import { Container, Card } from './styles';

import reactIcon from '../../assets/images/icons/'
import nodeIcon from '../../assets/images/icons/'
import javascriptIcon from '../../assets/images/icons/'
import databaseIcon from '../../assets/images/icons/database.png'


export default function Skills() {
  return (
    <Container>
      <div className="skills_cards_container">
        <Card>
          <img src="" alt="" />
          <p>React.js</p>
        </Card>

        <Card>
          <img src="" alt="" />
          <p>Node.js</p>
        </Card>

        <Card>
          <img src="" alt="" />
          <p>Ux/Ui design</p>
        </Card>

        <Card>
          <img src="" alt="" />
          <p>Bancos de dados</p>
        </Card>
      </div>
    </Container>
  );
}
