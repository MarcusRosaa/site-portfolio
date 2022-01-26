import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  margin-bottom: 70px;
  padding: 48px 64px 60px 64px;
  background: linear-gradient(190deg, rgba(53,57,64,1) 0%, #16181B 63%, #16181B 100%);
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & .skills_cards_container {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 97%;
  }

  & .skills_text_container {
    width: 50%;
    color: #fff;
    font-weight: 700;
    font-size: 35px;
    padding: 18px;

    p {
      width: 100%;
      max-width: 450px;
    }

    button {
      transition: background 0.2s ease-in;
      display: inline-flex;
      align-items: center;
      padding: 10px 18px;
      border-radius: 30px;
      background: ${({ theme }) => theme.secondaryColors.red};
      box-shadow:  0px 0px 20px rgba(235, 42, 76, 0.2);
      color: #fff;
      border: 1px solid #ec4a78;
      margin-top: 32px;
      font-size: 12px;
      font-weight: 600;

      img {
        width: 32px;
        margin-right: 8px;
      }

      &:hover {
        background: #a40c29;
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    height: fit-content;
    padding: 24px 32px 30px 32px;
    flex-direction: column-reverse;

    .skills_cards_container {
      justify-content: center;
      width: 100%;
    }

    .skills_text_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
    }
  }

  @media only screen and (max-width: 720px) {
    .skills_text_container {
      font-size: 30px;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 45%;
  height: 46%;
  margin: 8px;
  border-radius: 30px;
  border: 2px solid #42464B;
  background: linear-gradient(342deg, rgba(39,43,48,1) 0%, rgba(27,29,33,1) 60%, rgba(27,29,33,1) 100%);
  transition: 0.2s ease-in;

  display: flex;
  flex-direction: column;
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

  img {
    width: 60px;

  }

  p {
    margin-top: 8px;
    text-transform: uppercase;
    color: white;
    text-align: center;
  }

  @media only screen and (max-width: 1300px) {
    width: 350px;
    height: 250px;
  }

  @media only screen and (max-width: 720px) {
    width: 100%;
  }

`;
