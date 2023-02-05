import { useState, FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../../components/Button/Button'
import { Question } from '../../components/Questions/Question'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'
import {
  Container,
  ContainerHeader,
  ContainerMain,
  QuestionList,
} from './styles'

type RoomParams = {
  id: string
}

export function Room() {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')

  const roomId = params.id

  const { questions, title } = useRoom(roomId)

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()

    if (newQuestion.trim() === '') {
      return
    }

    if (!user) {
      // só usuarios autenticados poderao fazer perguntas
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion('') // limpar compo após a pergunta ser feita
  }

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

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.{' '}
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
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
