import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

import { ContainerMain, ContainerHome, ContainerContent } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function NewRoom() {
  const { user } = useContext(AuthContext)

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
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button>Entrar na sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
          </p>
        </ContainerContent>
      </ContainerMain>
    </ContainerHome>
  )
}
