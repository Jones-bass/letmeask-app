import styled from 'styled-components'

export const Container = styled.div``

export const ContainerHeader = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.gray};

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 8px;
    }

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;
      @media (max-width: 500px) {
        flex-direction: column;
        gap: 8px;
      }

      button {
        height: 40px;
      }
    }
  }
`
export const ContainerMain = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .room-title {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-family: 24px;
      color: ${(props) => props.theme.gray800};
    }

    span {
      margin-left: 16px;
      background: ${(props) => props.theme.pink};

      border-radius: 9999px;
      padding: 8px 16px;
      color: ${(props) => props.theme.white};

      font-weight: 500;
      font-size: 14px;
    }

    @media (max-width: 800px) {
      margin: 32px 0 24px 8px;
    }

    @media (max-width: 460px) {
      flex-direction: column;
      gap: 8px;
    }
  }
  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: ${(props) => props.theme.background};

      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }

    @media (max-width: 800px) {
      margin: 0 8px;
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info {
        display: flex;
        align-items: center;
        gap: 8px;
        @media (max-width: 460px) {
          gap: 4px;
        }

        img {
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }

        span {
          font-size: 14px;
          color: ${(props) => props.theme.gray300};

          font-weight: 500;
        }
      }

      > span {
        font-size: 14px;
        color: ${(props) => props.theme.gray300};
        font-weight: 500;

        button {
          background: transparent;
          border: 0;
          color: ${(props) => props.theme.purpleLight};

          text-decoration: underline;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }
`
export const QuestionList = styled.div`
  margin-top: 32px;

  @media (max-width: 800px) {
    margin: 32px 8px;
  }
`
