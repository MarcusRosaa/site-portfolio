import styled from 'styled-components';

export const Container = styled.header`
  max-width: 700px;
  margin: 0px auto;
  padding: 32px 0;
  color: #fff;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;

    a {
      color: #fff;
      position: relative;
    }

    a.nav-item::before {
      content: "";
      position: absolute;
      z-index: 2;
      left: 0;
      right: 100%;
      bottom: -3px;
      margin-top: 20px;
      background: #fff;
      height: 1px;
      transition: right 0.3s ease-out;
    }

    a.nav-item:hover::before {
      right: 0;
    }

    a.call-to-action {
      padding: 10px 15px;
      border: 1px solid;
      border-radius: 25px;
      transition: 0.3s ease-out;
    }

    a.call-to-action:hover {
      border-color: ${({ theme }) => theme.secondaryColors.purple};
      color: ${({ theme }) => theme.secondaryColors.purple};
    }
  }

  @media only screen and (max-width: 720px) {
    nav {
      flex-direction: column;

      a + a {
      margin-top: 24px;
      }
    }
  }
`;
