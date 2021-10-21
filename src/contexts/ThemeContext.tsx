import React, { createContext, ReactNode } from 'react'
import toast from 'react-hot-toast'
import { usePersistedState } from '../hooks/usePersistedState'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

type Theme = {
  title: string;

  colors: {
    backgroundColor: string;

    borderColor: string;

    textTitleColor: string;
    textParagraphColor: string;
    textAccentColor: string;
    textAreaColor: string;

    highlighColor: string;
    answeredColor: string;
  }
}

type themeContextType = {
  theme: Theme;
  toggleTheme() : void;
}

export const themeContext = createContext({} as themeContextType)

type ThemeContextProviderProps = {
  children: ReactNode
}

export function ThemeContextProvider (props: ThemeContextProviderProps) {
  const [theme, setTheme] = usePersistedState('theme', light)

  function toggleTheme () {
    try {
      setTheme(theme.title === 'light' ? dark : light)
      toast.success('Tema alterado')
    } catch (e) {
      return toast.error('Ocorreu um erro.')
    }
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  )
}
