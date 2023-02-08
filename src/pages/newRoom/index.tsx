import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import { ContainerMain, ContainerHome, ContainerContent } from './styles'
import { Button } from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'
import { toast } from 'react-hot-toast'

export function NewRoom() {
  const [newRoom, setNewRoom] = useState('')
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }
    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    toast.success('Parabéns, sala criada com sucesso! 🤩', {
      style: {
        color: 'green',
      },
      iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
      },
    })
    navigate(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <ContainerHome>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respotas"
        />
        <strong>crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas duvidas da sua audiencia em tempo-real</p>
      </aside>
      <ContainerMain>
        <ContainerContent>
          <img src={logoImg} alt="letmeask" />

          <h2>Criar uma nova sala</h2>
          {user?.name}
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
          </p>
        </ContainerContent>
      </ContainerMain>
    </ContainerHome>
  )
}
