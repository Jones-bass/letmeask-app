import { useNavigate, useParams } from 'react-router-dom'

import DeleteImg from '../../assets/images/delete.svg'
import logoImg from '../../assets/images/logo.svg'
import CheckImg from '../../assets/images/check.svg'
import AnswerImg from '../../assets/images/answer.svg'

import { Button } from '../../components/Button/Button'
import { Question } from '../../components/Questions/Question'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'
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
  const navigate = useNavigate()

  const { questions, title } = useRoom(roomId)

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })
    navigate('/')
  }
  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <ContainerAdmin>
      <ContainerHeaderAdmin>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <ButtonHeader>
            <RoomCode code={`#${params.id}`} />

            <Button variant="secundary" onClick={handleEndRoom}>
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
              >
                <button type="button">
                  <img src={CheckImg} alt="Marcar pergunta como respondida" />
                </button>
                <button type="button">
                  <img src={AnswerImg} alt="Dar destaque a pergunta" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(item.id)}
                >
                  <img src={DeleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            )
          })}
        </QuestionListAdmin>
      </ContainerMainAdmin>
    </ContainerAdmin>
  )
}
