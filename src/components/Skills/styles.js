import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  margin-bottom: 70px;
  padding: 48px 64px 60px 64px;
  background: linear-gradient(190deg, rgba(53,57,64,1) 0%, #16181B 63%, #16181B 100%);
  border-radius: 30px;

  & .skills_cards_container {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 97%;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 45%;
  height: 46%;
  margin: 8px;
  border-radius: 30px;
  border: 2px solid #42464B;
  cursor: pointer;
  background: linear-gradient(342deg, rgba(39,43,48,1) 0%, rgba(27,29,33,1) 60%, rgba(27,29,33,1) 100%);
  transition: 0.2s ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(2) {
    margin-top: 20px;
  }

  &:nth-of-type(4) {
    margin-top: 20px;
  }

  &:hover {
    border: solid 2px transparent;
    border-radius: 30px;
    background-image: linear-gradient(342deg, rgba(115,119,126,1) 0%, rgba(66,70,77,1) 41%, rgba(53,57,64,1) 65%), radial-gradient(circle at bottom right,rgba(253,253,253,1),rgba(41,141,192,1));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  & p {
    text-transform: uppercase;
    color: white;
  }

`;
