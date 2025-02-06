import { ThemeProvider } from "styled-components"
import Home from "./pages/home"
import { useState } from "react"
import dark from "./styles/themes/dark"
import themeTS from "./types/theme"
import GlobalStyle from "./styles/global"

function App() {
  const [theme, setTheme] = useState<themeTS>(dark)

  const getDataFromChild = (data: themeTS) => {
      setTheme(data)
  }

  return (
      <ThemeProvider theme={theme}>
        <Home onData={getDataFromChild}/>
        <GlobalStyle />
      </ThemeProvider>
  )
}

export default App
