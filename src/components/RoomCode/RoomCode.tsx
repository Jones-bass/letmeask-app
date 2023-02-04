import copyImg from '../../assets/images/copy.svg'
import { ButtonCode, ContainerImage } from './styles'

type RoomCodeProps = {
  code: string
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <ButtonCode onClick={copyRoomToClipboard}>
      <ContainerImage>
        <img src={copyImg} alt="copy room code" />
      </ContainerImage>
      <span>Sala #{props.code}</span>
    </ButtonCode>
  )
}
