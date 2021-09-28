import React from 'react'

import Arrow from '../../assets/images/arrow.svg'

import './styles.scss'

export function NotFound () {
  return (
    <div id="NotFoundPage">
      <h1>Página não encontrada.</h1>
      <a href="/">
        <img src={Arrow} alt="Seta" />
        Voltar para home
      </a>
    </div>
  )
}
