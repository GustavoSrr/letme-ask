import React from 'react'

import { Button } from '../Button/index'
import { RoomCode } from '../RoomCode/index'
import { Logo } from '../Logo/index'

import { Container, Content } from './styles'
import { useTheme } from '../../hooks/useTheme'

type Props = {
  roomId: string;
}

export const Header: React.FC<Props> = ({ roomId }) => {
  const { toggleTheme } = useTheme()

  return (
    <Container>
      <Content>
        <Logo />
        <div className="Desktop">
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
          <RoomCode code={roomId} />
        </div>
        <div className="Mobile">
          <Button
            id="MenuBtn"
            transparent
            rounded
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="20" height="2" rx="1"/>
              <rect y="9.41072" width="20" height="2" rx="1"/>
              <rect y="14.8214" width="20" height="2" rx="1"/>
            </svg>
          </Button>
          <div id="MenuContent">
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
            <RoomCode code={roomId} />
          </div>
        </div>
      </Content>
    </Container>
  )
}
