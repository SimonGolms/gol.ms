import React from "react"
import styled from "@emotion/styled"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "./ThemeContext"

const Container = styled.header`
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
`

const Header = () => {
  const themeState = useTheme()

  return (
    <Container>
      <div onClick={() => themeState.toggle()}>
        {themeState.dark ? <FaSun /> : <FaMoon />}
      </div>
    </Container>
  )
}

export default Header
