import { createGlobalStyle } from "styled-components"

// display: flex;
// justify-content: center;
// align-items: center;
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`

// h1 {
//     font-size: 2rem;
//     text-align: center;
//     text-transform: uppercase;
//   }

//   img {
//     border-radius: 5px;
//     height: auto;
//     width: 10rem;
//   }

//   div {
//     text-align: center;
//   }
