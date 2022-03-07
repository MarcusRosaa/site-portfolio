import styled from 'styled-components';
import circularBG from '../../assets/images/circular_bg.png';

export const Container = styled.div`
  margin: 0 16px;
`;

export const CircleContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 380px;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -10;
  /* background: url(${circularBG}) no-repeat 0 0; */
  background-size: cover;
  background-position: unset;

 @media screen and  (max-width: 1299px) {
  transform: translate(-50%, -50%);
  top: 20%;
 }


 @media screen and  (max-width: 1024px) {
   transform: translate(-50%, 50%);
   top: -30%;
  }

@media screen and  (max-width: 768px) {
  transform: translate(-50%, 50%);
  top: -35%;
}

@media screen and  (max-width: 620px) {
  transform: translate(-50%, 50%);
  top: -45%;
}

 @media screen and  (max-width: 425px) {
  transform: translate(-50%, 50%);
  top: -46%;
 }
`;
