import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { PlayerContextProvider } from '../contexts/PlayerContext';
import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyle } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';


export default function MyApp({ Component, pageProps, router }) {
    const [theme, setTheme] = useState(lightTheme)

    useEffect(() => {
        // Registrar service worker para PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js', {
                scope: '/',
            }).then((registration) => {
                console.log('Service Worker registrado com sucesso:', registration);
            }).catch((error) => {
                console.log('Erro ao registrar Service Worker:', error);
            });
        }

        // Detectar atualizações disponíveis
        let refreshing = false;
        navigator.serviceWorker?.addEventListener('controllerchange', () => {
            if (refreshing) return;
            refreshing = true;
            window.location.reload();
        });
    }, []);

    function toggleTheme() {
        setTheme(theme === lightTheme ? darkTheme : lightTheme)
    }

    return (
        <PlayerContextProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Head>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                </Head>
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