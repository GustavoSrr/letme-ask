import React, { FormEvent, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

import Illustration from '../../assets/images/illustration.svg'
import Logo from '../../assets/images/logo.svg'
import GoogleLogo from '../../assets/images/google-icon.svg'
import Join from '../../assets/images/join.svg'

import { Button } from '../../components/Button/index'

import { database } from '../../services/firebase'

import { Container, Main, Content, CreateButton, Separator, Form, Aside } from './styles'

export function Home () {
  const history = useHistory()
  const { user, signInGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom () {
    if (!user) {
      await signInGoogle()
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoom (event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') return

    const roomRef = database.ref(`rooms/${roomCode}`).get()

    if (!(await roomRef).exists()) {
      return alert('Essa sala não existe.')
    }

    if ((await roomRef).val().endedAt) {
      return alert('Essa sala foi fechada.')
    }

    history.push(`/rooms/${roomCode}`)
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
          <img src={Logo} alt="Logo do LetmeAsk"></img>
          <CreateButton onClick={handleCreateRoom}>
            <img src={GoogleLogo} alt="Logo do Google"></img>
            Criar sua sala com Google
          </CreateButton>
          <Separator>ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código de uma sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
              required
            />
            <Button type="submit">
              <img src={Join} alt="Entrar" className="BtnImg" />
              Entrar na sala
            </Button>
          </Form>
        </Content>
      </Main>
    </Container>
  )
}
