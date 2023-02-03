import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <AuthContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
