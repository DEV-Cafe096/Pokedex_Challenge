import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: "Poppins"  "VT323", monospace; */
    font-family: "Comfortaa", sans-serif, monospace;
    }

    ul {
    list-style: none;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    }

    body {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* height: 100vh; */
    background-attachment: fixed;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    background-image: url(${({ theme }) => theme.backgroundImage});
    /* filter: brightness(); */
    
    }
`;

export default GlobalStyle;

