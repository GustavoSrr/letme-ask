import React, { createContext, ReactNode, useState } from 'react'
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

    hightlighColor: string;
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
  const [theme, setTheme] = useState<Theme>(light)

  function toggleTheme () {
    return setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  )
}
