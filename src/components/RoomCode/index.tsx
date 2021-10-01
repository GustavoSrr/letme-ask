import React from 'react'

import { Button } from '../Button/index'

import { Container, Content } from './styles'

type RoomCodeProps = {
  code: string
}

export function RoomCode (props: RoomCodeProps) {
  function CopyCodeToClipboard () {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <Container>
      <Button rounded transparent onClick={CopyCodeToClipboard} title="Compartilhar">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2734 0.79499L12.2735 0.795018L19.1486 7.58C19.2839 7.71354 19.2838 8.00076 19.1486 8.13423C19.1486 8.13424 19.1486 8.13424 19.1486 8.13425L12.2734 14.9199L12.2734 14.9199C12.2333 14.9595 12.2083 14.9634 12.2018 14.9643C12.1914 14.9658 12.1718 14.9653 12.1439 14.9509C12.0923 14.9243 12 14.8376 12 14.6428V10.7181V9.95563L11.2377 9.96816C9.69588 9.99351 8.33038 10.1218 7.17975 10.4192C6.02755 10.717 5.04406 11.1963 4.32127 11.9572C2.84902 13.5071 2.73068 15.9014 3.61668 19.1645C2.10391 17.8416 0.75 15.3909 0.75 12.961C0.75 9.7817 1.89162 7.99053 3.6584 6.92861C5.50502 5.8187 8.14382 5.43659 11.2598 5.39582L12 5.38613V4.64588V1.07209C12 0.878059 12.0921 0.790917 12.1442 0.763999C12.1721 0.749551 12.1917 0.749154 12.2018 0.750553C12.2081 0.751418 12.2331 0.755224 12.2734 0.79499ZM3.6577 19.2001C3.6577 19.2001 3.6577 19.2001 3.65769 19.2001L4.35195 19.0101L3.6577 19.2001Z" stroke="black" strokeWidth="1.5" />
        </svg>
      </Button>
      <Content>
        <ul>
          <li>
            <span>Copiar código da sala</span>
          </li>
          <li>
            <span>Copiar url da sala</span>
          </li>
        </ul>
      </Content>
    </Container>
  )
}
