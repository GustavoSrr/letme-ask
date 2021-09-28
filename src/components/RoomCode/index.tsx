import React from 'react'

import share from '../../assets/images/share.svg'

import { Button } from '../Button/index'

import './styles.scss'

type RoomCodeProps = {
  code: string
}

export function RoomCode (props: RoomCodeProps) {
  function CopyCodeToClipboard () {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <div className="RoomCode">
      <Button rounded onClick={CopyCodeToClipboard} title="Compartilhar">
        <img className="Share" src={share} alt="Compartillhar" title="Compartilhar"/>
      </Button>
      <div className="RoomCodeContent">
        <ul>
          <li>
            <span>Copiar código da sala</span>
          </li>
          <li>
            <span>Copiar url da sala</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
