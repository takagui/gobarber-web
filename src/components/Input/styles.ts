import styled from 'styled-components';

const Container = styled.div`
  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    background-color: transparent;
    color: #f4ede8;
    border: none;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export { Container };
