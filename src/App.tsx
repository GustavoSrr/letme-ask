import React from 'react'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { Helmet } from 'react-helmet'

import { Routes } from './Routes/Routes'

function App () {
  return (
    <ThemeContextProvider>
      <Helmet>
        <title>Letme Ask</title>
      </Helmet>
      <Routes />
    </ThemeContextProvider>
  )
}

export default App
