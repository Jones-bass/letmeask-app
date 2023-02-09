import styled from 'styled-components'

export const Container = styled.div``

export const ButtonCode = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background-color: ${(props) => props.theme.white};

  border: 1px solid ${(props) => props.theme.purpleLight};
  cursor: pointer;

  display: flex;

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 265px;
    font-size: 14px;
    font-weight: 500;
  }
`
export const ContainerImage = styled.div`
  background-color: ${(props) => props.theme.purpleLight};

  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
