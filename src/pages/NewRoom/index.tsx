import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '../../components/Button/index'

import { database } from '../../services/firebase'

import Illustration from '../../assets/images/illustration.svg'
import Logo from '../../assets/images/logo.svg'

import './styles.scss'

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = React.useState('')

  async function handleCreateRoom(event: React.FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') return

    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })
    history.push(`/admin/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="AuthPage">
      <aside>
        <img src={Illustration} alt="Ilustração da home" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire dúvidas em tempo real.</p>
      </aside>
      <main>
        <div className="MainContent">
          <img src={Logo} alt="Logo do LetmeAsk"></img>
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
              required
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
