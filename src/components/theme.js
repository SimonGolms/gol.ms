import backgroundLight from "../images/background-light.jpg"
import backgroundDark from "../images/background-dark.jpg"

const white = "#FFFFFF"
const black = "#161617"
const gray = "#F8F8F9"

const themeLight = {
  background: gray,
  body: black,
  backgroundImage: backgroundLight,
}

const themeDark = {
  background: black,
  body: white,
  backgroundImage: backgroundDark,
}

const theme = mode => (mode === "dark" ? themeDark : themeLight)

export default theme
