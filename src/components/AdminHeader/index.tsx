import React from 'react'

import { Logo } from '../Logo'
import { RoomCode } from '../RoomCode'
import { Button } from '../Button'

import { Container, Content } from './styles'
import { useTheme } from '../../hooks/useTheme'
import { useHistory } from 'react-router-dom'

import { database } from '../../services/firebase'

type AdminHeaderProps = {
  roomId: string;
}

export function AdminHeader ({ roomId }: AdminHeaderProps) {
  const { toggleTheme } = useTheme()
  const history = useHistory()

  async function handleEndRoom () {
    if (window.confirm('Tem certeza que deseja encerrar essa sala?')) {
      database.ref(`rooms/${roomId}`).update({
        endedAt: new Date()
      })
      history.push('/')
    }
  }

  return (
    <Container>
      <Content>
        <Logo />
        <div>
          <Button
            title="Alterar tema"
            rounded
            transparent
            onClick={() => toggleTheme()}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0.75C5.89399 0.75 1.75 4.88764 1.75 10C1.75 15.106 5.88764 19.25 11 19.25C13.5909 19.25 15.9773 18.1803 17.6876 16.3898C12.6795 16.8925 8.2591 12.9542 8.2591 7.84781C8.2591 5.01724 9.64705 2.3949 11.9452 0.798134C11.6313 0.766129 11.3159 0.750047 11 0.75ZM11 0.75V0V0.75ZM12.6027 0.383822C12.6028 0.383784 12.6028 0.383745 12.6029 0.383707L12.6027 0.383822Z" stroke="black" strokeWidth="1.3" />
            </svg>
          </Button>
          <Button
            title="Visão de usuário"
            rounded
            transparent
            onClick={() => history.push(`/rooms/${roomId}`)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3929 5C14.3929 7.32773 12.4465 9.25 10 9.25C7.55353 9.25 5.60714 7.32773 5.60714 5C5.60714 2.67227 7.55353 0.75 10 0.75C12.4465 0.75 14.3929 2.67227 14.3929 5ZM10 12.625C11.0956 12.625 12.1393 12.3993 13.0848 12H13.6C16.1871 12 18.25 14.0356 18.25 16.5V18.125C18.25 18.7262 17.742 19.25 17.0714 19.25H2.92857C2.258 19.25 1.75 18.7262 1.75 18.125V16.5C1.75 14.0356 3.81291 12 6.4 12H6.91575C7.86339 12.3989 8.90345 12.625 10 12.625Z" stroke="black" strokeWidth="1.3" />
            </svg>
          </Button>
          <RoomCode code={roomId} />
          <Button
            id="EndRoomBtn"
            outlined
            onClick={handleEndRoom}
          >
            Encerrar sala
          </Button>
        </div>
      </Content>
    </Container>
  )
}
