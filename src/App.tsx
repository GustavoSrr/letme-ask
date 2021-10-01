import React from 'react'
import { ThemeContextProvider } from './contexts/TestContext'

import { Routes } from './Routes/Routes'

function App () {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  )
}

export default App
