import { useParams } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import { Question } from '../../components/Questions/Question'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { useRoom } from '../../hooks/useRoom'
import {
  Container,
  ContainerHeader,
  ContainerMain,
  QuestionList,
} from './styles'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>()

  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  return (
    <Container>
      <ContainerHeader>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={`#${params.id}`} />
        </div>
      </ContainerHeader>
      <ContainerMain>
        <div className="room-title">
          <h1>Sala {title} </h1>

          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionList>
          {questions.map((item) => {
            return (
              <Question
                key={item.id}
                content={item.content}
                author={item.author}
              />
            )
          })}
        </QuestionList>
      </ContainerMain>
    </Container>
  )
}
