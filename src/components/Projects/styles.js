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

    & .project_card:nth-of-type(odd) {
      margin-left: 0;
    }

    & .project_card:nth-of-type(even) {
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
  position: relative;
  overflow: hidden;



  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .infos_layer {
    width: 100%;
    height: 85%;
    position: absolute;
    transform: translateY(80%);
    color: #fff;
    border-radius: 30px;
    background: ${({ theme }) => theme.primaryColors.gray};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px;

    &:hover {
      transform: translateY(0);
      bottom: 0;
    }
  }

  .infos_layer_content {
    font-size: 14px;
    letter-spacing: 0.7px;
    text-align: center;
    margin: 0 20px 0 20px;
  }
`;

export const Header = styled.header`
  h4 {
    text-transform: uppercase;
    margin-bottom: 8px;
  }
`;
