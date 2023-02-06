import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: string
}

export const ButtonContainer = styled.button<ButtonProps>`
  background: ${(props) => props.theme.purpleLight};
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  color: ${(props) => props.theme.white};
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.purpleLight};
      border: 1px solid ${(props) => props.theme.purpleLight};
    `}

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
