import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from '../pages/Home/index'
import { NewRoom } from '../pages/NewRoom/index'
import { Room } from '../pages/Room/index'
import { AdminRoom } from '../pages/AdminRoom/index'

import { NotFound } from '../pages/NotFound/index'

import { AuthContextProvider } from '../contexts/AuthContext'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { useTheme } from '../hooks/useTheme'

export function Routes () {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
