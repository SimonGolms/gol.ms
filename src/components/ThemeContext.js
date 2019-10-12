import React, { createContext, useContext, useEffect, useState } from "react"
import { Global } from "@emotion/core"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import theme from "./theme.js"

const defaultContextData = {
  dark: false,
  toggle: () => {},
}

const getPrefersColorScheme = () => {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light"
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
  if (window.matchMedia("(prefers-color-scheme: no-preference)").matches)
    return "dark"
}

const ThemeContext = createContext(defaultContextData)
const useTheme = () => useContext(ThemeContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false,
  })

  useEffect(themeState => {
    /**
     * Get from Local Storage
     */
    // const lsDark = localStorage.getItem("dark") === "true"
    // setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true })

    /**
     * Get via Media Query
     */
    const prefersDark = getPrefersColorScheme() === "dark"
    setThemeState({ ...themeState, dark: prefersDark, hasThemeMounted: true })
  }, [])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeMounted) {
    return <div />
  }

  const toggle = () => {
    const dark = !themeState.dark
    // localStorage.setItem("dark", JSON.stringify(dark)) // Read from Local Storage
    setThemeState({ ...themeState, dark })
  }

  const computedTheme = themeState.dark ? theme("dark") : theme("light")

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <Global
        styles={`
          body  {
            background-color: ${computedTheme.background};
          }
        `}
      />
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
}

export { ThemeProvider, useTheme }
