import styled from 'styled-components';

export const Container = styled.header`
  max-width: 700px;
  margin: 0 0 0 auto;
  padding: 32px 0;
  color: #fff;
  position: relative;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;

    a {
      color: #fff;
      position: relative;
      display: inline-block;
    }

    a.nav-item::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      bottom: 0;
      left: 0;
      background-color: #fff;
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }

    a.nav-item:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    a.call-to-action {
      padding: 10px 15px;
      border: 2px solid;
      border-radius: 25px;
      transition: 0.2s ease-out;
      box-shadow:  0px 4px 10px rgba(134,158,175,0.05);
      border-color: ${({ theme }) => theme.secondaryColors.blue};
      color: ${({ theme }) => theme.secondaryColors.blue};
    }

    a.call-to-action:hover {
      opacity: 0.8;
    }
    @media screen and (max-width:720px) {
      a.call-to-action {
      box-shadow: none;
    }
    }
  }

  .menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 16px
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
  z-index: 99;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
  z-index: 99;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

  @media (max-width: 720px) {
    .menu-button-container {
      display: flex;
    }

    a + a {
    margin-top: 24px;
    }

    .navigation_menu {
      overflow: hidden;
      position: absolute;
      margin-left: 0;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }

    #menu-toggle ~ .navigation_menu a {
      display: none;
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked ~ .navigation_menu a {
      display: flex;
      height: 2.5em;
      padding: 1.5em 0.5em;
      font-size: 20px;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
      border-radius: 0px;
    }

    #menu-toggle:checked ~ .navigation_menu {
      background-color: #222222;
      margin-top: 0px;
    }

    .navigation_menu > a {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: #222;
      align-items: center;
    }

    nav a.nav-item::before {
      background: transparent;
    }
  }
`;
