import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFF;

        --gray-100: #E6E8EB;
        --gray-200: #AFB2B1;

        --purple-800: #3C0691;
        --purple-900: #2A0466;

        --pink-400: #E935C5;
        --pink-500: #D541DD;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color .3s;

        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
            transition: .3s;
        }
        ::-webkit-scrollbar-thumb {
            background:  ${({ theme }) => theme.scrollbar};
            border-radius: 10px;
        }
        ::-webkit-scrollbar-track{
            background:  ${({ theme }) => theme.border};
            border-radius: 10px;
        }
    }

    body {
        background: ${({ theme }) => theme.background};
        overflow-y: hidden;
    }

    body, input, textarea, button {
        font: 500 1rem Inter, sans-serif;
        color: ${({ theme }) => theme.text};
    }

    h1 {
        font: 600 2rem Lexend, sans-serif;
        color: ${({ theme }) => theme.title};
    }

    h2 {
        font: 600 1.5rem Lexend, sans-serif;
        color: ${({ theme }) => theme.title};
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .GlobalContainer {
        display: flex;

        main {
            flex: 1;
        }
    }

    @media(max-width: 1440px) {
        html {
            // 15px
            font-size: 93.75%;
        }
    }

    @media(max-width: 1190px) {
        .GlobalContainer {
            flex-direction: column;   
        }
    }
    
    @media(max-width: 800px) {
        html {
            // 14px
            font-size: 87.50%;
        }
    }
`