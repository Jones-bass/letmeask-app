import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { ContainerMain, ContainerHome, ContainerContent } from './styles'
import { Button } from '../../components/Button'

export function Home() {
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
          <button>
            <img src={googleIconImg} alt="Logo Google" />
            Crie sua sala com Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button>Entrar na sala</Button>
          </form>
        </ContainerContent>
      </ContainerMain>
    </ContainerHome>
  )
}
