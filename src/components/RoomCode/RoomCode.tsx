import copyImg from '../../assets/images/copy.svg'
import { ButtonCode, ContainerImage } from './styles'

interface RoomCodeProps {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <ButtonCode onClick={copyRoomToClipboard}>
      <ContainerImage>
        <img src={copyImg} alt="copy room code" />
      </ContainerImage>
      <span>Sala {code}</span>
    </ButtonCode>
  )
}
