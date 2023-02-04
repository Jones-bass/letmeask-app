import styled from 'styled-components'

export const Container = styled.div``

export const ButtonCode = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 235px;
    font-size: 14px;
    font-weight: 500;
  }
`
export const ContainerImage = styled.div`
  background: #835afd;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
