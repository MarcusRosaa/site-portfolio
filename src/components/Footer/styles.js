import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: linear-gradient(0deg, rgba(22,24,27,1) 3%, rgba(52,56,63,1) 69%, rgba(53,57,64,1) 100%);
  border-radius: 12px 12px 0 0;
`;

export const InnerContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 72px 16px 40px;
  display: flex;
  justify-content: space-between;
`;

export const Presentation = styled.div`
  width: 45%;
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
    color: #7f8185;
    margin-bottom: 16px;
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
`;
