import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    background-color: ${(props) => props.theme.purpleLight};
    color: ${(props) => props.theme.white};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    @media (max-width: 900px) {
      max-width: 350px;
    }

    @media (max-width: 700px) {
      display: none;
    }

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${(props) => props.theme.background};
    }
  }
`
export const ContainerMain = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;

  align-items: stretch;
  text-align: center;

  > button {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: ${(props) => props.theme.danger};

    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: ${(props) => props.theme.white};

      border: 1px solid ${(props) => props.theme.gray500};
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  }

  .separator {
    font-size: 14px;
    color: ${(props) => props.theme.gray500};

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: ${(props) => props.theme.gray500};
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${(props) => props.theme.gray500};
      margin-left: 16px;
    }
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.gray300};
    margin-top: 16px;

    a {
      color: ${(props) => props.theme.purple};
    }
  }
`
