import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { GlobalStyle } from '../styles/global';


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <section className="GlobalContainer">
                <main>
                    <Header />
                    <Component {...pageProps} />
                </main>
                <Player />
            </section>
        </>
    )
}