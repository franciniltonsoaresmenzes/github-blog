import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${(props) => props.theme.colors.brand.background};
    color: ${(props) => props.theme.colors.brand.text};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.brand.blue};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    pointer-events: none;
  }

  @media (max-width: 638px) {
    html {
      font-size: 87.5%;
    }
  }
`
