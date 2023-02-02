import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  @media (max-width: 460px) {
    padding: 0 32px;
    padding: 0 16px;
  }

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
