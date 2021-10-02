import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'

import { database } from '../../services/firebase'

import Illustration from '../../assets/images/illustration.svg'

import { Container, Aside, Content, Main, Form } from './styles'

export const NewRoom: React.FC = () => {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = React.useState('')

  async function handleCreateRoom (event: React.FormEvent) {
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
    <Container>
      <Aside>
        <img src={Illustration} alt="Ilustração da home" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
      </Aside>
      <Main>
        <Content>
          <Logo large/>
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
              required
            />
            <Button type="submit">Criar sala</Button>
          </Form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </Content>
      </Main>
    </Container>
  )
}
