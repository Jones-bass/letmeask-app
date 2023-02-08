import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { ContainerMain, ContainerHome, ContainerContent } from './styles'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { FormEvent, useState } from 'react'
import { Button } from '../../components/Button/Button'
import toast from 'react-hot-toast'

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
      toast.error('Código inválido, tente novamente! 😔', {
        style: {
          color: 'red',
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE',
        },
      })
      return
    }

    if (roomRef.val().endedAt) {
      toast.error('Sala já encerrada! 😔', {
        style: {
          color: 'red',
        },
        iconTheme: {
          primary: 'red',
          secondary: '#FFFAEE',
        },
      })
      return
    }

    navegate(`rooms/${roomCode}`)
    toast.success('Você acabou de entrar na sala! 👏', {
      style: {
        color: '#835afd',
      },
      iconTheme: {
        primary: '#835afd',
        secondary: '#FFFAEE',
      },
    })
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
            <Button type="submit">Entrar na sala</Button>
          </form>
        </ContainerContent>
      </ContainerMain>
    </ContainerHome>
  )
}
