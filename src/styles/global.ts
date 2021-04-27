import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFF;

        --gray-50: #F7F8FA;
        --gray-100: #E6E8EB;
        --gray-200: #AFB2B1;
        --gray-500: #808080;
        --gray-800: #494D4B;

        --green-500: #04D361;
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
            background: var(--gray-200);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover{
            background: var(--gray-300);
        }
        ::-webkit-scrollbar-track{
            background: var(--gray-100);
            border-radius: 10px;
        }
    }

    body {
        background: var(--gray-50);
        overflow-y: hidden;
    }

    body, input, textarea, button {
        font: 500 1rem Inter, sans-serif;
        color: var(--gray-500);
    }

    h1 {
        font: 600 2rem Lexend, sans-serif;
        color: var(--gray-800);
    }

    h2 {
        font: 600 1.5rem Lexend, sans-serif;
        color: var(--gray-800);
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