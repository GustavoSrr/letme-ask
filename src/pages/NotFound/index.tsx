import React from 'react'
import { Helmet } from 'react-helmet'

import Arrow from '../../assets/images/arrow.svg'

import { Container } from './styles'

export const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
          <title>Letme Ask | 404</title>
      </Helmet>
      <Container>
        <h1>Página não encontrada</h1>
        <a href="/">
          <img src={Arrow} alt="Seta"/>
          Voltar para home
        </a>
      </Container>
    </>
  )
}
