import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 16px;
`;

export const CircularBg = styled.div`
  width: 100%;
  height: 100%;
  border: 20px solid #25282d;
  background-color: transparent;
  position: absolute;
  top: -70%;
  left: 0;
  z-index: -10;
  border-radius: 40%;
  opacity: 0.2;
`;
