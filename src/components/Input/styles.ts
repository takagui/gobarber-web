import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

const Container = styled.div<IContainerProps>`
  background-color: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isFocused && css`
    border-color: #ff9000;
    color: #ff9000;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
  `}

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
