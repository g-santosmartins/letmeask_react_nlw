import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

import { Button } from '../components/Button'

import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'

import { Toaster } from 'react-hot-toast'
import { ErrorNotification } from '../components/notifications/ErrorNotification'
import { SuccessNotification } from '../components/notifications/SuccessNotification'


export function Home() {

  // call as hooks, ex. useHistory
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth()

  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {

    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleRedirect() {
    await SuccessNotification("Bem-vindo devolta, aspira!")
    history.push(`/rooms/${roomCode}`)
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if(roomCode.trim() === '') {
      return
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if(!roomRef.exists()) {
      ErrorNotification("Hum...Esta sala não existe! Tente outro ID.")
      return
    }

    if(roomRef.val().endedAt){

      // we can control the flow here, but if 
      // someone uses URL inject params, they can access
      ErrorNotification(`Que pena! A sala foi encerrada!`)
      return
    }
    handleRedirect()


  }

  return (
    <div id="page-auth">
      <Toaster/>  
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie Salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo da letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

