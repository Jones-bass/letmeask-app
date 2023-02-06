import { useParams } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button/Button'
import { Question } from '../../components/Questions/Question'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { useRoom } from '../../hooks/useRoom'
import {
  ContainerAdmin,
  ContainerHeaderAdmin,
  ButtonHeader,
  ContainerMainAdmin,
  QuestionListAdmin,
} from './styles'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const params = useParams<RoomParams>()

  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  return (
    <ContainerAdmin>
      <ContainerHeaderAdmin>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <ButtonHeader>
            <RoomCode code={`#${params.id}`} />

            <Button variant="secundary" onClick={() => console.log('')}>
              Encerrar sala
            </Button>
          </ButtonHeader>
        </div>
      </ContainerHeaderAdmin>
      <ContainerMainAdmin>
        <div className="room-title">
          <h1>Sala {title} </h1>

          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionListAdmin>
          {questions.map((item) => {
            return (
              <Question
                key={item.id}
                content={item.content}
                author={item.author}
              />
            )
          })}
        </QuestionListAdmin>
      </ContainerMainAdmin>
    </ContainerAdmin>
  )
}
