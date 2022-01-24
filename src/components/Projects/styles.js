import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .projects_title {
    display: inline-flex;
    align-items: center;
    margin-bottom: 8px;

    h2 {
      color: #fff;
      font-size: 32px;
    }

    img {
      width: 110px;
    }

  }



  .projects_cards_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & :nth-child(odd) {
      margin-left: 0;
    }

    & :nth-child(even) {
      margin-right: 0;
    }
  }
`;

export const Card = styled.div`
  width: 48%;
  height: 340px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 2%;
  border-radius: 30px;



  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;
