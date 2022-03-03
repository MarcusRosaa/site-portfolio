import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: linear-gradient(0deg, rgba(22,24,27,1) 3%, rgba(52,56,63,1) 69%, rgba(53,57,64,1) 100%);
  border-radius: 60px 60px 0 0;
  margin-top: 70px;
  padding-bottom: 64px;
`;

export const InnerContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 72px 16px 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(52,56,63,1);
  padding-bottom: 70px;

  @media screen and (max-width: 600px) {
    border-bottom: none;
  }
`;

export const Presentation = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size:40px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  img {
    width: 120px;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 520px) {
    font-size: 24px;
  }
`;

export const AboutMe = styled.p`
  color: #7f8185;
  line-height: 30px;

  & + & {
    margin-top: 40px;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 32px;

  p {
    color: #2A6CFB;
    font-weight: bold;
    margin-bottom: 8px;
  }

  img {
    width: 32px;
  }

  .media_container {
    display: flex;
  }

  .media_icon {
    border: 1px solid #42464B;
    padding: 24px;

    &:first-child {
      border-radius: 12px 0 0 12px;
    }

    &:last-child {
      border-left: none;
      border-radius: 0 12px 12px 0;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 72px 16px 40px;
  display: flex;
  justify-content: space-between;
  padding-top: 32px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const BottomText = styled.div`
  width: 35%;

  h2 {
    color: #fff;
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    color: #fff;
  }

  span {
    font-size: 14px;
    color: #fff;
    text-decoration: underline;
    margin-left: 8px;
  }
`;

export const BottomMedia = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 140px;
    margin-right: 24px;
  }

  ul {
    list-style: none;
  }

  li + li {
    margin-top: 8px;
  }

  ul li a {
    font-size: 14px;
    text-decoration: underline;
    color: #fff;
  }
`;

export const Rights = styled.p`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 14px;

`;
