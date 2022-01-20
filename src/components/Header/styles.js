import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 32px;
  color: #fff;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
      color: #fff;
      position: relative;
    }

    & a.nav-item::before {
      content: "";
      position: absolute;
      z-index: 2;
      left: 0;
      right: 100%;
      bottom: -3px;
      margin-top: 20px;
      background: ${({ theme }) => theme.secondaryColors.blue};
      height: 3px;
      transition: right 0.3s ease-out;
    }

    & a.nav-item:hover::before {
      right: 0;
    }

    & a.call-to-action {
      padding: 6px 10px;
      border: 2px solid;
      border-radius: 20px;
      transition: 0.2s ease-out;
    }

    & a.call-to-action:hover {
      border-color: ${({ theme }) => theme.secondaryColors.blue};
      color: ${({ theme }) => theme.secondaryColors.blue};
    }
  }
`;
