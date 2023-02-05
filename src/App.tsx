import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ReposGitHubProvider } from './contexts/ReposGitHub'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ReposGitHubProvider>
          <Router />
        </ReposGitHubProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
