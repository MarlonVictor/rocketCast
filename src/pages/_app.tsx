import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { PlayerContextProvider } from '../contexts/PlayerContext';
import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyle } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';


export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(lightTheme)

    function toggleTheme() {
        setTheme(theme === lightTheme ? darkTheme : lightTheme)
    }

    return (
        <PlayerContextProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <section className="GlobalContainer">
                    <main>
                        <Header toggleTheme={toggleTheme} />
                        <Component {...pageProps} />
                    </main>
                    <Player />
                </section>
            </ThemeProvider>
        </PlayerContextProvider>
    )
}