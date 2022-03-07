import styled from 'styled-components';

export const Container = styled.div`
  margin: 32px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .main_box {
    width: 40%;
    max-width: 672px;
    color: #fff;

    h1 {
      width: fit-content;
      margin-bottom: 16px;
      font-size: 37px;
      background-image: linear-gradient(180deg, transparent 70%, #9355F9 0);
      background-repeat: no-repeat;
      background-size: 33% 82%;
      background-position: 82% 0;
    }

    p {
      line-height: 30px;
      color: #7f8185;
    }

    .inline_main_info_buttons {
      display: flex;

      a {
        display: flex;
      }

      a + a {
        margin-left: 16px;
      }
    }

    button {
      margin-top: 16px;
      padding: 10px 18px;
      border-radius: 30px;
      border: none;
      font-weight: 600;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        color: #fff;
      }


      & + button {
        margin-left: 16px;
      }

      &.contact_me {
        background: ${({ theme }) => theme.secondaryColors.blue};
        color: #fff;
        border: 1px solid #044ae1;
        transition: background 0.2s ease-in;
        display: inline-flex;
        align-items: center;
        box-shadow:  0px 0px 20px rgba(42, 108, 251, 0.2);

        &:hover {
          background: #044ae1;
        }

        img {
          width: 32px;
          margin-right: 8px;
        }
      }

      &.see_portfolio {
        background: transparent;
        color: #869eaf;
        border: 1px solid #869eaf;
        transition: filter 0.2s ease-in;

        &:hover {
          filter: brightness(1.5);
          box-shadow:  0px 4px 10px 0 rgba(134,158,175,0.04);
        }
      }

    }

  }

  .main_image {
    width: 40%;
    min-width: 20%;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      object-fit: fill;
    }
  }

  @media only screen and (max-width: 800px) {
   .main_box {
    width: 100%;
   }

   .main_image {
      width: 100%;
      max-height: 400px;
      margin-top: 16px;
   }
  }


  @media only screen and (min-width: 770px) and (max-width: 1168px) {
    .main_box h1 {
      background-image: none;
    }
  }

  @media only screen and (min-width: 487px) and (max-width: 768px) {
    .main_box h1 {
      background-position: 83% 50%;
      background-size: 28% 70%;
      background-image: linear-gradient(180deg, transparent 65%, #9355F9 0);
    }
  }

    @media only screen and (max-width: 486px) and (min-width: 426px) {
    .main_box h1 {
      background-image: none;
    }
  }


  @media only screen and (max-width: 486px) {
    .main_box h1 {
      background-position: 0 83%;
      background-size: 33% 50%;
    }
  }
`;
