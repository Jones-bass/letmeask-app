import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button/Button'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { Container, ContainerHeader, ContainerMain } from './styles'

export function Room() {
  return (
    <Container>
      <ContainerHeader>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code="Teste" />
        </div>
      </ContainerHeader>
      <ContainerMain>
        <div className="room-title">
          <h1>Sala </h1>

          <span> pergunta(s)</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar" />

          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </ContainerMain>
    </Container>
  )
}
