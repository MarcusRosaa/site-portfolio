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

  @media only screen and (max-width: 720px) {
    .projects_title h2 {
      font-size: 28px;
    }
  }
`;

export const Card = styled.div`
  width: 48%;
  height: 600px;
  min-height: 200px;
  border: 2px solid #42464B;
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
    height: 100%;
    position: absolute;
    transform: translateY(85%);
    color: #fff;
    border-radius: 30px;
    background: ${({ theme }) => theme.primaryColors.gray};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    cursor: ns-resize;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(0);
      bottom: 0;

      span.arrow {
        transform: rotate(225deg);
      }
    }

    a {
      color: #fff;
      text-decoration: underline;
      display: table;

      img {
        width: 16px;
        margin-left: 4px;
      }
    }
  }

  .infos_layer_content {
    font-size: 14px;
    letter-spacing: 0.7px;
    text-align: center;
    margin: 0 20px 0 20px;
  }

  .infos_layer_content_tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .tag {
      margin-right: 5px;
      margin-bottom: 8px;
      border: 1px solid white;
      border-radius: 30px;
      padding: 8px;
      font-weight: 500;
      font-size: 12px;
      background: ${({ theme }) => theme.primaryColors.black};
      opacity: 0.6;
      letter-spacing: 1px;
      text-transform: capitalize;
    }
  }

  @media only screen and (max-width: 1300px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;

    .infos_layer {
      height: 95%;
    }

    .infos_layer_content_tags {
      max-width: 90%;
    }
  }

  @media (max-width: 425px) {
    height: 800px;

    .infos_layer {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    text-transform: uppercase;
  }

  span {
    position: absolute;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(45deg);
    right: 6%;
    top: 7%;
  }
`;
