import styled from 'styled-components';

export const Container = styled.header`
  max-width: 700px;
  margin: 32px auto;
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
      height: 3px;
      transition: right 0.3s ease-out;
    }

    a.nav-item:hover::before {
      right: 0;
    }

    a.call-to-action {
      padding: 10px 15px;
      border: 1px solid;
      border-radius: 25px;
      transition: 0.2s ease-out;
    }

    a.call-to-action:hover {
      border-color: ${({ theme }) => theme.secondaryColors.blue};
      color: ${({ theme }) => theme.secondaryColors.blue};
    }
  }
  `;
