import React, { FormEvent, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

import Illustration from '../../assets/images/illustration.svg'

import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'

import { database } from '../../services/firebase'

import { Container, Main, Content, CreateButton, Separator, Form, Aside } from './styles'

export const Home: React.FC = () => {
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
          <Logo large/>
          <CreateButton onClick={handleCreateRoom}>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Criar sala com Google
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
              <svg style={{ marginRight: '8px' }} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2.5H16.3333C16.7754 2.5 17.1993 2.67559 17.5118 2.98816C17.8244 3.30072 18 3.72464 18 4.16667V15.8333C18 16.2754 17.8244 16.6993 17.5118 17.0118C17.1993 17.3244 16.7754 17.5 16.3333 17.5H13" stroke="#FEFEFE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.83331 14.1666L13 9.99998L8.83331 5.83331" stroke="#FEFEFE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 10H3" stroke="#FEFEFE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Entrar na sala
            </Button>
          </Form>
        </Content>
      </Main>
    </Container>
  )
}
