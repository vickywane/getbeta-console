import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
  }

  p {
    font-size : 1.3rem;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`
