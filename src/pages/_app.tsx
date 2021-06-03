import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { PlayerContextProvider } from '../contexts/PlayerContext';
import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyle } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';


export default function MyApp({ Component, pageProps, router }) {
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
                        <motion.div 
                            key={router.route} 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Component {...pageProps} />
                        </motion.div>
                    </main>
                    <Player />
                </section>
            </ThemeProvider>
        </PlayerContextProvider>
    )
}