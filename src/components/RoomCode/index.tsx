import React from 'react'

import share from '../../assets/images/share.svg'

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
      <Button rounded onClick={CopyCodeToClipboard} title="Compartilhar">
        <img className="Share" src={share} alt="Compartillhar" title="Compartilhar" />
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
