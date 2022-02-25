import { HashLink } from 'react-router-hash-link';
import { GoUpButton } from './styles';
import arrouUp from '../../assets/images/icons/down-arrow.png';

export default function UpButton() {
  return (
    <HashLink to="#home">
      <GoUpButton type="button">
        <img src={arrouUp} alt="Go up" />
      </GoUpButton>
    </HashLink>
  );
}
