import styled from 'styled-components'

interface QuestionProps {
  isAnswered: boolean
  isHighlighted: boolean
}

const colors = {
  background: '#fefefe',
  background100: '#f4f0ff',
  background200: '#DBDCDD',
}

export const QuestionContainer = styled.div<QuestionProps>`
  background-color: ${({ isAnswered, isHighlighted }) =>
    isAnswered
      ? colors.background200
      : isHighlighted
      ? colors.background100
      : colors.background};

  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin-bottom: 10 px;

  & + {
    margin-top: 8px;
  }
  p {
    color: ${(props) => props.theme.gray800};
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: ${(props) => props.theme.gray300};

      font-size: 14px;
    }
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: ${(props) => props.theme.gray300};
      gap: 8px;

      transition: filter 0.2ms;

      &.liked {
        color: ${(props) => props.theme.purpleLight};

        svg path {
          stroke: ${(props) => props.theme.purpleLight};
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`

export const LikeButton = styled.div`
  display: flex;
  gap: 16px;
`
