import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 0;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  h3 {
    text-align: center;
    color: #fff;
  }

  img {
    width: 110px;
  }
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  outline: none;
  width: 100%;
  max-width: 700px;
  margin-bottom: 16px;
  height: 50px;
  padding: 16px;
  border-radius: 15px;
  border: 2px solid #fff;
  transition: bordder-color 0.2s ease-in;
  font-size: 16px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.secondaryColors.blue};
  }
`;

export const TextArea = styled.textarea`
  -webkit-appearance: none;
  outline: none;
  width: 100%;
  max-width: 700px;
  padding: 16px;
  border-radius: 15px;
  border: 2px solid #fff;
  font-size: 16px;


  &:focus {
    border: 2px solid ${({ theme }) => theme.secondaryColors.blue};
  }
`;
