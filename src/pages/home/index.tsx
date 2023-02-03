import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { ContainerMain, ContainerHome, ContainerContent } from './styles'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { FormEvent, useState } from 'react'

export function Home() {
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')
  const navegate = useNavigate()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    navegate('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (!roomRef.exists()) {
      alert('Room does not exists.')
      return
    }

    navegate(`rooms/${roomCode}`)
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
          <button onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo Google" />
            Crie sua sala com Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o codigo da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button>Entrar na sala</Button>
          </form>
        </ContainerContent>
      </ContainerMain>
    </ContainerHome>
  )
}
