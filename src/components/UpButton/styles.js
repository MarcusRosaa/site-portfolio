import styled from 'styled-components';

export const GoUpButton = styled.button`
z-index: 10;
appearance: none;
border: 2px solid #9355F9;
position: fixed;
background-color:  #1d1e1e;
right: 0;
bottom: 0;
width: 48px;
height: 48px;
border-radius: 50%;
margin-right: 16px ;
margin-bottom: 16px;

&:hover {
  background-color: #313232;
}

img {
  width: 24px;
  height: 24px;
  transform: rotate(180deg)
}
`;
