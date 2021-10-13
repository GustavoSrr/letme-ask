import React, { useContext } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Link, useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'

import { database } from '../../services/firebase'

import Illustration from '../../assets/images/illustration.svg'

import { Container, Aside, Content, Main, Form } from './styles'
import { useTheme } from '../../hooks/useTheme'
import toast, { Toaster } from 'react-hot-toast'
import { ThemeContext } from 'styled-components'

export const NewRoom: React.FC = () => {
  const { user } = useAuth()
  const { toggleTheme } = useTheme()
  const { colors } = useContext(ThemeContext)
  const history = useHistory()
  const [newRoom, setNewRoom] = React.useState('')

  async function handleCreateRoom (event: React.FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') return
    if (newRoom.trim().length > 50) return toast.error('A sala não pode passar de 50 caracteres.')

    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })
    history.push(`/admin/rooms/${firebaseRoom.key}`)
  }

  return (
    <Container>
      <Toaster
        toastOptions={{
          success: {
            style: {
              borderRadius: '8px',
              backgroundColor: colors.textAreaColor,
              color: colors.textTitleColor,
              boxShadow: 'none'
            },
            iconTheme: {
              primary: '#2fd373',
              secondary: colors.textAreaColor
            }
          },
          error: {
            style: {
              borderRadius: '8px',
              backgroundColor: colors.textAreaColor,
              color: colors.textTitleColor,
              boxShadow: 'none'
            },
            iconTheme: {
              primary: '#e73f5d',
              secondary: colors.textAreaColor
            }
          }
        }}
      />
      <Aside>
        <img src={Illustration} alt="Ilustração da home" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
      </Aside>
      <Main>
        <Button
          title="Alterar tema"
          id="HomeThemeButton"
          rounded
          transparent
          onClick={() => toggleTheme()}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0.75C5.89399 0.75 1.75 4.88764 1.75 10C1.75 15.106 5.88764 19.25 11 19.25C13.5909 19.25 15.9773 18.1803 17.6876 16.3898C12.6795 16.8925 8.2591 12.9542 8.2591 7.84781C8.2591 5.01724 9.64705 2.3949 11.9452 0.798134C11.6313 0.766129 11.3159 0.750047 11 0.75ZM11 0.75V0V0.75ZM12.6027 0.383822C12.6028 0.383784 12.6028 0.383745 12.6029 0.383707L12.6027 0.383822Z" stroke="black" strokeWidth="1.3" />
          </svg>
        </Button>
        <Content>
          <Logo large/>
          <h2>Criar uma nova sala</h2>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
              maxLength={50}
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
